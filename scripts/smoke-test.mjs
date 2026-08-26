import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { join } from "node:path";

const basePort = Number(process.env.SMOKE_PORT || 3100);
const nextBin = join(process.cwd(), "node_modules", "next", "dist", "bin", "next");

async function withServer(port, adminPreviewEnabled, verify) {
  const origin = `http://127.0.0.1:${port}`;
  let output = "";
  const server = spawn(process.execPath, [nextBin, "start", "-p", String(port)], {
    env: {
      ...process.env,
      ADMIN_PREVIEW_ENABLED: String(adminPreviewEnabled),
      GA4_PROPERTY_ID: "",
      GA4_CLIENT_EMAIL: "",
      GA4_PRIVATE_KEY: "",
    },
    stdio: ["ignore", "pipe", "pipe"],
  });

  server.stdout.on("data", (chunk) => {
    output += chunk.toString();
  });
  server.stderr.on("data", (chunk) => {
    output += chunk.toString();
  });

  const waitForServer = async () => {
    const deadline = Date.now() + 30_000;

    while (Date.now() < deadline) {
      if (server.exitCode !== null) {
        throw new Error(`Next.js berhenti sebelum siap.\n${output}`);
      }

      try {
        const response = await fetch(origin, {
          signal: AbortSignal.timeout(2_000),
        });
        if (response.ok) return;
      } catch {}

      await new Promise((resolve) => setTimeout(resolve, 250));
    }

    throw new Error(`Next.js tidak siap dalam 30 detik.\n${output}`);
  };

  try {
    await waitForServer();
    await verify(origin);
    await new Promise((resolve) => setTimeout(resolve, 100));
    assert.doesNotMatch(output, /unhandledRejection|client_email field/i);
  } finally {
    server.kill();
  }
}

async function expectStatus(origin, path, expectedStatus) {
  const response = await fetch(`${origin}${path}`);
  assert.equal(
    response.status,
    expectedStatus,
    `${path} menghasilkan ${response.status}, diharapkan ${expectedStatus}`
  );
  return response;
}

await withServer(basePort, false, async (origin) => {
  await expectStatus(origin, "/", 200);
  await expectStatus(origin, "/about", 200);
  await expectStatus(origin, "/department/batch2", 200);
  await expectStatus(origin, "/showcase/1", 200);

  const login = await expectStatus(origin, "/login", 200);
  assert.match(await login.text(), /Admin preview dinonaktifkan/i);

  await expectStatus(origin, "/dashboard", 404);
  await expectStatus(origin, "/api/analytics?metric=notAllowed", 400);
  await expectStatus(origin, "/api/analytics?metric=activeUsers", 404);

  const robots = await expectStatus(origin, "/robots.txt", 200);
  assert.match(await robots.text(), /Disallow: \/admin\//);

  const sitemap = await expectStatus(origin, "/sitemap.xml", 200);
  assert.match(await sitemap.text(), /https:\/\/uvics\.my\.id\/showcase\/1/);
});

await withServer(basePort + 1, true, async (origin) => {
  await expectStatus(origin, "/dashboard", 200);

  const historical = await expectStatus(
    origin,
    "/api/analytics?metric=activeUsers&range=7days",
    503
  );
  assert.match((await historical.json()).error, /belum dikonfigurasi/i);

  await expectStatus(
    origin,
    "/api/analytics?metric=realtimeUsers&range=real-time",
    503
  );
});

console.log(
  "Smoke test lulus: route publik, gate admin, analytics, fallback GA4, dan SEO."
);
