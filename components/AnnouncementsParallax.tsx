"use client";
import { useEffect, useRef } from "react";
import type { Announcement } from "../lib/announcements";
import Link from "next/link";

interface Props {
  items: Announcement[];
  height?: number; // viewport heights (vh) for the section
}

/*
  Parallax strategy:
  - Section has position: relative and a large padding creating scroll space.
  - A sticky inner container holds the cards layered; we compute scroll progress of the section.
  - Each card translates vertically by a factor based on its index giving depth illusion.
  - Reduced motion users get static layout (prefers-reduced-motion media query).
*/
export default function AnnouncementsParallax({ items, height = 140 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = ref.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    let frame = 0;
    const depths = items.map((_, i) => 18 + i * 6); // tweakable depth per card (vh translation scale)

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return; // skip JS parallax for reduced motion

    function onScroll() {
      if (!section) return;
      if (frame) return; // throttle with rAF
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = section.getBoundingClientRect();
        const windowH = window.innerHeight;
        const start = Math.max(0, -rect.top); // scrolled into section
        const total = rect.height - windowH;
        const progress = total > 0 ? Math.min(1, Math.max(0, start / total)) : 0;
        // Update each card transform
  if (!cards) return;
  Array.from(cards.children).forEach((el, i) => {
          const depth = depths[i];
          const translate = -progress * depth * 10; // px approximate
          (el as HTMLElement).style.transform = `translate3d(0, ${translate}px, 0)`;
          (el as HTMLElement).style.opacity = `${Math.min(1, 0.35 + (1 - i / items.length) * (0.8 - progress * 0.3))}`;
        });
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items]);

  if (!items.length) return null;

  return (
    <section ref={ref} className="relative" style={{ minHeight: `${height}vh` }} aria-labelledby="announcements-heading">
      <div className="sticky top-0 h-screen flex flex-col">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex-1 flex flex-col">
          <header className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600/80">Latest</p>
            <h2 id="announcements-heading" className="mt-2 text-3xl font-semibold tracking-tight">Announcements</h2>
            <p className="mt-3 max-w-xl text-sm text-neutral-600">Calls, notices, updates & programme highlights. Scroll to explore.</p>
          </header>
          <div ref={cardsRef} className="relative flex-1">
            {items.map((a, i) => (
              <article
                key={a.id}
                className="absolute inset-0 origin-top card p-6 flex flex-col justify-between backdrop-blur-sm bg-white/85 shadow-lg ring-1 ring-neutral-200/70 will-change-transform transition-[transform,opacity] duration-300"
                style={{
                  zIndex: items.length - i,
                }}
                aria-label={a.title}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 flex-wrap text-[11px] font-medium uppercase tracking-wide">
                    {a.category && <span className="px-2 py-0.5 rounded-full bg-neutral-900 text-white">{formatCategory(a.category)}</span>}
                    {a.deadline && <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">Deadline {a.deadline}</span>}
                  </div>
                  <h3 className="text-lg font-medium leading-snug tracking-tight">{a.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed line-clamp-4">
                    {a.message}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between text-xs text-neutral-500">
                  <div className="space-x-2">
                    {a.start && <span>{a.start}</span>}
                    {a.end && <span>– {a.end}</span>}
                  </div>
                  {a.href && (
                    <Link href={a.href} className="text-brand-700 hover:text-brand-800 font-medium inline-flex items-center gap-1 text-xs">
                      Details <span aria-hidden>→</span>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/announcements" className="inline-flex items-center text-sm font-medium text-neutral-700 hover:text-neutral-900 underline underline-offset-4">All announcements →</Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          section[aria-labelledby='announcements-heading'] article { position: relative !important; transform: none !important; opacity: 1 !important; }
          section[aria-labelledby='announcements-heading'] .relative.flex-1 { position: static; }
        }
      `}</style>
    </section>
  );
}

function formatCategory(c: string) {
  return c.replace(/[-_]/g, ' ').replace(/\b\w/g, m => m.toUpperCase());
}
