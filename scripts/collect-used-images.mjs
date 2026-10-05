import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(root, "public");
const outDir = path.join(root, "website-images");

const skipDirs = new Set([
  "node_modules",
  ".next",
  ".git",
  "website-images",
  "public",
  "out",
  "cpanel-upload",
  "dist",
  "build",
]);

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(ent.name)) continue;
    const filePath = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(filePath, acc);
    else if (/\.(tsx|ts|jsx|js|css|mjs)$/.test(ent.name)) acc.push(filePath);
  }
  return acc;
}

const sources = walk(root)
  .map((filePath) => fs.readFileSync(filePath, "utf8"))
  .join("\n");

const refs = new Set();
const pathRe = /["'`](\/?[^"'`\n]+\.(?:png|jpe?g|webp|svg|gif|avif))["'`]/gi;
let match;
while ((match = pathRe.exec(sources))) {
  let raw = match[1];
  try {
    raw = decodeURIComponent(raw);
  } catch {
    // keep the original path
  }
  raw = raw.replace(/^\/+/, "");
  if (raw.startsWith("http") || raw.includes("node_modules") || raw.includes("$") || raw.includes("{")) continue;
  if (!raw.includes("/") && !fs.existsSync(path.join(publicDir, raw))) continue;
  refs.add(raw);
}

const baseRe = /\$\{BASE\}\/([^"'`\n]+\.(?:png|jpe?g|webp|svg))/g;
while ((match = baseRe.exec(sources))) {
  refs.add(`asethetic-dental-services/${match[1]}`);
}

const iconRe = /iconFile:\s*["']([^"']+)["']/g;
while ((match = iconRe.exec(sources))) {
  refs.add(`icons/${match[1]}`);
}

const encodeRe = /encodeURIComponent\(\s*["']([^"']+\.(?:png|jpe?g|webp|svg))["']\s*,?\s*\)/g;
while ((match = encodeRe.exec(sources))) {
  const name = match[1];
  const before = sources.slice(Math.max(0, match.index - 200), match.index);
  const prefix = before.match(/\/([A-Za-z0-9_-]+)\/\$\{?\s*$/);
  if (prefix) refs.add(`${prefix[1]}/${name}`);
  else if (before.includes("Invisible-beaces")) refs.add(`Invisible-beaces/${name}`);
  else refs.add(`icons/${name}`);
}

if (fs.existsSync(outDir)) fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

const copied = [];
const missing = [];

for (const rel of [...refs].sort()) {
  const src = path.join(publicDir, rel);
  if (!fs.existsSync(src) || !fs.statSync(src).isFile()) {
    missing.push(rel);
    continue;
  }
  const parts = rel.split(/[/\\]/);
  const destRel = parts.length === 1 ? path.join("shared", parts[0]) : rel;
  const dest = path.join(outDir, destRel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  copied.push(destRel.replace(/\\/g, "/"));
}

const byFolder = {};
for (const rel of copied) {
  const folder = rel.includes("/") ? rel.split("/")[0] : "shared";
  byFolder[folder] = (byFolder[folder] || 0) + 1;
}

console.log(`COPIED ${copied.length}`);
for (const [folder, count] of Object.entries(byFolder).sort()) {
  console.log(`  ${folder}: ${count}`);
}
console.log(`MISSING ${missing.length}`);
for (const rel of missing) console.log(`  ${rel}`);
