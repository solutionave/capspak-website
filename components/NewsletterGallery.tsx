// components/NewsletterGallery.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type NewsletterItem = {
  filename: string; // e.g. "CAPS Newsletter July 2025.pdf"
  url: string; // e.g. "/Assets/Newsletter/July-2025.pdf"
  previewUrl?: string | null;
};

/** ✅ Add your manual items here (e.g., August) */
const MANUAL_NEWSLETTERS: NewsletterItem[] = [
  {
    filename: "CAPS Newsletter August 2025.pdf",
    url: "/Assets/Newsletter/August-2025.pdf",
    previewUrl: "/Assets/Newsletter/CAPS Newsletter August 2025.png",
  },
  // If you also have older Augusts, add them too:
  // { filename: "CAPS Newsletter August 2024.pdf", url: "/Assets/Newsletter/August-2024.pdf" },
];

const MANUAL_NEWSLETTER: NewsletterItem[] = [
  {
    filename: "CAPS Newsletter November 2025.pdf",
    url: "/Assets/Newsletter/August-2025.pdf",
    previewUrl: "/Assets/Newsletter/CAPS Newsletter August 2025.png",
  },
];
export default function NewsletterGallery() {
  const [items, setItems] = useState<NewsletterItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Horizontal scroller (single-row, scrollable, auto-scroll)
  const railRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const dirRef = useRef<1 | -1>(1);
  const pausedRef = useRef(false);

  useEffect(() => {
    let mounted = true;

    // Parse "MonthName YYYY" or "YYYY MonthName" (also supports 2025-07 / 07-2025)
    const parseDateFromFilename = (filename: string): number => {
      const base = filename.replace(/\.[^.]+$/, "");
      const monthsList = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
      ];
      const monthIndex: Record<string, number> = Object.fromEntries(
        monthsList.map((m, i) => [m, i])
      );

      let m = base.match(
        /(january|february|march|april|may|june|july|august|september|october|november|december)[\s_-]*(\d{4})/i
      );
      if (m) {
        const month = monthIndex[m[1].toLowerCase()];
        const year = parseInt(m[2], 10);
        return new Date(year, month, 1).getTime();
      }

      m = base.match(
        /(\d{4})[\s_-]*(january|february|march|april|may|june|july|august|september|october|november|december)/i
      );
      if (m) {
        const year = parseInt(m[1], 10);
        const month = monthIndex[m[2].toLowerCase()];
        return new Date(year, month, 1).getTime();
      }

      m = base.match(/(20\d{2})[\s._-](0?[1-9]|1[0-2])\b/); // YYYY-MM
      if (m)
        return new Date(
          parseInt(m[1], 10),
          parseInt(m[2], 10) - 1,
          1
        ).getTime();

      m = base.match(/\b(0?[1-9]|1[0-2])[\s._-](20\d{2})/); // MM-YYYY
      if (m)
        return new Date(
          parseInt(m[2], 10),
          parseInt(m[1], 10) - 1,
          1
        ).getTime();

      const years = Array.from(base.matchAll(/(20\d{2})/g)).map((y) =>
        parseInt(y[1], 10)
      );
      if (years.length) return new Date(Math.max(...years), 0, 1).getTime();

      return 0;
    };

    (async () => {
      try {
        const res = await fetch("/api/newsletters", { cache: "no-store" });
        const data = await res.json();
        let list = (data.items ?? []) as NewsletterItem[];

        console.log("lists:", list);

        /** ✅ Merge manual items (e.g., August) + de-dup by URL */
        const all = [...list];
        const dedupMap = new Map<string, NewsletterItem>();
        for (const it of all) {
          // url is the unique key; last-in wins so MANUAL can override backend if needed
          dedupMap.set(it.url, it);
        }
        list = Array.from(dedupMap.values());

        /** Sort newest → oldest using parsed date from filename */
        list = list.sort(
          (a, b) =>
            parseDateFromFilename(b.filename) -
            parseDateFromFilename(a.filename)
        );

        if (mounted) setItems(list);
      } catch {
        // even if API fails, show manual additions
        if (mounted) setItems(MANUAL_NEWSLETTERS);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const speed = 0.5;
    const tick = () => {
      if (!rail || pausedRef.current) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const maxScroll = rail.scrollWidth - rail.clientWidth;
      if (maxScroll <= 0) return;
      const atStart = rail.scrollLeft <= 0;
      const atEnd = rail.scrollLeft >= maxScroll;
      if (atEnd) dirRef.current = -1;
      if (atStart) dirRef.current = 1;
      rail.scrollLeft += speed * dirRef.current;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const pause = () => (pausedRef.current = true);
    const resume = () => (pausedRef.current = false);

    rail.addEventListener("mouseenter", pause);
    rail.addEventListener("mouseleave", resume);
    rail.addEventListener("pointerdown", pause);
    rail.addEventListener("pointerup", resume);
    rail.addEventListener("focusin", pause);
    rail.addEventListener("focusout", resume);
    rail.addEventListener("wheel", pause, { passive: true });

    return () => {
      rail.removeEventListener("mouseenter", pause);
      rail.removeEventListener("mouseleave", resume);
      rail.removeEventListener("pointerdown", pause);
      rail.removeEventListener("pointerup", resume);
      rail.removeEventListener("focusin", pause);
      rail.removeEventListener("focusout", resume);
      rail.removeEventListener("wheel", pause);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [items.length]);

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 text-center">
          Newsletters
        </h2>

        <div className="mt-8">
          {loading && (
            <div className="flex gap-6 overflow-hidden">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="min-w-[18rem] h-96 rounded-2xl ring-1 ring-neutral-200/70 bg-neutral-100 animate-pulse"
                />
              ))}
            </div>
          )}

          {!loading && items.length === 0 && (
            <div className="rounded-2xl ring-1 ring-neutral-200/70 bg-white flex items-center justify-center text-sm text-neutral-500 h-48">
              No newsletters found.
            </div>
          )}

          {!loading && items.length > 0 && (
            <div
              ref={railRef}
              className="flex gap-6 overflow-x-auto overflow-y-visible w-full snap-x snap-mandatory scroll-smooth py-2"
              aria-label="Latest newsletters"
            >
              {items.map((n) => (
                <div
                  key={n.url ?? n.filename}
                  className="group relative block min-w-[20rem] md:min-w-[22rem] lg:min-w-[24rem] h-[28rem] lg:h-[30rem] rounded-2xl overflow-hidden ring-1 ring-neutral-200/70 bg-neutral-50 shadow-sm snap-start"
                  title={n.filename}
                >
                  {/* Background image (non-clickable) */}
                  <div className="relative h-full w-full">
                    <Image
                      src={n.previewUrl ?? "/Assets/HomePageSlider/image.png"}
                      alt={n.filename}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 384px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  {/* Hover drawer */}
                  <div className="pointer-events-none absolute inset-0">
                    <div
                      className="
                        absolute inset-y-0 left-0 w-full
                        -translate-x-full group-hover:translate-x-0
                        transition-transform duration-500 ease-out
                        bg-black/45 backdrop-blur-sm text-white
                      "
                    />
                  </div>

                  {/* Filename */}
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-md inline-block">
                      <p className="text-base md:text-lg font-semibold text-neutral-900 line-clamp-2">
                        {n.filename}
                      </p>
                    </div>
                  </div>

                  {/* ONLY clickable element */}
                  <div className="absolute left-4 bottom-14 z-10">
                    <Link
                      href={n.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-neutral-200 px-3 py-2 rounded-md shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-800"
                      style={{ backgroundColor: "#21B1DB" }}
                      aria-label={`Open ${n.filename} in a new tab`}
                    >
                      Read More{" "}
                      <span aria-hidden className="translate-y-[1px]">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
