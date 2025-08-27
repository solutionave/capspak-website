/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { getRecentNews } from "../lib/news";
import Link from "next/link";
import { useMemo, useRef, useEffect, useState } from "react";

// ---- Publications data (easy to edit) ----
type Publication = {
  id: string | number;
  title: string;
  authors: string;
  date: string; // e.g. "2025-08-07" or "August 7, 2025"
  href?: string;
  image?: string;
};

const publications: Publication[] = [
  {
    id: 1,
    title: "Is India still relevant in the US Asia-Pacific strategy?",
    authors: "Hadia Allaudin",
    date: "August 7, 2025",
    href: "https://moderndiplomacy.eu/2025/08/07/is-india-still-relevant-in-the-us-asia-pacific-strategy/",
    image: "/Assets/NewsImages/Trump.jpg",
  },
  {
    id: 2,
    title: "Turkey’s big energy gamble in post-Assad Syria",
    authors: "Sardar Bakhsh and Zainab Bibi",
    date: "August 8, 2025",
    href: "https://www.middleeastmonitor.com/20250808-turkeys-big-energy-gamble-in-post-assad-syria/",
    image: "/Assets/NewsImages/Turkey.jpg",
  },
  {
    id: 3,
    title: "A Regional Blueprint For ECO Climate Cooperation",
    authors: "Areesha Nisar",
    date: "August 9, 2025",
    href: "https://gasam.org.tr/a-regional-blueprint-for-eco-climate-cooperation/",
    image: "/Assets/NewsImages/Regional.jpg",
  },
  {
    id: 4,
    title: "From reliance to rethinking: US’ decades-long bet on India shifts",
    authors: "Umair Pervez Khan",
    date: "August 10, 2025",
    href: "https://www.dailysabah.com/opinion/op-ed/from-reliance-to-rethinking-us-decades-long-bet-on-india-shifts",
    image: "/Assets/NewsImages/Reliance.jpg",
  },
  {
    id: 5,
    title: "Pakistan’s engagement with Australia: from mines to markets",
    authors: "Areesha Nisar",
    date: "August 19, 2025",
    href: "https://www.onlineopinion.com.au/view.asp?article=23609",
    image: "/Assets/NewsImages/Australia.jpg",
  },
  {
    id: 6,
    title: "Islands on the Edge: The Pacific’s Struggle for Climate Justice",
    authors: "Hadia Allaudin",
    date: "August 21, 2025",
    href: "https://www.internationalaffairs.org.au/australianoutlook/islands-on-the-edge-the-pacifics-struggle-for-climate-justice/",

    image: "/Assets/NewsImages/Islands.jpg",
  },
  {
    id: 7,
    title:
      "Pakistan’s Role in Focus: Driving SCO 2025 to Deliver on Climate Promises",
    authors: "Ali Abdul Halim",
    date: "August 22, 2025",
    href: "https://thediplomaticinsight.com/pak-role-in-driving-sco-to-deliver-on-climate/",
    image: "/Assets/NewsImages/PakistansRole.jpg",
  },
];

