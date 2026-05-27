import { cpSync, existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const distDir = resolve("dist");
const routeNames = ["services", "coverage", "compliance", "privacy", "terms"];

if (!existsSync(distDir)) {
  throw new Error(`Missing dist directory: ${distDir}`);
}

for (const routeName of routeNames) {
  const sourceFile = resolve(distDir, `${routeName}.html`);
  const routeDir = resolve(distDir, routeName);
  const aliasFile = resolve(routeDir, "index.html");

  mkdirSync(routeDir, { recursive: true });
  cpSync(sourceFile, aliasFile);
}
