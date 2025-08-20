// app/(your-route)/page.tsx
"use client";

import { site } from "@/site.config";
import Link from "next/link";
import { Carousel } from "@/components/Carousel";
import Image from "next/image";
import { carouselImages } from "@/lib/carouselImages";
import { getActiveAnnouncements } from "@/lib/announcements";
import AnnouncementsParallax from "@/components/AnnouncementsParallax";
import NewsletterGallery from "@/components/NewsletterGallery";
import { InfiniteShowcase } from "@/components/InfiniteShowcase";
import { showcaseItems } from "@/lib/showcase";
import { useMemo, useRef, useState } from "react";

export default function Page() {
  const announcements = getActiveAnnouncements();

  // Month navigation state for the Weekly Asia Pacific Monitor cards
  const [monthOffset, setMonthOffset] = useState(0); // 0 = current; -1 = previous; +1 = next
  const horizRef = useRef<HTMLDivElement | null>(null);
  const [animDir, setAnimDir] = useState<null | "left" | "right">(null);

  const { monthName, weeks } = useMemo(() => {
    const base = new Date();
    const target = new Date(
      base.getFullYear(),
      base.getMonth() + monthOffset,
      1
    );
    const name = target.toLocaleString("en-US", { month: "long" });
    const wk = monthOffset < 0 ? [1, 2, 3, 4] : [1, 2, 3, 4];
    return { monthName: name, weeks: wk };
  }, [monthOffset]);

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
      {/* Hero with Carousel Background */}
      <section className="relative">
        <Carousel
          images={carouselImages}
          aspect="21/9"
          hideCaptions
          className="[&>div>ul>li>span]:brightness-100"
          overlay={
            <div className="mt-[500px] items-center justify-center text-center">
              <p className="mx-auto bg-[#90b4d8]/70 max-w-xl mt- text-xl md:text-2xl font-semibold text-white drop-shadow-lg rounded-lg py-1 px-4">
                <span className="text-white">{site.shortName}</span> –{" "}
                {site.tagline}
              </p>
              <div className="mt-2 space-x-4">
                <Link
                  href="/publications"
                  className="inline-flex items-center gap-2 rounded-md bg-[#90b4d8]/70 px-8 py-2 text-white text-sm font-medium shadow hover:bg-white hover:text-black transition-color duration-200"
                >
                  Explore Publications
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-md bg-[#90b4d8]/70 px-8 py-2 text-sm font-medium text-white shadow hover:bg-white hover:text-black transition-color duration-200"
                >
                  About Us
                </Link>
              </div>
            </div>
          }
        />
      </section>

      {/* Parallax Announcements */}
      <AnnouncementsParallax items={announcements.slice(0, 6)} />

      {/* Newsletter component */}
      <NewsletterGallery />

      {/* Caps Think Point (per-card button handled inside <InfiniteShowcase />) */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight">
                Caps Think Point
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
              Weekly Asia Pacific Monitor
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

function FocusCard({
  area,
  compact,
  week,
  monthName,
}: {
  area: FocusArea;
  compact?: boolean;
  week: number;
  monthName: string;
}) {
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
          <div className="mt-1 text-lg font-semibold tracking-tight text-white">
            Week {week}
          </div>
          <div className="text-sm font-semibold text-white">{monthName}</div>
        </div>

        <div className="mt-auto pt-5">
          {/* Button -> /newsmonitor */}
          <Link
            href="/newsmonitor"
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-white px-3 py-2 rounded-md"
            style={{ backgroundColor: "#21B1DB" }}
          >
            Learn More <span aria-hidden className="translate-y-[1px]">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

const impactPoints = [
  "Translating technical complexity into actionable policy",
  "Strengthening evidence-based strategic dialogue",
  "Highlighting risk reduction & resilience pathways",
  "Connecting academic, industry, and public sectors",
];

const stats = [
  { label: "Focus Areas", value: "5+" },
  { label: "Programs", value: "4" },
  { label: "Stakeholder Segments", value: "6" },
  { label: "Output Formats", value: "7" },
];
