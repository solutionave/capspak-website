"use client";

import { site } from "@/site.config";
import { Carousel } from "@/components/Carousel";
import Image from "next/image";
import { carouselImages } from "@/lib/carouselImages";
import AnnouncementsParallax from "@/components/AnnouncementsParallax";
import NewsletterGallery from "@/components/NewsletterGallery";
import { InfiniteShowcase } from "@/components/InfiniteShowcase";
import { showcaseItems } from "@/lib/showcase";
import { useEffect, useMemo, useRef, useState } from "react";

/** API payload from /api/weekly-monitor */
type MonitorItem = {
  title: string;
  month: string; // "May", "June", ...
  week: number; // 1..5
  year: number | null;
  url: string; // /Assets/weeklynewsmonitor/xxx.pdf
};

export default function Page() {
  const [monthOffset, setMonthOffset] = useState(0); // 0 = current; -1 = prev; +1 = next
  const horizRef = useRef<HTMLDivElement | null>(null);
  const [animDir, setAnimDir] = useState<null | "left" | "right">(null);

  const [monitors, setMonitors] = useState<MonitorItem[]>([]);
  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch("/api/weekly-monitor", { cache: "no-store" });
        const data = await res.json();
        if (active && data?.ok && Array.isArray(data.items)) {
          setMonitors(data.items as MonitorItem[]);
        }
      } catch {}
    })();
    return () => {
      active = false;
    };
  }, []);

  // current visible month + year + week indexes [1..4]
  const { monthName, monthYear, weeks } = useMemo(() => {
    const base = new Date();
    const target = new Date(
      base.getFullYear(),
      base.getMonth() + monthOffset,
      1
    );
    const name = target.toLocaleString("en-US", { month: "long" }); // e.g. "May"
    const yr = target.getFullYear();
    const wk = [1, 2, 3, 4];
    return { monthName: name, monthYear: yr, weeks: wk };
  }, [monthOffset]);

  const getPdfUrl = (month: string, week: number): string | null => {
    const matches = monitors.filter(
      (m) => m.month.toLowerCase() === month.toLowerCase() && m.week === week
    );
    if (!matches.length) return null;
    return matches[0].url;
  };

  const triggerNudge = (dir: "left" | "right") => {
    setAnimDir(dir);
    setTimeout(() => setAnimDir(null), 380);
  };

  const scrollByAmount = (dir: "left" | "right") => {
    const wrap = horizRef.current;
    if (wrap) {
      const delta = (wrap.clientWidth || 320) * 0.9 * (dir === "left" ? -1 : 1);
      wrap.scrollBy({ left: delta, behavior: "smooth" });
    }
    setMonthOffset((prev) => prev + (dir === "left" ? -1 : 1));
    triggerNudge(dir);
  };

  const animClass =
    animDir === "left"
      ? "anim-nudge-left"
      : animDir === "right"
      ? "anim-nudge-right"
      : "";

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative">
        <Carousel
          images={carouselImages}
          aspect="21/9"
          hideCaptions
          className="[&>div>ul>li>span]:brightness-100"
        />
      </section>

      {<AnnouncementsParallax />}
      <NewsletterGallery />

      {/* Capes Think Point */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight">
                <span className="uppercase">Capes</span> Think Point
              </h2>
            </div>
          </div>
          <div className="mt-10">
            <InfiniteShowcase items={showcaseItems} />
          </div>
        </div>
      </section>

      {/* Weekly Asia Pacific Monitor */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Weekly News Monitor
            </h2>
          </div>

          <div className="mt-6 w-full flex justify-end gap-3">
            <button
              type="button"
              onClick={() => scrollByAmount("left")}
              aria-label="Previous month"
              className="h-8 w-8 rounded-md text-white"
              style={{ backgroundColor: "#21B1DB" }}
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount("right")}
              aria-label="Next month"
              className="h-8 w-8 rounded-md text-white"
              style={{ backgroundColor: "#21B1DB" }}
            >
              ›
            </button>
          </div>

          {/* Desktop grid */}
          <div
            className={`mt-12 hidden lg:grid lg:grid-cols-4 gap-6 ${animClass}`}
          >
            {focusAreas.map((a, i) => (
              <FocusCard
                key={a.title}
                area={a}
                week={weeks[i]}
                monthName={monthName}
                monthYear={monthYear}
                pdfUrl={getPdfUrl(monthName, weeks[i])}
              />
            ))}
          </div>

          {/* Mobile horizontal scroll */}
          <div
            ref={horizRef}
            className={`mt-10 -mx-4 lg:hidden overflow-x-auto pb-4 focus:outline-none scroll-smooth ${animClass}`}
            aria-label="Focus area highlights"
          >
            <ul className="flex gap-6 px-4 snap-x snap-mandatory min-w-max">
              {focusAreas.map((a, i) => (
                <li key={a.title} className="snap-start w-80 flex-shrink-0">
                  <FocusCard
                    area={a}
                    compact
                    week={weeks[i]}
                    monthName={monthName}
                    monthYear={monthYear}
                    pdfUrl={getPdfUrl(monthName, weeks[i])}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* tiny CSS for click nudge animation */}
        <style jsx>{`
          @keyframes nudge-left {
            0% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(-12px);
            }
            100% {
              transform: translateX(0);
            }
          }
          @keyframes nudge-right {
            0% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(12px);
            }
            100% {
              transform: translateX(0);
            }
          }
          .anim-nudge-left {
            animation: nudge-left 360ms ease-out;
          }
          .anim-nudge-right {
            animation: nudge-right 360ms ease-out;
          }
        `}</style>
      </section>
    </div>
  );
}

/** ---------- Focus areas & card ---------- */

interface FocusArea {
  title: string;
  body: string;
  tag: string;
  image: string;
  alt: string;
}

const focusAreas: FocusArea[] = [
  {
    title: "Aerospace & Space Policy",
    body: "Monitoring civil/military aerospace innovation, orbital infrastructure, launch, and regulatory trends shaping sovereignty & resilience.",
    tag: "Domains",
    image: "/Assets/weeksimages/1.jpg",
    alt: "Stylised globe representing orbital domains",
  },
  {
    title: "Strategic Stability & Tech",
    body: "Analysing deterrence dynamics & impacts of AI, autonomy, hypersonics, and dual-use systems on escalation pathways.",
    tag: "Security",
    image: "/Assets/weeksimages/1.jpg",
    alt: "Abstract interface window symbolising emerging technologies",
  },
  {
    title: "Innovation & Industrial Base",
    body: "Mapping supply chains, capability diffusion, and opportunities for sustainable national innovation ecosystems.",
    tag: "Economy",
    image: "/Assets/weeksimages/1.jpg",
    alt: "Abstract triangle representing industrial innovation",
  },
  {
    title: "Climate & Resilience",
    body: "Assessing climate risk intersections with infrastructure, food security, and strategic resource planning.",
    tag: "Resilience",
    image: "/Assets/weeksimages/1.jpg",
    alt: "Circular symbol hinting at systems resilience",
  },
];

/** Week date-range label helper with overrides */
function getWeekRangeLabel(monthName: string, year: number, week: number) {
  // ✅ Your exact labels (independent of computed year)
  // Cards ke hisab se:
  // May: week2, week3, week4
  // June: week1, week2
  const overridesByMonth: Record<string, Record<number, string>> = {
    May: {
      2: "12-16 2025",
      3: "19-23 2025",
      4: "26-30 2025",
    },
    June: {
      1: "2-6 2025",
      2: "9-13 2025",
    },
  };

  const m = overridesByMonth[monthName];
  if (m && m[week]) return m[week];

  // Fallback: simple 7-day blocks within the month (1–7, 8–14, ...)
  const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth();
  const startDate = new Date(year, monthIndex, 1 + (week - 1) * 7);
  const lastDay = new Date(year, monthIndex + 1, 0).getDate();
  const s = startDate.getDate();
  const e = Math.min(s + 6, lastDay);

  return `${s}-${e} ${year}`; // no leading zeros
}

function FocusCard({
  area,
  compact,
  week,
  monthName,
  monthYear,
  pdfUrl,
}: {
  area: FocusArea;
  compact?: boolean;
  week: number;
  monthName: string;
  monthYear: number;
  pdfUrl: string | null;
}) {
  const isEnabled = Boolean(pdfUrl);
  return (
    <article
      className={`
        relative group rounded-2xl overflow-hidden isolate flex flex-col shadow-md hover:shadow-2xl transition-all duration-500
        ring-1 ring-neutral-800 hover:ring-brand-500/50 hover:-translate-y-1
        before:absolute before:inset-0 before:-z-10 before:rounded-[inherit]
        after:absolute after:inset-0 after:pointer-events-none after:rounded-[inherit]
        after:ring-1 after:ring-inset after:ring-white/10
        ${compact ? "h-96" : "h-96"}
      `}
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={area.image}
          alt={area.alt}
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Drawer hover overlay */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-black/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
      </div>

      {/* Subtle top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />

      <div className="flex flex-col h-full p-6 relative z-10">
        <div className="mx-auto max-w-xs justify-center text-center">
          <div className="text-[18px] text-white font-semibold uppercase tracking-wide text-brand-200/90">
            Asia Pacific
          </div>

          <div className="text-sm font-semibold text-white">{monthName}</div>

          {/* 3rd line: your requested dates */}
          <div className="text-xs text-white/90">
            {getWeekRangeLabel(monthName, monthYear, week)}
          </div>
        </div>

        <div className="mt-auto pt-5">
          {isEnabled ? (
            <a
              href={pdfUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-white px-3 py-2 rounded-md"
              style={{ backgroundColor: "#21B1DB" }}
            >
              Learn More{" "}
              <span aria-hidden className="translate-y-[1px]">
                →
              </span>
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-white/60 px-3 py-2 rounded-md cursor-not-allowed"
              style={{ backgroundColor: "#7bbfd4" }}
              title="No report available for this week."
            >
              Learn More
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
