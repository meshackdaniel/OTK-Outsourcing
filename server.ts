import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
import cors from "cors";
import express from "express";
import type { NextFunction, Request, Response } from "express";
import crypto from "node:crypto";
import { OAuth2Client } from "google-auth-library";
import nodemailer from "nodemailer";

// Load env files so server sees GOOGLE_* vars even when run with ts-node directly.
dotenv.config();
const envLocalPath = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envLocalPath)) {
  dotenv.config({ path: envLocalPath, override: true });
}

type AuthProvider = "local" | "google";
type Namespace = "hiring" | "work";

interface UserRecord {
  id: string;
  email: string;
  name: string;
  provider: AuthProvider;
  passwordHash?: string;
  salt?: string;
  googleId?: string;
}

interface RegisterRequestBody {
  email?: string;
  password?: string;
  name?: string;
  fullName?: string;
  fullname?: string;
}

interface LoginRequestBody {
  email?: string;
  password?: string;
}

interface GoogleSigninBody {
  email?: string;
  name?: string;
  googleId?: string;
  idToken?: string;
}

interface OtpEntry {
  code: string;
  email: string;
  expiresAt: number;
}

// Default to the same port used in middleware so the proxy works out-of-the-box.
const PORT = Number(process.env.PORT) || 5000;
const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleOAuthClient = googleClientId
  ? new OAuth2Client(googleClientId)
  : null;

// Single in-memory store shared across namespaces.
const users = new Map<string, UserRecord>();
const otps = new Map<string, OtpEntry>();

export function resetUsers() {
  users.clear();
  otps.clear();
}

const app = express();

app.use(cors());
app.use(express.json());

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function createPasswordHash(password: string): { salt: string; hash: string } {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 10_000, 64, "sha512")
    .toString("hex");
  return { salt, hash };
}

function passwordMatches(password: string, user: UserRecord): boolean {
  if (!user.salt || !user.passwordHash) return false;
  const derived = crypto
    .pbkdf2Sync(password, user.salt, 10_000, 64, "sha512")
    .toString("hex");
  const known = Buffer.from(user.passwordHash, "hex");
  const attempt = Buffer.from(derived, "hex");
  return known.length === attempt.length && crypto.timingSafeEqual(known, attempt);
}

function createSessionToken(): string {
  return crypto.randomBytes(24).toString("hex");
}

function generateOtp(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendOtpEmail(email: string, code: string) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 587);

  if (!user || !pass) {
    // eslint-disable-next-line no-console
    console.warn("SMTP credentials missing; OTP email not sent");
    return;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: user,
    to: email,
    subject: "Your verification code",
    text: `Your verification code is ${code}. It expires in 10 minutes.`,
  });
}

async function verifyGoogleIdToken(idToken: string) {
  if (!googleOAuthClient || !googleClientId) {
    throw new Error("GOOGLE_CLIENT_ID is not configured");
  }

  const ticket = await googleOAuthClient.verifyIdToken({
    idToken,
    audience: googleClientId,
  });

  return ticket.getPayload();
}

function toPublicUser(user: UserRecord) {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    provider: user.provider,
  };
}

function parseNamespace(ns: string): Namespace | null {
  return ns === "hiring" || ns === "work" ? ns : null;
}

function getStore(_ns: Namespace) {
  return users;
}

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Friendly root listing to avoid 404 when hitting the base URL.
app.get("/", (_req, res) => {
  res.json({
    status: "ok",
    message: "OTK backend is running",
    routes: {
      health: "/health",
      hiring: {
        register: "/api/hiring/register",
        login: "/api/hiring/login",
        logout: "/api/hiring/logout",
        google: "/api/hiring/auth/google",
      },
      work: {
        register: "/api/work/register",
        login: "/api/work/login",
        logout: "/api/work/logout",
        google: "/api/work/auth/google",
      },
    },
  });
});

