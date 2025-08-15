import Link from "next/link";
import { site } from "../site.config";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
            {site.shortName} – {site.tagline}
          </h1>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl">
            We produce rigorous, policy-relevant research and foster informed dialogue on aerospace, technology, defence, and strategic stability shaping Pakistan and the wider region.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/about" className="inline-flex items-center rounded-md bg-neutral-900 px-6 py-3 text-white text-sm font-medium shadow hover:bg-neutral-700">Learn More</Link>
            <Link href="/publications" className="inline-flex items-center rounded-md border border-neutral-300 px-6 py-3 text-sm font-medium hover:bg-neutral-50">Publications</Link>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.05),transparent_60%)]" />
    </section>
  );
}
