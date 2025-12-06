import assert from "node:assert/strict";
import request from "supertest";
import app, { resetUsers } from "../server.ts";

async function main() {
  resetUsers();

  const hiringEmail = `hiring_${Date.now()}@example.com`;
  const workEmail = `work_${Date.now()}@example.com`;

  // Hiring register
  const regHiring = await request(app)
    .post("/api/hiring/register")
    .send({ email: hiringEmail, password: "secret123", name: "Hiring User" })
    .expect(201);
  assert.equal(regHiring.body.user.email, hiringEmail);
  assert.equal(regHiring.body.user.provider, "local");

  // Duplicate hiring register
  await request(app)
    .post("/api/hiring/register")
    .send({ email: hiringEmail, password: "secret123", name: "Hiring User" })
    .expect(409);

  // Hiring login wrong password
  await request(app)
    .post("/api/hiring/login")
    .send({ email: hiringEmail, password: "wrong" })
    .expect(401);

  // Hiring login success
  const loginHiring = await request(app)
    .post("/api/hiring/login")
    .send({ email: hiringEmail, password: "secret123" })
    .expect(200);
  assert.equal(loginHiring.body.user.email, hiringEmail);

  // Work register separate store
  const regWork = await request(app)
    .post("/api/work/register")
    .send({ email: workEmail, password: "secret456", name: "Work User" })
    .expect(201);
  assert.equal(regWork.body.user.email, workEmail);

  // Work login success
  await request(app)
    .post("/api/work/login")
    .send({ email: workEmail, password: "secret456" })
    .expect(200);

  // Logout endpoints accept any request and confirm
  await request(app).post("/api/hiring/logout").expect(200);
  await request(app).post("/api/work/logout").expect(200);

  // Google sign-in using a placeholder googleId (no idToken to avoid network)
  const googleRes = await request(app)
    .post("/api/hiring/auth/google")
    .send({
      email: `google_${Date.now()}@example.com`,
      googleId: "fake-google-id",
      name: "Google Hiring",
    })
    .expect(200);
  assert.equal(googleRes.body.user.provider, "google");
  assert.equal(googleRes.body.googleVerified, true);

  // Invalid namespace returns 404
  await request(app)
    .post("/api/invalid/register")
    .send({ email: "x@example.com", password: "pw", name: "x" })
    .expect(404);

  // eslint-disable-next-line no-console
  console.log("API namespace tests passed");
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
