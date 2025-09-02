// app/event-recordings/page.tsx
import fs from "fs/promises";
import path from "path";
import mammoth from "mammoth";

type Item = {
  title: string;
  pdfUrl: string;
  description: string;
  mtimeMs: number;
};

function toWords(text: string, maxWords = 45): string {
  const words = text
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean);
  const trimmed = words.slice(0, maxWords).join(" ");
  return words.length > maxWords ? `${trimmed}…` : trimmed || "Summary coming soon.";
}

// Normalize names so "…-1" pairs with the same base file.
function baseKey(filename: string) {
  const noExt = filename.replace(/\.[^/.]+$/, "");
  return noExt.replace(/-1$/, "");
}

async function getItems(): Promise<Item[]> {
  // Folder inside /public so files are web-served at the same path.
  const publicDir = path.join(process.cwd(), "public");
  const folder = path.join(publicDir, "Assets", "weeklynewsmonitor");

  const entries = await fs.readdir(folder, { withFileTypes: true });

  const pdfs = new Map<string, { filename: string; mtimeMs: number }>();
  const docs = new Map<string, { filename: string }>();

  await Promise.all(
    entries.map(async (ent) => {
      if (!ent.isFile()) return;
      const ext = path.extname(ent.name).toLowerCase();
      const key = baseKey(ent.name);
      const full = path.join(folder, ent.name);
      const stat = await fs.stat(full);

      if (ext === ".pdf") pdfs.set(key, { filename: ent.name, mtimeMs: stat.mtimeMs });
      if (ext === ".docx" || ext === ".doc") docs.set(key, { filename: ent.name });
    })
  );

  const keys = new Set<string>([...pdfs.keys(), ...docs.keys()]);

  const items: Item[] = [];
  for (const key of keys) {
    const pdf = pdfs.get(key);
    const doc = docs.get(key);

    // Title from the PDF filename (without extension)
    const title = (pdf?.filename ?? doc?.filename ?? key).replace(/\.[^/.]+$/, "");

    // Web URL for the PDF (falls back to a docx-to-pdf-less link if no pdf)
    const pdfUrl = pdf
      ? `/Assets/weeklynewsmonitor/${pdf.filename}`
      : doc
      ? `/Assets/weeklynewsmonitor/${doc.filename}`
      : "#";

    // Extract short description from the .docx if present
    let description = "Summary coming soon.";
    if (doc) {
      try {
        const docPath = path.join(folder, doc.filename);
        const { value } = await mammoth.extractRawText({ path: docPath });
        description = toWords(value, 45);
      } catch {
        /* ignore and keep default */
      }
    }

    items.push({
      title,
      pdfUrl,
      description,
      mtimeMs: pdf?.mtimeMs ?? Date.now(),
    });
  }

  // Reverse chronological
  items.sort((a, b) => b.mtimeMs - a.mtimeMs);

  return items;
}

export default async function EventRecordingsPage() {
  const items = await getItems();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Weekly News Monitor</h1>
      <div className="mt-10 space-y-6">
        {items.map((it) => (
          <article key={it.title} className="rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold">{it.title}</h2>
            <p className="mt-3 text-sm text-neutral-700">{it.description}</p>
            <div className="mt-4">
              <a
                href={it.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium hover:shadow  bg-[#90b4d8]"
              >
                Learn more
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
