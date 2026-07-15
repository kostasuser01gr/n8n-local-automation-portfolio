import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const baseUrl = process.argv[2] || "http://127.0.0.1:3099";
const outputDir = process.argv[3] || "../../portfolio/site-screenshots";

const shots = [
  { path: "/", file: "home-desktop.png", viewport: { width: 1440, height: 1000 } },
  { path: "/", file: "home-mobile.png", viewport: { width: 390, height: 844 } },
  { path: "/projects", file: "projects-overview.png", viewport: { width: 1440, height: 1000 } },
  { path: "/projects/job-application-intelligence", file: "job-tracker-page.png", viewport: { width: 1440, height: 1100 } },
  { path: "/projects/fleet-operations", file: "fleet-operations-page.png", viewport: { width: 1440, height: 1100 } },
  { path: "/projects/local-ai-knowledge", file: "local-ai-page.png", viewport: { width: 1440, height: 1100 } },
  { path: "/evidence", file: "evidence-page.png", viewport: { width: 1440, height: 1000 } },
  { path: "/review", file: "reviewer-guide.png", viewport: { width: 1440, height: 1000 } }
];

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const failures = [];

for (const shot of shots) {
  const page = await browser.newPage({ viewport: shot.viewport });
  const pageErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error") pageErrors.push(`console:${message.text()}`);
  });
  page.on("pageerror", (error) => pageErrors.push(`pageerror:${error.message}`));
  const response = await page.goto(`${baseUrl}${shot.path}`, { waitUntil: "networkidle" });
  if (!response || response.status() >= 400) {
    failures.push(`${shot.path}: HTTP ${response?.status() ?? "NO_RESPONSE"}`);
  }
  await page.screenshot({ path: path.join(outputDir, shot.file), fullPage: true });
  if (pageErrors.length) failures.push(`${shot.path}: ${pageErrors.join(" | ")}`);
  await page.close();
}

await browser.close();

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Validated ${shots.length} routes and wrote screenshots to ${outputDir}`);