app.post(
  "/api/:ns/register",
  (req: Request<{ ns: string }, unknown, RegisterRequestBody>, res: Response) => {
    const ns = parseNamespace(req.params.ns);
    if (!ns) return res.status(404).json({ error: "Invalid namespace" });

    const { email, password } = req.body ?? {};
    const rawName = req.body?.fullName ?? req.body?.fullname ?? req.body?.name;

    if (typeof email !== "string" || !email.trim()) {
      return res.status(400).json({ error: "email is required" });
    }
    if (!isValidEmail(email.trim())) {
      return res.status(400).json({ error: "email must be valid" });
    }
    if (typeof password !== "string" || password.trim().length < 8) {
      return res
        .status(400)
        .json({ error: "password must be at least 8 characters" });
    }
    if (typeof rawName !== "string" || !rawName.trim()) {
      return res.status(400).json({ error: "fullname is required" });
    }

    const normalizedEmail = normalizeEmail(email);
    const fullName = rawName.trim();
    const store = getStore(ns);

    if (store.has(normalizedEmail)) {
      return res.status(409).json({ error: "User already exists" });
    }

    const { salt, hash } = createPasswordHash(password);
    const otp = generateOtp();
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

    const user: UserRecord = {
      id: crypto.randomUUID(),
      email: normalizedEmail,
      name: fullName,
      provider: "local",
      salt,
      passwordHash: hash,
    };

    store.set(normalizedEmail, user);
    otps.set(normalizedEmail, { code: otp, email: normalizedEmail, expiresAt });
    void sendOtpEmail(normalizedEmail, otp).catch((err) => {
      // eslint-disable-next-line no-console
      console.warn("Failed to send OTP email", err);
    });

    return res.status(201).json({
      message: `Registered successfully (${ns}). Check your email for the verification code.`,
      user: toPublicUser(user),
      pendingVerification: true,
    });
  }
);

app.post(
  "/api/:ns/login",
  (req: Request<{ ns: string }, unknown, LoginRequestBody>, res: Response) => {
    const ns = parseNamespace(req.params.ns);
    if (!ns) return res.status(404).json({ error: "Invalid namespace" });

    const { email, password } = req.body ?? {};

    if (typeof email !== "string" || !email.trim()) {
      return res.status(400).json({ error: "email is required" });
    }
    if (!isValidEmail(email.trim())) {
      return res.status(400).json({ error: "email must be valid" });
    }
    if (typeof password !== "string" || !password.trim()) {
      return res.status(400).json({ error: "password is required" });
    }

    const normalizedEmail = normalizeEmail(email);
    const store = getStore(ns);
    const user = store.get(normalizedEmail);

    if (!user || user.provider !== "local") {
      return res.status(404).json({ error: "User not found" });
    }

    if (!passwordMatches(password, user)) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const otpEntry = otps.get(normalizedEmail);
    if (otpEntry) {
      return res
        .status(403)
        .json({ error: "Account not verified. Please confirm OTP." });
    }

    return res.json({
      message: `Logged in successfully (${ns})`,
      user: toPublicUser(user),
      token: createSessionToken(),
    });
  }
);

app.post("/api/:ns/logout", (req: Request<{ ns: string }>, res: Response) => {
  const ns = parseNamespace(req.params.ns);
  if (!ns) return res.status(404).json({ error: "Invalid namespace" });

  // In-memory demo: there is no persisted session to revoke; accept the request.
  return res.json({
    message: `Logged out (${ns})`,
  });
});

app.post(
  "/api/:ns/verify-otp",
  (req: Request<{ ns: string }>, res: Response) => {
    const ns = parseNamespace(req.params.ns);
    if (!ns) return res.status(404).json({ error: "Invalid namespace" });

    const { email, code } = req.body ?? {};
    if (typeof email !== "string" || !email.trim()) {
      return res.status(400).json({ error: "email is required" });
    }
    if (!isValidEmail(email.trim())) {
      return res.status(400).json({ error: "email must be valid" });
    }
    if (typeof code !== "string" || code.trim().length !== 6) {
      return res.status(400).json({ error: "code must be a 6-digit string" });
    }

    const normalizedEmail = normalizeEmail(email);
    const user = users.get(normalizedEmail);
    if (!user) return res.status(404).json({ error: "User not found" });

    const otpEntry = otps.get(normalizedEmail);
    if (!otpEntry || otpEntry.code !== code.trim()) {
      return res.status(400).json({ error: "Invalid code" });
    }
    if (Date.now() > otpEntry.expiresAt) {
      otps.delete(normalizedEmail);
      return res.status(400).json({ error: "Code expired. Request a new one." });
    }

    otps.delete(normalizedEmail);
    return res.json({
      message: `Account verified (${ns})`,
      user: toPublicUser(user),
      token: createSessionToken(),
    });
  }
);

