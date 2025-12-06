/* eslint-disable @next/next/no-async-client-component */
"use client";

// Temporary Google sign-in test page. Safe to delete once manual testing is done.
// It renders a Google Identity button, grabs an ID token, and POSTs to the hiring/work endpoints.

import { useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";

const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

export default function GoogleTestPage() {
  const [namespace, setNamespace] = useState<"hiring" | "work">("hiring");
  const [scriptReady, setScriptReady] = useState(false);
  const [idToken, setIdToken] = useState<string | null>(null);
  const [serverResult, setServerResult] = useState<unknown>(null);
  const [error, setError] = useState<string | null>(null);
  const buttonRenderedRef = useRef(false);

  const sendToBackend = useCallback(
    async (token: string) => {
      try {
        setError(null);
        setServerResult(null);
        const res = await fetch(`/api/${namespace}/auth/google`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ idToken: token }),
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data?.error || "Backend rejected token");
        }
        setServerResult(data);
      } catch (err) {
        setError((err as Error).message);
      }
    },
    [namespace]
  );

  const handleCredentialResponse = useCallback(
    (response: { credential?: string }) => {
      if (!response?.credential) {
        setError("No credential received from Google");
        return;
      }
      setIdToken(response.credential);
      void sendToBackend(response.credential);
    },
    [sendToBackend]
  );

  useEffect(() => {
    if (!scriptReady || !clientId || buttonRenderedRef.current) return;
    const google = (window as unknown as { google?: any }).google;
    if (!google?.accounts?.id) return;

    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCredentialResponse,
    });

    const btn = document.getElementById("gsi-button");
    if (btn) {
      google.accounts.id.renderButton(btn, {
        theme: "outline",
        size: "large",
        type: "standard",
      });
      buttonRenderedRef.current = true;
    }

    google.accounts.id.prompt(); // one-tap prompt
  }, [scriptReady, handleCredentialResponse]);

  if (!clientId) {
    return (
      <main className="mx-auto max-w-xl p-8 font-sans">
        <h1 className="text-2xl font-semibold">Google Sign-in Test</h1>
        <p className="mt-4 text-red-600">
          Set NEXT_PUBLIC_GOOGLE_CLIENT_ID in .env.local to run this test page.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-6 p-8 font-sans">
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />
      <h1 className="text-2xl font-semibold">Google Sign-in Test</h1>
      <p className="text-sm text-gray-700">
        Use this page to get a real Google ID token and send it to the backend
        endpoints for either namespace: <code>/api/hiring/auth/google</code> or{" "}
        <code>/api/work/auth/google</code>.
      </p>

      <div className="flex items-center gap-4 text-sm">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="ns"
            value="hiring"
            checked={namespace === "hiring"}
            onChange={() => setNamespace("hiring")}
          />
          Hiring
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="ns"
            value="work"
            checked={namespace === "work"}
            onChange={() => setNamespace("work")}
          />
          Work
        </label>
      </div>

      <div className="flex flex-col gap-3">
        <div id="gsi-button" />
        {idToken && (
          <p className="break-all text-xs text-gray-700">
            ID token received (truncated): {idToken.slice(0, 24)}…
          </p>
        )}
      </div>

      {serverResult && (
        <pre className="whitespace-pre-wrap rounded-md bg-gray-100 p-3 text-xs">
          {JSON.stringify(serverResult, null, 2)}
        </pre>
      )}
      {error && (
        <p className="text-sm text-red-600">
          Error: {error}. Ensure the token is valid and matches the backend
          GOOGLE_CLIENT_ID.
        </p>
      )}
    </main>
  );
}