// -------------------------------------------------------------
// Component: Publications + News with auto-scroll (styling preserved)
// -------------------------------------------------------------
export default function AnnouncementsParallax() {
  // REFS for auto-scrollers
  const publicationsScrollRef = useRef<HTMLDivElement | null>(null);
  const newsScrollRef = useRef<HTMLDivElement | null>(null);
  const publicationsPausedRef = useRef(false);
  const newsPausedRef = useRef(false);
  const publicationsRaf = useRef<number | null>(null);
  const newsRaf = useRef<number | null>(null);

  const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // NEWS: sort by date (Newest / Oldest)
  const newsItems = useMemo(() => getRecentNews(), []);
  const [newsSort, setNewsSort] = useState<"new" | "old">("new");
  const sortedNews = useMemo(() => {
    const arr = newsItems.slice();
    arr.sort((a, b) => {
      const ta = new Date(a.date).getTime();
      const tb = new Date(b.date).getTime();
      return newsSort === "new" ? tb - ta : ta - tb;
    });
    return arr;
  }, [newsItems, newsSort]);

  // Publications: sort newest first
  const sortedPublications = useMemo(
    () =>
      [...publications].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );

  // Helpers
  const fmt = (d: string) =>
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Karachi",
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(d));

  const normalizeSrc = (src: string) => (src.startsWith("/") ? src : `/${src}`);

  const safeISOString = (d: string) => {
    const t = new Date(d);
    return isNaN(t.getTime()) ? undefined : t.toISOString();
  };

  // ---- Auto-scroll: Publications ----
  useEffect(() => {
    const wrap = publicationsScrollRef.current;
    if (!wrap || prefersReducedMotion()) return;
    let last = performance.now();
    const speed = 38; // px/s
    function loop(ts: number) {
      if (!wrap) return;
      const dt = ts - last;
      last = ts;
      if (!publicationsPausedRef.current) {
        wrap.scrollTop += (speed * dt) / 1000;
        if (wrap.scrollTop >= wrap.scrollHeight - wrap.clientHeight - 1) {
          wrap.scrollTop = 0;
        }
      }
      publicationsRaf.current = requestAnimationFrame(loop);
    }
    publicationsRaf.current = requestAnimationFrame(loop);

    const pause = () => (publicationsPausedRef.current = true);
    const resume = () => (publicationsPausedRef.current = false);
    wrap.addEventListener("mouseenter", pause);
    wrap.addEventListener("mouseleave", resume);
    wrap.addEventListener(
      "wheel",
      () => {
        publicationsPausedRef.current = true;
        setTimeout(() => (publicationsPausedRef.current = false), 2500);
      },
      { passive: true }
    );
    return () => {
      if (publicationsRaf.current)
        cancelAnimationFrame(publicationsRaf.current);
      wrap.removeEventListener("mouseenter", pause);
      wrap.removeEventListener("mouseleave", resume);
    };
  }, [sortedPublications]);

  // ---- Auto-scroll: News ----
  useEffect(() => {
    const wrap = newsScrollRef.current;
    if (!wrap || prefersReducedMotion()) return;
    let last = performance.now();
    const speed = 38; // px/s
    function loop(ts: number) {
      if (!wrap) return;
      const dt = ts - last;
      last = ts;
      if (!newsPausedRef.current) {
        wrap.scrollTop += (speed * dt) / 1000;
        if (wrap.scrollTop >= wrap.scrollHeight - wrap.clientHeight - 1) {
          wrap.scrollTop = 0;
        }
      }
      newsRaf.current = requestAnimationFrame(loop);
    }
    newsRaf.current = requestAnimationFrame(loop);

    const pause = () => (newsPausedRef.current = true);
    const resume = () => (newsPausedRef.current = false);
    wrap.addEventListener("mouseenter", pause);
    wrap.addEventListener("mouseleave", resume);
    wrap.addEventListener(
      "wheel",
      () => {
        newsPausedRef.current = true;
        setTimeout(() => (newsPausedRef.current = false), 2500);
      },
      { passive: true }
    );
    return () => {
      if (newsRaf.current) cancelAnimationFrame(newsRaf.current);
      wrap.removeEventListener("mouseenter", pause);
      wrap.removeEventListener("mouseleave", resume);
    };
  }, [sortedNews]);

  return (
    <section
      aria-labelledby="announcements-heading"
      className="py-24 bg-gradient-to-b from-[var(--color-brand-50)] via-white to-[var(--grey-50)]"
    >
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Publications */}
        <aside className="md:pl-8">
          <h3 className="text-3xl font-semibold tracking-tight">
            Publications
          </h3>

          <div className="p-5 card bg-white/90 ring-1 ring-neutral-200/60 mt-24">
            <div
              ref={publicationsScrollRef}
              className="relative max-h-[520px] overflow-y-auto ann-scroll pr-1"
              aria-label="Publications auto scroller"
            >
              <ul className="space-y-3 ann-news">
                {sortedPublications.map((n) => {
                  const hasImg =
                    typeof n.image === "string" && n.image.length > 0;
                  return (
                    <li key={n.id} className="group/news">
                      <article className="relative rounded-md border border-neutral-200/70 bg-white px-4 py-3">
                        {hasImg && (
                          <div className="mb-3 overflow-hidden rounded-md">
                            {/* No hover, no gradient, no backdrop */}
                            {/* Fixed height to keep cards even */}
                            <img
                              src={n.image}
                              alt={n.title}
                              className="block w-full h-40 object-cover"
                              width={0}
                              height={0}
                            />
                          </div>
                        )}

                        <h4 className="text-[13px] font-semibold leading-snug mb-1 line-clamp-2">
                          {n.href ? (
                            <Link
                              href={n.href}
                              className="focus:outline-none focus-visible:ring-2 ring-[var(--color-brand-600)] rounded-sm"
                            >
                              {n.title}
                            </Link>
                          ) : (
                            n.title
                          )}
                        </h4>

                        <p className="text-[11px] text-neutral-600 mb-1">
                          {n.authors}
                        </p>

                        <div className="mt-1 flex justify-end">
                          <time
                            className="text-[11px] text-neutral-500"
                            dateTime={safeISOString(n.date)}
                            title={safeISOString(n.date)}
                          >
                            {fmt(n.date)}
                          </time>
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ul>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent" />
            </div>
          </div>
        </aside>

        {/* News Updates */}
        <aside className="md:pl-8">
          <h3 className="text-3xl font-semibold tracking-tight">
            News Updates
          </h3>

          {/* Sort chips */}
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs mt-14">
            <button
              type="button"
              onClick={() => setNewsSort("new")}
              className={
                (newsSort === "new"
                  ? "bg-[var(--color-brand-700)] text-white shadow-sm"
                  : "bg-[var(--color-brand-100)] text-[var(--color-brand-700)] hover:bg-[var(--color-brand-200)]") +
                " px-3 py-1 rounded-full font-medium transition-colors"
              }
            >
              Newest
            </button>
            <button
              type="button"
              onClick={() => setNewsSort("old")}
              className={
                (newsSort === "old"
                  ? "bg-[var(--color-brand-700)] text-white shadow-sm"
                  : "bg-[var(--color-brand-100)] text-[var(--color-brand-700)] hover:bg-[var(--color-brand-200)]") +
                " px-3 py-1 rounded-full font-medium transition-colors"
              }
            >
              Oldest
            </button>
          </div>

          <div className="p-5 card bg-white/90 ring-1 ring-neutral-200/60">
            <div
              ref={newsScrollRef}
              className="relative max-h-[520px] overflow-y-auto ann-scroll pr-1"
              aria-label="News auto scroller"
            >
              <ul className="space-y-3 ann-news">
                {sortedNews.map((n) => {
                  const img =
                    (n as any).image ||
                    (n as any).cover ||
                    (n as any).img ||
                    (n as any).thumbnail ||
                    "";
                  const hasImg = typeof img === "string" && img.length > 0;
                  return (
                    <li key={n.id} className="group/news">
                      <article className="relative rounded-md border border-neutral-200/70 bg-white px-4 py-3">
                        {hasImg && (
                          <div className="mb-3 overflow-hidden rounded-md relative h-40">
                            <Image
                              src={img}
                              alt={n.title}
                              fill
                              className="object-cover"
                              loading="lazy"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        )}

                        <h4 className="text-[13px] font-semibold leading-snug mb-1 line-clamp-2">
                          {n.href ? (
                            <Link
                              href={n.href}
                              className="focus:outline-none focus-visible:ring-2 ring-[var(--color-brand-600)] rounded-sm"
                            >
                              {n.title}
                            </Link>
                          ) : (
                            n.title
                          )}
                        </h4>

                        <div className="mt-1 flex justify-end">
                          <time
                            className="text-[11px] text-neutral-500"
                            dateTime={n.date}
                          >
                            {n.date}
                          </time>
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ul>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent" />
            </div>
          </div>
        </aside>
      </div>

      <style jsx>{`
        .ann-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .ann-scroll::-webkit-scrollbar {
          display: none;
        }
        .ann-news {
          position: relative;
        }
        .ann-news > li {
          opacity: 0;
          transform: translateY(12px);
          animation: news-in 0.5s forwards;
        }
        .ann-news > li:nth-child(1) {
          animation-delay: 0.05s;
        }
        .ann-news > li:nth-child(2) {
          animation-delay: 0.1s;
        }
        .ann-news > li:nth-child(3) {
          animation-delay: 0.15s;
        }
        .ann-news > li:nth-child(4) {
          animation-delay: 0.2s;
        }
        .ann-news > li:nth-child(5) {
          animation-delay: 0.25s;
        }
        @keyframes news-in {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .ann-init {
          transform: translateY(16px);
        }
        .ann-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: transform 0.4s cubic-bezier(0.4, 0.8, 0.3, 1),
            opacity 0.35s ease;
        }
        [data-ann-card] {
          will-change: opacity, transform;
        }
        [data-ann-card].is-dim {
          opacity: 0.45;
          filter: blur(0.5px);
        }
        [data-ann-card].is-active {
          opacity: 1 !important;
          filter: none;
          box-shadow: 0 6px 18px -4px rgba(0, 0, 0, 0.12);
          transform: translateY(0) scale(1.015);
        }
        [data-ann-card].is-active h3 {
          text-decoration: underline;
          text-decoration-color: rgba(0, 0, 0, 0.12);
          text-underline-offset: 3px;
        }

        @media (prefers-reduced-motion: reduce) {
          [data-ann-card] {
            transform: none !important;
            opacity: 1 !important;
            filter: none !important;
          }
        }
      `}</style>
    </section>
  );
}
