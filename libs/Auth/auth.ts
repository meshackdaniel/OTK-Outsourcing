type AuthProvider = "local" | "google";

export interface PublicUser {
  id: string;
  email: string;
  name: string;
  provider: AuthProvider;
}

interface ApiResponse<T> {
  message: string;
  user: PublicUser;
  token: string;
  googleVerified?: boolean;
}

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") || "/api";

async function request<T>(
  path: string,
  options: RequestInit
): Promise<ApiResponse<T>> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error || "Request failed");
  }

  return data as ApiResponse<T>;
}

export async function register({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) {
  return request<PublicUser>("/register", {
    method: "POST",
    body: JSON.stringify({ email, password, name }),
  });
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return request<PublicUser>("/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function googleSignIn({
  email,
  name,
  googleId,
  idToken,
}: {
  email: string;
  name?: string;
  googleId?: string;
  idToken?: string;
}) {
  return request<PublicUser>("/auth/google", {
    method: "POST",
    body: JSON.stringify({ email, name, googleId, idToken }),
  });
}
