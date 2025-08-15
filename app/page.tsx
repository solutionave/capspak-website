import { site } from "../site.config";
import Link from "next/link";
import { Carousel } from "../components/Carousel";
import Image from "next/image";
import { carouselImages } from "../lib/carouselImages";
import { getActiveAnnouncements } from "../lib/announcements";
import AnnouncementsParallax from "../components/AnnouncementsParallax";

export default function Page() {
  const announcements = getActiveAnnouncements();
  return (
    <div className="relative">
      {/* Hero with Carousel Background */}
      <section className="relative">
        <Carousel
          images={carouselImages}
          aspect="21/9"
          hideCaptions
          className="[&>div>ul>li>span]:brightness-75"
          overlay={
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
              <div className="max-w-3xl fade-in">
                <p className="text-xs font-semibold tracking-wider uppercase text-brand-100/90 drop-shadow">Aerospace • Policy • Security • Technology</p>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-lg">
                  <span className="gradient-text">{site.shortName}</span> – {site.tagline}
                </h1>
                <p className="mt-6 text-lg text-neutral-200 max-w-2xl drop-shadow">
                  Independent, non-partisan research powering smarter decisions at the intersection of aerospace innovation, strategic stability, and national resilience.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/publications" className="inline-flex items-center gap-2 rounded-md bg-neutral-900/90 px-6 py-3 text-white text-sm font-medium shadow hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900">
                    Explore Publications
                  </Link>
                  <Link href="/about" className="inline-flex items-center gap-2 rounded-md bg-white/90 px-6 py-3 text-sm font-medium text-neutral-900 shadow hover:bg-white">
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          }
        />
      </section>

  {/* Parallax Announcements */}
  <AnnouncementsParallax items={announcements.slice(0,6)} />

      {/* Focus Areas (Horizontal Cards) */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Our Focus</h2>
            <p className="mt-4 text-neutral-600 text-lg">We bridge strategic research and actionable policy across domains shaping the future of Pakistan&apos;s aerospace and security ecosystem.</p>
          </div>
          {/* Desktop grid, mobile horizontal scroll */}
          <div className="mt-12 hidden lg:grid lg:grid-cols-4 gap-6">
            {focusAreas.map(a => (
              <FocusCard key={a.title} area={a} />
            ))}
          </div>
          <div className="mt-10 -mx-4 lg:hidden overflow-x-auto pb-4 focus:outline-none" aria-label="Focus area highlights">
            <ul className="flex gap-6 px-4 snap-x snap-mandatory min-w-max">
              {focusAreas.map(a => (
                <li key={a.title} className="snap-start w-80 flex-shrink-0">
                  <FocusCard area={a} compact />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 md:py-28 relative bg-gradient-to-b from-white to-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2 items-center">
          <div className="fade-in">
            <h2 className="text-3xl font-semibold tracking-tight">Why It Matters</h2>
            <p className="mt-6 text-neutral-600 leading-relaxed text-lg">Technological convergence, contested strategic environments, and supply-chain fragility raise new policy and stability questions. We surface grounded, technically literate insight for decision-makers, media, and the public.</p>
            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              {impactPoints.map(i => <li key={i} className="flex gap-2"><span className="text-brand-600 mt-0.5">•</span><span>{i}</span></li>)}
            </ul>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {stats.map(s => (
              <div key={s.label} className="card p-6 text-center">
                <div className="text-3xl font-semibold tracking-tight gradient-text">{s.value}</div>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-neutral-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

interface FocusArea { title: string; body: string; tag: string; image: string; alt: string }
const focusAreas: FocusArea[] = [
  {
    title: "Aerospace & Space Policy",
    body: "Monitoring civil/military aerospace innovation, orbital infrastructure, launch, and regulatory trends shaping sovereignty & resilience.",
    tag: "Domains",
    image: "/globe.svg",
    alt: "Stylised globe representing orbital domains"
  },
  {
    title: "Strategic Stability & Tech",
    body: "Analysing deterrence dynamics & impacts of AI, autonomy, hypersonics, and dual‑use systems on escalation pathways.",
    tag: "Security",
    image: "/window.svg",
    alt: "Abstract interface window symbolising emerging technologies"
  },
  {
    title: "Innovation & Industrial Base",
    body: "Mapping supply chains, capability diffusion, and opportunities for sustainable national innovation ecosystems.",
    tag: "Economy",
    image: "/vercel.svg",
    alt: "Abstract triangle representing industrial innovation"
  },
  {
    title: "Climate & Resilience",
    body: "Assessing climate risk intersections with infrastructure, food security, and strategic resource planning.",
    tag: "Resilience",
    image: "/next.svg",
    alt: "Circular symbol hinting at systems resilience"
  }
];

function FocusCard({ area, compact }: { area: FocusArea; compact?: boolean }) {
  return (
    <article
      className={
        `relative group rounded-2xl overflow-hidden bg-neutral-950/95 isolate flex flex-col shadow-md hover:shadow-2xl transition-all duration-500
         ring-1 ring-neutral-800 hover:ring-brand-500/50 hover:-translate-y-1
         before:absolute before:inset-0 before:-z-10 before:rounded-[inherit]
         before:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_60%)]
         after:absolute after:inset-0 after:pointer-events-none after:rounded-[inherit]
         after:ring-1 after:ring-inset after:ring-white/10
         ${compact ? 'h-96' : 'h-96'}`
      }
    >
      {/* Background image layer */}
      <div className="absolute inset-0 -z-20">
        <Image src={area.image} alt={area.alt} fill priority className="object-cover object-center opacity-70 brightness-[0.55] group-hover:scale-105 transition-transform duration-[1200ms] ease-out" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/80" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_70%_80%,rgba(0,160,255,0.25),transparent_70%)] mix-blend-screen" />
      </div>
      {/* Subtle top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
      <div className="flex flex-col h-full p-6 relative z-10">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-300/90 drop-shadow-sm">{area.tag}</span>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-white leading-snug drop-shadow">
          {area.title}
        </h3>
        <p className="mt-3 text-sm text-neutral-200/90 leading-relaxed line-clamp-5 group-hover:line-clamp-none transition-[color] duration-300">
          {area.body}
        </p>
        <div className="mt-auto pt-5">
          <button
            type="button"
            className="relative inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide uppercase text-brand-200/90 hover:text-white group-hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
          >
            Learn More <span aria-hidden className="translate-y-[1px]">→</span>
            <span className="absolute -inset-2 rounded-lg bg-gradient-to-r from-brand-500/0 via-brand-500/0 to-brand-500/0 opacity-0 group-hover:opacity-40 transition-opacity" />
          </button>
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