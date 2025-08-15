import { site } from "../site.config";
import Link from "next/link";
import { Carousel } from "../components/Carousel";
import { carouselImages } from "../lib/carouselImages";

export default function Page() {
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

      {/* Value Props */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Our Focus</h2>
            <p className="mt-4 text-neutral-600 text-lg">We bridge strategic research and actionable policy across domains shaping the future of Pakistan&apos;s aerospace and security ecosystem.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {valueProps.map((v) => (
              <div key={v.title} className="card p-6 flex flex-col">
                <h3 className="font-medium text-lg tracking-tight">{v.title}</h3>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed flex-1">{v.body}</p>
                <span className="mt-4 inline-flex text-xs font-medium uppercase tracking-wide text-brand-700/80">{v.tag}</span>
              </div>
            ))}
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

const valueProps = [
  {
    title: "Aerospace & Space Policy",
    body: "Monitoring civil/military aerospace innovation, orbital infrastructure, and regulatory trends shaping sovereignty and resilience.",
    tag: "Domains"
  },
  {
    title: "Strategic Stability & Tech",
    body: "Analysing deterrence dynamics and the impact of AI, autonomy, and dual‑use systems on escalation pathways.",
    tag: "Security"
  },
  {
    title: "Innovation & Industrial Base",
    body: "Mapping supply chains, capability diffusion, and opportunities for sustainable national innovation ecosystems.",
    tag: "Economy"
  },
];

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