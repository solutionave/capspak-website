import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

/**
 * Expected PDF names (examples):
 *   Weekly Monitor 12May-16May25.pdf
 *   Weekly Monitor 2June-6June25.pdf
 *   Weekly Monitor 9June-13June25-1.pdf  (handle "-1" suffix)
 *
 * We parse the *first* date (start day + month word) and infer week number as:
 *   week = Math.ceil(startDay / 7)
 */
const MONTHS = [
  "january","february","march","april","may","june",
  "july","august","september","october","november","december"
];

function safeMonthToFull(m: string) {
  const lower = m.toLowerCase();
  // allow "Jun"/"Sept" etc. by prefix matching against known months
  const found = MONTHS.find((full) => full.startsWith(lower));
  return found ? (found[0].toUpperCase() + found.slice(1)) : m; // e.g. "may" -> "May"
}

type RecordItem = {
  title: string;          // filename without extension
  month: string;          // "May", "June", ...
  week: number;           // 1..5
  year: number | null;    // 2025, etc. (nullable if missing)
  url: string;            // /Assets/weeklynewsmonitor/xxx.pdf
};

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), "public");
    const folder = path.join(publicDir, "Assets", "weeklynewsmonitor");
    const entries = await fs.readdir(folder, { withFileTypes: true });

    const pdfs = entries
      .filter((e) => e.isFile() && e.name.toLowerCase().endsWith(".pdf"))
      .map((e) => e.name);

    const items: RecordItem[] = [];

    for (const filename of pdfs) {
      // Remove extension + optional trailing "-1"
      const baseNoExt = filename.replace(/\.pdf$/i, "");
      const base = baseNoExt.replace(/-1$/i, "");

      // Try to capture "Weekly Monitor <startDay><Month>-<endDay><Month?><yy?>"
      // e.g. "Weekly Monitor 12May-16May25", "Weekly Monitor 2June-6June25"
      const match = base.match(
        /Weekly\s+Monitor\s+(\d{1,2})([A-Za-z]+)-(\d{1,2})([A-Za-z]+)?(\d{2})?$/i
      );

      if (!match) {
        // skip files that don't match the expected pattern
        continue;
      }

      const startDay = parseInt(match[1], 10);      // 12 or 2 or 9
      const startMonthWord = safeMonthToFull(match[2]); // May / June / ...
      const yearTwo = match[5] ? parseInt(match[5], 10) : null;
      const year = yearTwo !== null ? 2000 + yearTwo : null;

      const week = Math.max(1, Math.min(5, Math.ceil(startDay / 7)));
      const month = startMonthWord[0].toUpperCase() + startMonthWord.slice(1);

      items.push({
        title: base, // keep "-1" already stripped above
        month,
        week,
        year,
        url: `/Assets/weeklynewsmonitor/${filename}`,
      });
    }

    // Return newest first by filename mtime (safer to sort by mtime from fs.stat)
    // but we already filtered for PDFs; get mtimes in parallel
    const withTimes = await Promise.all(
      items.map(async (it) => {
        const full = path.join(publicDir, it.url);
        const stat = await fs.stat(full);
        return { ...it, mtimeMs: stat.mtimeMs };
      })
    );

    withTimes.sort((a, b) => b.mtimeMs - a.mtimeMs);

    // Shape the response (drop mtime)
    const payload = withTimes.map(({ mtimeMs, ...rest }) => rest);

    return NextResponse.json({ ok: true, items: payload });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Failed to read monitor PDFs" }, { status: 500 });
  }
}
