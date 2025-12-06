import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Proxy all /api/* requests to the Express server so the frontend can call the
// backend without hard-coding its port in client code.
const API_BASE =
  process.env.API_BASE_URL?.replace(/\/$/, "") || "http://localhost:5000";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Forward the full /api/* path to the backend (Express expects the /api prefix).
  const targetUrl = new URL(pathname + search, API_BASE);

  return NextResponse.rewrite(targetUrl);
}

export const config = {
  matcher: "/api/:path*",
};
