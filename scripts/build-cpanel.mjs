/**
 * Builds a static export for classic cPanel hosting (Apache + public_html).
 * Output folder: cpanel-upload/  (upload ALL contents to public_html)
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { assertDevServerStopped } from "./assert-dev-server-stopped.mjs";
import { buildHtaccess } from "./htaccess-cpanel.js";

const require = createRequire(import.meta.url);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "out");
const uploadDir = path.join(root, "cpanel-upload");
const middlewarePath = path.join(root, "middleware.ts");
const middlewareBackup = path.join(root, "middleware.cpanel-build.bak");

const GONE_PATHS = [
  "/talismania-kasyno-najlepsze-online-kasyno-w-polsce-2026",
  "/my-math-check-on-the-piratepots-casino-welcome-bonus-offer",
  "/best-online-slot-machine-casinos-a-comprehensive-guide",
];

function rmDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(from, to);
    } else {
      fs.copyFileSync(from, to);
    }
  }
}

async function main() {
  let middlewareMoved = false;
  try {
    await assertDevServerStopped();

    console.log("Cleaning previous build…");
    rmDir(outDir);
    rmDir(uploadDir);
    execSync("npm run clean", { cwd: root, stdio: "inherit" });

    if (fs.existsSync(middlewarePath)) {
      fs.renameSync(middlewarePath, middlewareBackup);
      middlewareMoved = true;
      console.log("Temporarily disabled middleware.ts (not supported on static cPanel export).");
    }

    console.log("Building static export (CPANEL_BUILD=1)…");
    const buildEnv = { ...process.env, CPANEL_BUILD: "1" };
    delete buildEnv.CPANEL_STATIC;
    execSync("npx next build", {
      cwd: root,
      stdio: "inherit",
      env: buildEnv,
    });

    if (!fs.existsSync(outDir)) {
      throw new Error("Build did not produce an out/ folder. Check next.config.js output: export.");
    }

    console.log("Preparing cpanel-upload/…");
    copyDir(outDir, uploadDir);

    const { getRedirects } = require(path.join(root, "lib", "siteRedirects.js"));
    const redirects = getRedirects();
    fs.writeFileSync(
      path.join(uploadDir, ".htaccess"),
      buildHtaccess(redirects, GONE_PATHS),
      "utf8",
    );

    const readme = `# cPanel upload package

Upload **everything inside this folder** to your domain's \`public_html\` (or subdomain document root).

## Steps
1. In cPanel → **File Manager** → open \`public_html\`.
2. Delete old site files (backup first) or upload into a clean folder.
3. Upload all files from \`cpanel-upload/\` including \`.htaccess\` and \`_next/\`.
4. Ensure **Show Hidden Files** is enabled so \`.htaccess\` is uploaded.
5. If inner pages 404: delete old WordPress folders with the same name in \`public_html\` (e.g. empty \`online-termine\` folder), then re-upload. The \`.htaccess\` file routes clean URLs to each page's \`index.html\`.

## Regenerate
From the project on your computer:
\`\`\`
npm run build:cpanel
\`\`\`

## Node.js hosting (alternative)
If your host offers **Setup Node.js App**, you can instead deploy the full repo, run \`npm ci && npm run build && npm start\` — no static export needed.

Generated: ${new Date().toISOString()}
`;
    fs.writeFileSync(path.join(uploadDir, "README-CPANEL-UPLOAD.txt"), readme, "utf8");

    console.log("");
    console.log("Done. Upload folder:");
    console.log(uploadDir);
  } finally {
    if (middlewareMoved && fs.existsSync(middlewareBackup)) {
      fs.renameSync(middlewareBackup, middlewarePath);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
