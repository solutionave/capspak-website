// components/NewsletterGallery.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type NewsletterItem = {
  filename: string;
  url: string;         // PDF URL under /public
  previewUrl?: string; // Optional image preview if present
};

export default function NewsletterGallery() {
  const [items, setItems] = useState<NewsletterItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/api/newsletters", { cache: "no-store" });
        const data = await res.json();
        if (mounted) setItems(data.items ?? []);
      } catch {
        if (mounted) setItems([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 text-center">
          Our Latest Newsletter
        </h2>

        {/* Vertical previews */}
        <div className="mt-8 space-y-8">
          {loading && (
            <div className="rounded-2xl ring-1 ring-neutral-200/70 bg-neutral-50 animate-pulse h-[55vh] min-h-[420px]" />
          )}

          {!loading && items.length === 0 && (
            <div className="rounded-2xl ring-1 ring-neutral-200/70 bg-white flex items-center justify-center text-sm text-neutral-500 h-[40vh] min-h-[320px]">
              No newsletters found.
            </div>
          )}

          {!loading &&
            items.map((n) => (
              <article
                key={n.url}
                className="w-full rounded-2xl overflow-hidden ring-1 ring-neutral-200/70 bg-white shadow-sm"
              >
                {/* File name */}
                <div className="px-4 py-3 border-b border-neutral-200/70">
                  <p className="text-sm font-medium text-neutral-900">
                    {n.filename}
                  </p>
                </div>

                {/* Preview (image or inline PDF with toolbar) */}
                <div className="p-3">
                  {n.previewUrl ? (
                    <div className="relative w-full rounded-lg overflow-hidden bg-neutral-100 h-[65vh] min-h-[520px]">
                      <Image
                        src={n.previewUrl}
                        alt={n.filename}
                        fill
                        className="object-contain"
                        sizes="(min-width: 1024px) 1152px, 100vw"
                      />
                    </div>
                  ) : (
                    <div className="w-full rounded-lg overflow-hidden bg-neutral-100 h-[75vh] min-h-[560px] relative">
                      <iframe
                        src={`${n.url}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                        className="h-full w-full"
                        title={n.filename}
                      />
                      {/* Overlay trick to hide rightmost menu button */}
                      <div className="absolute top-0 right-0 h-10 w-10 bg-white/0 pointer-events-none" />
                    </div>
                  )}
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
