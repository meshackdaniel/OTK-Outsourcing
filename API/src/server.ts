import dotenv from "dotenv";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import crypto from "node:crypto";
import mysql from "mysql2/promise";
import nodemailer from "nodemailer";

dotenv.config({ path: ".env.local" });

// import { handlers } from "@/auth"
// export const { GET, POST } = handlers

type AuthProvider = "local" | "google";

interface UserRecord {
  id: string;
  email: string;
  name: string;
  provider: AuthProvider;
  passwordHash?: string;
  salt?: string;
  googleId?: string;
  isActive?: number;
}

interface RegisterRequestBody {
  email?: string;
  password?: string;
  name?: string;
}

interface VerifyRegistrationBody {
  email?: string;
  code?: string;
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

const PORT = Number(process.env.PORT) || 5000;
// MySQL connection pool for all requests.
const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});
// Email settings (optional).
const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT) || 587;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASSWORD;
const smtpSecure =
  process.env.SMTP_SECURE === "true" || smtpPort === 465;
const smtpConfigured = Boolean(smtpHost && smtpUser && smtpPass);
// Create an email transporter only if SMTP is set.
const smtpTransport = smtpConfigured
  ? nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })
  : null;

const app = express();

app.use(cors());
app.use(express.json());

// List of routes shown in the API index.
const documentedRoutes = [
  { method: "GET", path: "/", description: "Lists available API endpoints" },
  { method: "GET", path: "/health", description: "Health check" },
  {
    method: "POST",
    path: "/api/register",
    description: "Start local registration (sends verification code)",
  },
  {
    method: "POST",
    path: "/api/register/verify",
    description: "Verify registration code and create user",
  },
  {
    method: "POST",
    path: "/api/register/resend",
    description: "Resend verification code",
  },
  { method: "POST", path: "/api/login", description: "Login a local user" },
  { method: "POST", path: "/api/logout", description: "Logout a user" },
  { method: "DELETE", path: "/api/account", description: "Delete a user account" },
  { method: "GET", path: "/api/me", description: "Get user profile" },
  { method: "POST", path: "/api/auth/google", description: "Google OAuth entry point" },
];

function respondWithRoutes(res: Response) {
  res.json({
    message: "OTK Auth API",
    port: PORT,
    routes: documentedRoutes,
  });
}

app.get("/", (_req, res) => {
  respondWithRoutes(res);
});

app.get("/api", (_req, res) => {
  respondWithRoutes(res);
});

// Clean up emails before saving or searching.
function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

// Make a salt + hash for a password.
function createPasswordHash(password: string): { salt: string; hash: string } {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 10_000, 64, "sha512")
    .toString("hex");
  return { salt, hash };
}

// Check a password safely.
function passwordMatches(password: string, user: UserRecord): boolean {
  if (!user.salt || !user.passwordHash) return false;
  const derived = crypto
    .pbkdf2Sync(password, user.salt, 10_000, 64, "sha512")
    .toString("hex");
  const known = Buffer.from(user.passwordHash, "hex");
  const attempt = Buffer.from(derived, "hex");
  return known.length === attempt.length && crypto.timingSafeEqual(known, attempt);
}

// Create a random session token (demo only).
function createSessionToken(): string {
  return crypto.randomBytes(24).toString("hex");
}

// Create a 5-digit verification code.
function createVerificationCode(): string {
  return crypto.randomInt(0, 100000).toString().padStart(5, "0");
}

// Remove private fields before sending user data.
function toPublicUser(user: UserRecord) {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    provider: user.provider,
  };
}

// Turn a DB row into a UserRecord.
function mapUserRow(row: mysql.RowDataPacket): UserRecord {
  return {
    id: String(row.id),
    email: String(row.email),
    name: String(row.name),
    provider: row.provider as AuthProvider,
    passwordHash: row.password_hash ? String(row.password_hash) : undefined,
    salt: row.salt ? String(row.salt) : undefined,
    googleId: row.google_id ? String(row.google_id) : undefined,
    isActive: typeof row.is_active === "number" ? row.is_active : undefined,
  };
}

