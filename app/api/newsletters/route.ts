// app/api/newsletters/route.ts
import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

type Item = {
  filename: string;
  url: string;
  mtime: number;
  previewUrl?: string | null;
};

export async function GET() {
  // Adjust these if your folder name differs
  const ROOT = path.join(process.cwd(), "public");
  const NEWSLETTER_DIR = path.join(ROOT, "Assets", "Newsletter");

  try {
    const entries = await fs.readdir(NEWSLETTER_DIR);
    const pdfs = entries.filter((f) => f.toLowerCase().endsWith(".pdf"));

    const items: Item[] = [];
    for (const filename of pdfs) {
      const fullPath = path.join(NEWSLETTER_DIR, filename);
      const stat = await fs.stat(fullPath);
      const base = filename.replace(/\.pdf$/i, "");

      // Check for preview images either alongside or under /previews
      const previewCandidates = [
        path.join(NEWSLETTER_DIR, `${base}.jpg`),
        path.join(NEWSLETTER_DIR, `${base}.png`),
        path.join(NEWSLETTER_DIR, "previews", `${base}.jpg`),
        path.join(NEWSLETTER_DIR, "previews", `${base}.png`),
      ];

      let previewUrl: string | null = null;
      for (const candidate of previewCandidates) {
        try {
          await fs.access(candidate);
          // Convert absolute path to public URL
          const rel = candidate.replace(ROOT, "").replace(/\\/g, "/");
          previewUrl = rel.startsWith("/") ? rel : `/${rel}`;
          break;
        } catch {}
      }

      const url = `/Assets/Newsletter/${filename}`;
      items.push({
        filename,
        url,
        mtime: stat.mtimeMs,
        previewUrl,
      });
    }

    // Newest first
    items.sort((a, b) => b.mtime - a.mtime);

    return NextResponse.json({ items });
  } catch {
    return NextResponse.json({ items: [] });
  }
}
