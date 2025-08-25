// components/NewsletterGallery.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type NewsletterItem = {
  filename: string; // e.g. "CAPS Newsletter July 2025.pdf"
  url: string;      // e.g. "/Assets/Newsletter/July-2025.pdf"
};

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
      const base = filename.replace(/\.[^.]+$/, ""); // strip extension
      const monthsList = [
        "january","february","march","april","may","june",
        "july","august","september","october","november","december"
      ];
      const monthIndex: Record<string, number> = Object.fromEntries(
        monthsList.map((m, i) => [m, i])
      );

      // A) "... MonthName YYYY ..."
      let m = base.match(
        /(january|february|march|april|may|june|july|august|september|october|november|december)[\s_-]*(\d{4})/i
      );
      if (m) {
        const month = monthIndex[m[1].toLowerCase()];
        const year = parseInt(m[2], 10);
        return new Date(year, month, 1).getTime();
      }

      // B) "... YYYY MonthName ..."
      m = base.match(
        /(\d{4})[\s_-]*(january|february|march|april|may|june|july|august|september|october|november|december)/i
      );
      if (m) {
        const year = parseInt(m[1], 10);
        const month = monthIndex[m[2].toLowerCase()];
        return new Date(year, month, 1).getTime();
      }

      // C) numeric "YYYY-MM" or "MM-YYYY"
      m = base.match(/(20\d{2})[\s._-](0?[1-9]|1[0-2])\b/); // YYYY-MM
      if (m) return new Date(parseInt(m[1], 10), parseInt(m[2], 10) - 1, 1).getTime();
      m = base.match(/\b(0?[1-9]|1[0-2])[\s._-](20\d{2})/); // MM-YYYY
      if (m) return new Date(parseInt(m[2], 10), parseInt(m[1], 10) - 1, 1).getTime();

      // D) fallback to latest 4-digit year found (month unknown -> Jan)
      const years = Array.from(base.matchAll(/(20\d{2})/g)).map(y => parseInt(y[1], 10));
      if (years.length) return new Date(Math.max(...years), 0, 1).getTime();

      return 0; // unknown
    };

    (async () => {
      try {
        const res = await fetch("/api/newsletters", { cache: "no-store" });
        const data = await res.json();
        let list = (data.items ?? []) as NewsletterItem[];

        // Sort newest first (reverse chronological)
        list = list.sort(
          (a, b) => parseDateFromFilename(b.filename) - parseDateFromFilename(a.filename)
        );

        if (mounted) setItems(list);
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

  // Auto-scroll with pause on interaction; respects prefers-reduced-motion
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const speed = 0.5; // px per frame
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
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 text-center">
          Our Latest Newsletters
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

          {/* Single-row, horizontally scrollable rail with smooth & auto scroll */}
          {!loading && items.length > 0 && (
            <div
              ref={railRef}
              className="flex gap-6 overflow-x-auto overflow-y-visible w-full snap-x snap-mandatory scroll-smooth py-2"
              aria-label="Latest newsletters"
            >
              {items.map((n) => (
                <div
                  key={n.url ?? n.filename}
                  className="group relative block min-w-[20rem] md:min-w-[22rem] lg:min-w-[24rem] h-[28rem] lg:h-[30rem] rounded-2xl overflow-hidden ring-1 ring-neutral-200/70 bg-neutral-50 shadow-sm snap-start focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-800"
                  title={`Open ${n.filename} in a new tab`}
                >
                  {/* Background image */}
                  <div className="relative h-full w-full">
                    <Image
                      src="/Assets/HomePageSlider/image.png"
                      alt="Newsletter background"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 384px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    {/* light base dim for text legibility */}
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  {/* CLEAN hover drawer with backdrop (no vertical strip) */}
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

                  {/* Filename label */}
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-base md:text-lg font-semibold text-neutral-900 drop-shadow-sm line-clamp-2">
                      {n.filename}
                    </p>
                  </div>

                  {/* Learn More button (Link) */}
                  <div className="absolute left-4 bottom-14 z-10">
                    <Link
                      href="/weeklynewsletter"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-neutral-200 px-3 py-2 rounded-md shadow"
                      style={{ backgroundColor: "#21B1DB" }}
                    >
                      Learn More{" "}
                      <span aria-hidden className="translate-y-[1px]">→</span>
                    </Link>
                  </div>

                  {/* Full-card overlay anchor to open the PDF in new tab (sibling, not parent) */}
                  <a
                    href={n.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-[5]"
                    aria-label={`Open ${n.filename} in a new tab`}
                  >
                    <span className="sr-only">{`Open ${n.filename} in a new tab`}</span>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
