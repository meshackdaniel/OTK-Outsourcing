import { google } from "googleapis";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUrl = process.env.GOOGLE_REDIRECT_URL;

  if (!clientId || !clientSecret || !redirectUrl) {
    return NextResponse.json(
      { error: "Google OAuth env vars are missing" },
      { status: 500 }
    );
  }

  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing code" }, { status: 400 });
  }

  const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUrl);

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const oauth2 = google.oauth2("v2");
    const { data: user } = await oauth2.userinfo.get({ auth: oauth2Client });

    return NextResponse.json({
      success: true,
      user,
      tokens,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to exchange Google auth code", details: `${err}` },
      { status: 500 }
    );
  }
}