// Rate limit for resend requests (email + IP).
const resendAttempts = new Map<string, number[]>();
const RESEND_LIMIT = 3;
const RESEND_WINDOW_MS = 10 * 60 * 1000;

// Keep recent resend attempts and apply the limit.
function canResendCode(key: string): boolean {
  const now = Date.now();
  const attempts = resendAttempts.get(key) ?? [];
  const recent = attempts.filter((ts) => now - ts < RESEND_WINDOW_MS);
  recent.push(now);
  resendAttempts.set(key, recent);
  return recent.length <= RESEND_LIMIT;
}

// Send the verification email (fails if SMTP is missing).
async function sendVerificationEmail(email: string, code: string) {
  if (!smtpTransport) {
    throw new Error("SMTP is not configured");
  }

  await smtpTransport.sendMail({
    from: process.env.SMTP_FROM ?? smtpUser,
    to: email,
    subject: "Your OTK verification code",
    text: `Your verification code is ${code}. It expires in 60 seconds.`,
  });
}

// Health check for DB and email.
app.get("/health", async (_req, res) => {
  try {
    const checks = await Promise.allSettled([
      dbPool.query("SELECT 1"),
      smtpTransport ? smtpTransport.verify() : Promise.resolve("not_configured"),
    ]);

    const dbConnected = checks[0].status === "fulfilled";
    const smtpConnected =
      smtpConfigured && checks[1].status === "fulfilled";

    return res.json({
      status: "ok",
      dbConnected,
      smtpConnected,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Health check DB error", err);
    return res.status(500).json({
      status: "ok",
      dbConnected: false,
      smtpConnected: false,
    });
  }
});

// Start signup and create a verification record.
app.post(
  "/api/register",
  async (req: Request<unknown, unknown, RegisterRequestBody>, res: Response) => {
    const { email, name, password } = req.body ?? {};

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      typeof name !== "string" ||
      !email.trim() ||
      !password.trim() ||
      !name.trim()
    ) {
      return res
        .status(400)
        .json({ error: "email, name, and password are required" });
    }

    const normalizedEmail = normalizeEmail(email);

    const [existingRows] = await dbPool.query<mysql.RowDataPacket[]>(
      "SELECT id FROM users WHERE email = ? LIMIT 1",
      [normalizedEmail]
    );

    if (existingRows.length > 0) {
      return res.status(409).json({ error: "User already exists" });
    }

    const { salt, hash } = createPasswordHash(password);
    const code = createVerificationCode();
    const expiresAt = new Date(Date.now() + 60 * 1000);

    await dbPool.query(
      `INSERT INTO user_verifications
        (id, email, name, password_hash, salt, code, expires_at)
       VALUES (?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        password_hash = VALUES(password_hash),
        salt = VALUES(salt),
        code = VALUES(code),
        expires_at = VALUES(expires_at)`,
      [
        crypto.randomUUID(),
        normalizedEmail,
        name.trim(),
        hash,
        salt,
        code,
        expiresAt,
      ]
    );

    await sendVerificationEmail(normalizedEmail, code);

    return res.status(202).json({
      message: "Verification code sent",
      email: normalizedEmail,
    });
  }
);

// Verify the code and create the user.
app.post(
  "/api/register/verify",
  async (
    req: Request<unknown, unknown, VerifyRegistrationBody>,
    res: Response
  ) => {
    const { email, code } = req.body ?? {};

    if (
      typeof email !== "string" ||
      typeof code !== "string" ||
      !email.trim() ||
      !code.trim()
    ) {
      return res.status(400).json({ error: "email and code are required" });
    }

    const normalizedEmail = normalizeEmail(email);

    const [rows] = await dbPool.query<mysql.RowDataPacket[]>(
      "SELECT * FROM user_verifications WHERE email = ? LIMIT 1",
      [normalizedEmail]
    );
    const pending = rows[0] as {
      id: string;
      email: string;
      name: string;
      password_hash: string;
      salt: string;
      code: string;
      expires_at: Date;
    } | undefined;

    if (!pending) {
      return res.status(404).json({ error: "Verification not found" });
    }

    if (pending.code !== code.trim()) {
      return res.status(401).json({ error: "Invalid verification code" });
    }

    if (new Date(pending.expires_at).getTime() < Date.now()) {
      return res.status(410).json({ error: "Verification code expired" });
    }

    const connection = await dbPool.getConnection();
    try {
      await connection.beginTransaction();

      const user: UserRecord = {
        id: crypto.randomUUID(),
        email: normalizedEmail,
        name: pending.name,
        provider: "local",
        passwordHash: pending.password_hash,
        salt: pending.salt,
      };

      await connection.query(
        "INSERT INTO users (id, email, name, provider, password_hash, salt, is_active) VALUES (?, ?, ?, ?, ?, ?, 1)",
        [
          user.id,
          user.email,
          user.name,
          user.provider,
          user.passwordHash,
          user.salt,
        ]
      );

      await connection.query(
        "DELETE FROM user_verifications WHERE email = ?",
        [normalizedEmail]
      );

      await connection.commit();

      return res.status(201).json({
        message: "Account verified",
        user: toPublicUser(user),
        token: createSessionToken(),
      });
    } catch (err) {
      await connection.rollback();
      throw err;
    } finally {
      connection.release();
    }
  }
);

// Resend the code with a rate limit.
app.post(
  "/api/register/resend",
  async (
    req: Request<unknown, unknown, VerifyRegistrationBody>,
    res: Response
  ) => {
    const { email } = req.body ?? {};

    if (typeof email !== "string" || !email.trim()) {
      return res.status(400).json({ error: "email is required" });
    }

    const normalizedEmail = normalizeEmail(email);
    const clientIp = String(req.headers["x-forwarded-for"] ?? req.ip ?? "unknown");
    const limitKey = `${normalizedEmail}:${clientIp}`;

    if (!canResendCode(limitKey)) {
      return res.status(429).json({ error: "Too many resend attempts" });
    }

    const [rows] = await dbPool.query<mysql.RowDataPacket[]>(
      "SELECT id FROM user_verifications WHERE email = ? LIMIT 1",
      [normalizedEmail]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Verification not found" });
    }

    const code = createVerificationCode();
    const expiresAt = new Date(Date.now() + 60 * 1000);

    await dbPool.query(
      "UPDATE user_verifications SET code = ?, expires_at = ? WHERE email = ?",
      [code, expiresAt, normalizedEmail]
    );

    await sendVerificationEmail(normalizedEmail, code);

    return res.json({
      message: "Verification code resent",
      email: normalizedEmail,
    });
  }
);

// Login with email and password.
app.post(
  "/api/login",
  async (req: Request<unknown, unknown, LoginRequestBody>, res: Response) => {
    const { email, password } = req.body ?? {};

    if (typeof email !== "string" || typeof password !== "string") {
      return res
        .status(400)
        .json({ error: "email and password are required" });
    }

    const normalizedEmail = normalizeEmail(email);
    const [rows] = await dbPool.query<mysql.RowDataPacket[]>(
      "SELECT * FROM users WHERE email = ? LIMIT 1",
      [normalizedEmail]
    );
    const user = rows[0] ? mapUserRow(rows[0]) : undefined;

    if (!user || user.provider !== "local") {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.isActive === 0) {
      return res.status(403).json({ error: "Account not active" });
    }

    if (!passwordMatches(password, user)) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    return res.json({
      message: "Logged in successfully",
      user: toPublicUser(user),
      token: createSessionToken(),
    });
  }
);

// Logout by clearing the cookie.
app.post("/api/logout", (_req, res) => {
  // Tokens are stateless in this demo, so there's nothing to revoke server-side.
  res.clearCookie("token");
  return res.status(200).json({ message: "Logged out successfully" });
});

// Delete an account by email.
app.delete("/api/account", async (req: Request, res: Response) => {
  const { email } = req.body ?? {};

  if (typeof email !== "string" || !email.trim()) {
    return res.status(400).json({ error: "email is required" });
  }

  const normalizedEmail = normalizeEmail(email);

  const [rows] = await dbPool.query<mysql.RowDataPacket[]>(
    "SELECT id FROM users WHERE email = ? LIMIT 1",
    [normalizedEmail]
  );

  if (rows.length === 0) {
    return res.status(404).json({ error: "User not found" });
  }

  await dbPool.query("DELETE FROM users WHERE email = ?", [normalizedEmail]);

  return res.json({ message: "Account deleted" });
});

// Get a public user profile by email.
app.get("/api/me", async (req: Request, res: Response) => {
  const email = typeof req.query.email === "string" ? req.query.email : "";

  if (!email.trim()) {
    return res.status(400).json({ error: "email is required" });
  }

  const normalizedEmail = normalizeEmail(email);
  const [rows] = await dbPool.query<mysql.RowDataPacket[]>(
    "SELECT * FROM users WHERE email = ? LIMIT 1",
    [normalizedEmail]
  );
  const user = rows[0] ? mapUserRow(rows[0]) : undefined;

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.json({ user: toPublicUser(user) });
});

// Google sign-in: create or update the user.
app.post(
  "/api/auth/google",
  async (req: Request<unknown, unknown, GoogleSigninBody>, res: Response) => {
    const { email, name, googleId, idToken } = req.body ?? {};

    if (typeof email !== "string" || !email.trim()) {
      return res
        .status(400)
        .json({ error: "email from Google profile is required" });
    }

    const normalizedEmail = normalizeEmail(email);
    const [rows] = await dbPool.query<mysql.RowDataPacket[]>(
      "SELECT * FROM users WHERE email = ? LIMIT 1",
      [normalizedEmail]
    );
    const existing = rows[0] ? mapUserRow(rows[0]) : undefined;

    if (existing && existing.provider !== "google") {
      return res
        .status(400)
        .json({ error: "Account exists with a different sign-in method" });
    }

    const googleIdentifier = googleId ?? idToken;
    const displayName = typeof name === "string" && name.trim()
      ? name.trim()
      : "Google User";

    let user: UserRecord | undefined = existing;

    if (!user) {
      user = {
        id: crypto.randomUUID(),
        email: normalizedEmail,
        name: displayName,
        provider: "google",
        googleId: googleIdentifier,
      };
      await dbPool.query(
        "INSERT INTO users (id, email, name, provider, google_id) VALUES (?, ?, ?, ?, ?)",
        [user.id, user.email, user.name, user.provider, user.googleId ?? null]
      );
    } else if (!user.googleId && googleIdentifier) {
      user.googleId = googleIdentifier;
      await dbPool.query("UPDATE users SET google_id = ? WHERE id = ?", [
        user.googleId,
        user.id,
      ]);
    }

    return res.json({
      message: "Google sign-in accepted",
      user: toPublicUser(user),
      token: createSessionToken(),
      googleVerified: Boolean(googleIdentifier),
    });
  }
);

// Catch-all for unknown routes.
app.use((_req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler that returns JSON.
app.use(
  (
    err: unknown,
    _req: Request,
    res: Response<{ error: string }>,
    _next: NextFunction
  ) => {
    const status =
      typeof err === "object" && err && "status" in err
        ? Number((err as { status?: unknown }).status)
        : 500;
    const type =
      typeof err === "object" && err && "type" in err
        ? String((err as { type?: unknown }).type)
        : "";

    if (type === "entity.parse.failed") {
      return res.status(400).json({ error: "Invalid JSON body" });
    }

    // eslint-disable-next-line no-console
    console.error("Unexpected error", err);
    return res
      .status(Number.isFinite(status) && status >= 400 ? status : 500)
      .json({ error: "Internal server error" });
  }
);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API server running on http://localhost:${PORT}`);
});

export default app;
