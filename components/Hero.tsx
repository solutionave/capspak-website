import Link from "next/link";
import { site } from "../site.config";

export function Hero() {
  return (
  <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-brand-50)] via-white to-[var(--grey-50)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
            {site.shortName} – {site.tagline}
          </h1>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl">
            We produce rigorous, policy-relevant research and foster informed dialogue on aerospace, technology, defence, and strategic stability shaping Pakistan and the wider region.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/about" className="inline-flex items-center rounded-md bg-[var(--color-brand-700)] px-6 py-3 text-white text-sm font-medium shadow hover:bg-[var(--color-brand-600)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-600)]">Learn More</Link>
            <Link href="/publications" className="inline-flex items-center rounded-md border border-[var(--color-brand-300)]/60 bg-white/70 backdrop-blur px-6 py-3 text-sm font-medium text-[var(--color-brand-700)] hover:bg-[var(--color-brand-50)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-600)]">Publications</Link>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(19,137,199,0.18),transparent_70%)]" />
    </section>
  );
}
