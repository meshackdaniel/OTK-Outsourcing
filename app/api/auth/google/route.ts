import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUrl = process.env.GOOGLE_REDIRECT_URL;

  if (!clientId || !clientSecret || !redirectUrl) {
    return NextResponse.json(
      { error: "Google OAuth env vars are missing" },
      { status: 500 }
    );
  }

  const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUrl);

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: ["email", "profile"],
  });

  return NextResponse.redirect(authUrl);
}