app.post(
  "/api/:ns/resend-otp",
  (req: Request<{ ns: string }>, res: Response) => {
    const ns = parseNamespace(req.params.ns);
    if (!ns) return res.status(404).json({ error: "Invalid namespace" });

    const { email } = req.body ?? {};
    if (typeof email !== "string" || !email.trim()) {
      return res.status(400).json({ error: "email is required" });
    }
    if (!isValidEmail(email.trim())) {
      return res.status(400).json({ error: "email must be valid" });
    }

    const normalizedEmail = normalizeEmail(email);
    const user = users.get(normalizedEmail);
    if (!user) return res.status(404).json({ error: "User not found" });

    const otp = generateOtp();
    const expiresAt = Date.now() + 10 * 60 * 1000;
    otps.set(normalizedEmail, { code: otp, email: normalizedEmail, expiresAt });
    void sendOtpEmail(normalizedEmail, otp).catch((err) => {
      // eslint-disable-next-line no-console
      console.warn("Failed to resend OTP email", err);
    });

    return res.json({ message: `Verification code resent (${ns})` });
  }
);

app.post(
  "/api/:ns/auth/google",
  async (
    req: Request<{ ns: string }, unknown, GoogleSigninBody>,
    res: Response
  ) => {
    const ns = parseNamespace(req.params.ns);
    if (!ns) return res.status(404).json({ error: "Invalid namespace" });

    const { email, name, googleId, idToken } = req.body ?? {};

    try {
      const verifiedPayload = idToken
        ? await verifyGoogleIdToken(idToken)
        : undefined;

      const verifiedEmail =
        typeof verifiedPayload?.email === "string"
          ? verifiedPayload.email
          : undefined;
      const providedEmail =
        typeof email === "string" && email.trim() ? email.trim() : undefined;

      const normalizedEmail = (verifiedEmail || providedEmail)
        ? normalizeEmail(verifiedEmail || providedEmail || "")
        : "";

      if (!normalizedEmail) {
        return res
          .status(400)
          .json({ error: "email from Google profile is required" });
      }

      const displayName =
        (typeof verifiedPayload?.name === "string" &&
          verifiedPayload.name.trim()) ||
        (typeof name === "string" && name.trim()) ||
        "Google User";

      const googleIdentifier =
        verifiedPayload?.sub || googleId || idToken || verifiedEmail;

      const store = getStore(ns);
      const existing = store.get(normalizedEmail);

      if (existing && existing.provider !== "google") {
        return res
          .status(400)
          .json({ error: "Account exists with a different sign-in method" });
      }

      let user: UserRecord | undefined = existing;

      if (!user) {
        user = {
          id: crypto.randomUUID(),
          email: normalizedEmail,
          name: displayName,
          provider: "google",
          googleId: googleIdentifier,
        };
        store.set(normalizedEmail, user);
      } else if (!user.googleId && googleIdentifier) {
        user.googleId = googleIdentifier;
      }

      return res.json({
        message: `Google sign-in accepted (${ns})`,
        user: toPublicUser(user),
        token: createSessionToken(),
        googleVerified: Boolean(verifiedPayload || googleIdentifier),
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Google sign-in failed", err);
      return res.status(401).json({ error: "Invalid Google sign-in" });
    }
  }
);

// Simple catch-all for unhandled routes.
app.use((_req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use(
  (
    err: unknown,
    _req: Request,
    res: Response<{ error: string }>,
    _next: NextFunction
  ) => {
    // eslint-disable-next-line no-console
    console.error("Unexpected error", err);
    res.status(500).json({ error: "Internal server error" });
  }
);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API server running on http://localhost:${PORT}`);
});

export default app;
