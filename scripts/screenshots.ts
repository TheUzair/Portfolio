/**
 * Project screenshot generator (Playwright - system Chrome fallback).
 *
 * No need for: npx playwright install
 *
 * Usage:
 *   npm run screenshots
 *   npm run screenshots get-me-a-chai bitlinks
 */

import { chromium, type Browser } from "playwright";
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import fs from "node:fs";
import { join } from "node:path";
import { projects } from "../lib/data.js";

interface JobResult {
  id: string;
  ok: boolean;
  reason?: string;
}

const OUT_DIR = join(process.cwd(), "public");
const VIEWPORT = { width: 1280, height: 800 };
const NAV_TIMEOUT = 45_000;
const SETTLE_MS = 2500;

/**
 * Detect Chrome path automatically (Windows + fallback)
 */
function getChromePath(): string {
  const paths = [
    // Windows common paths
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Users\\hp\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe",

    // Mac
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",

    // Linux
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ];

  for (const path of paths) {
    try {
      fs.accessSync(path);
      return path;
    } catch { }
  }

  throw new Error(
    "❌ Chrome not found. Please install Google Chrome or provide executablePath manually."
  );
}

async function shoot(
  browser: Browser,
  project: (typeof projects)[number]
): Promise<JobResult> {
  const url = project.link;

  if (!url || url.includes("github.com")) {
    return { id: project.id, ok: false, reason: "no live URL (skipped)" };
  }

  const ctx = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 2,
    colorScheme: "dark",
  });

  const page = await ctx.newPage();

  try {
    await page.goto(url, {
      waitUntil: "domcontentloaded", // safer than networkidle
      timeout: NAV_TIMEOUT,
    });

    await page.waitForTimeout(SETTLE_MS);

    const pngBuffer = await page.screenshot({
      type: "png",
      fullPage: false,
    });

    const outPath = join(OUT_DIR, `${project.id}-ss.jpg`);

    await sharp(pngBuffer)
      .resize(1280, 800, { fit: "cover", position: "top" })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(outPath);

    return { id: project.id, ok: true };
  } catch (err) {
    return {
      id: project.id,
      ok: false,
      reason: err instanceof Error ? err.message : String(err),
    };
  } finally {
    await ctx.close();
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const requested = process.argv.slice(2);

  const targets =
    requested.length > 0
      ? projects.filter((p) => requested.includes(p.id))
      : projects;

  if (targets.length === 0) {
    console.error("No matching projects. Available ids:");
    projects.forEach((p) => console.error(`  - ${p.id}`));
    process.exit(1);
  }

  console.log(`📸 Capturing ${targets.length} project screenshot(s)…\n`);

  const chromePath = getChromePath();

  console.log(`🚀 Using Chrome at: ${chromePath}\n`);

  const browser = await chromium.launch({
    executablePath: chromePath,
    headless: true,
  });

  const results: JobResult[] = [];

  for (const project of targets) {
    process.stdout.write(`  ${project.id} … `);

    const result = await shoot(browser, project);
    results.push(result);

    console.log(result.ok ? "✓" : `✗ (${result.reason})`);
  }

  await browser.close();

  const ok = results.filter((r) => r.ok).length;
  const fail = results.length - ok;

  console.log(`\nDone. ${ok} succeeded, ${fail} failed.`);

  if (fail > 0) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});