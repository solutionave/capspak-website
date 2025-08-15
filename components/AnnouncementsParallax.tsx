"use client";
import { useRef, useEffect, useState } from "react";
import type { Announcement } from "../lib/announcements";
import Link from "next/link";

interface Props {
  items: Announcement[];
}

/* Horizontal manual scroll section with snap, simplified from previous vertical-scrub parallax.
   - Users directly scroll/drag sideways (trackpad / shift+wheel / touch) inside the row.
   - Accessible: each card focusable; arrow buttons provided for keyboard/mouse.
*/
export default function AnnouncementsParallax({ items }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackWrapperRef = useRef<HTMLDivElement | null>(null); // viewport sized sticky container
  const trackRef = useRef<HTMLDivElement | null>(null); // actual wide horizontal track
  const prefersReduced = useRef(false);
  const [computedHeight, setComputedHeight] = useState<number | null>(null);
  const [active, setActive] = useState(false); // whether horizontal parallax is enabled (needs overflow)

  // Compute required section height so vertical scroll distance maps to full horizontal travel
  useEffect(() => {
    prefersReduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced.current) return; // reduced motion: do nothing special

  let ro: ResizeObserver | null = null;
  const trackEl = trackRef.current;
    let frame: number | null = null;
    function measure() {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const track = trackRef.current;
        if (!track) return;
        const vw = window.innerWidth;
        const scrollable = track.scrollWidth - vw;
        if (scrollable > 16) { // threshold > 1 card diff
          const needed = window.innerHeight + scrollable;
          setComputedHeight(needed);
          setActive(true);
        } else {
          setComputedHeight(null);
          setActive(false);
        }
      });
    }
  measure();
  const t1 = setTimeout(measure, 80);
  const t2 = setTimeout(measure, 240);
  window.addEventListener('resize', measure);
    if (trackEl && 'ResizeObserver' in window) {
      ro = new ResizeObserver(measure);
      ro.observe(trackEl);
    }
    return () => {
  window.removeEventListener('resize', measure);
      if (ro && trackEl) ro.disconnect();
      if (frame) cancelAnimationFrame(frame);
  clearTimeout(t1); clearTimeout(t2);
    };
  }, [items]);

  // Drive horizontal translation with vertical scroll progress
  useEffect(() => {
  if (prefersReduced.current) return; // no animation
  if (!active) return; // not enough width, skip
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    let frame = 0;
    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!sectionRef.current || !trackRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const winH = window.innerHeight;
        const total = (sectionRef.current.offsetHeight - winH);
        const scrolled = Math.min(Math.max(0, -rect.top), total);
        const progress = total > 0 ? scrolled / total : 0; // 0..1
        const vw = window.innerWidth;
        const maxX = trackRef.current.scrollWidth - vw;
        const translateX = -progress * maxX;
        trackRef.current.style.transform = `translate3d(${translateX}px,0,0)`;
        // Card depth adjustments
        const cards = Array.from(trackRef.current.querySelectorAll('[data-ann-card]')) as HTMLElement[];
        cards.forEach((card, i) => {
          const cardLeft = card.offsetLeft + card.offsetWidth / 2;
          const currentCenter = -translateX + vw / 2;
          const distance = (cardLeft - currentCenter) / vw; // -1..1 approx
          const scale = 1 + (1 - Math.min(Math.abs(distance), 1)) * 0.05; // up to 1.05 centered
          const y = Math.sin(progress * Math.PI + i * 0.6) * 25 * (1 - Math.min(Math.abs(distance), 1));
          const opacity = 0.55 + (1 - Math.min(Math.abs(distance), 1)) * 0.45; // 0.55..1
          card.style.transform = `translateY(${y.toFixed(1)}px) scale(${scale.toFixed(3)})`;
          card.style.opacity = opacity.toFixed(3);
        });
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [computedHeight, items, active]);

  if (!items.length) return null;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="announcements-heading"
      className="relative"
      style={{ height: prefersReduced.current || !active ? undefined : (computedHeight ? `${computedHeight}px` : '100vh') }}
    >
      <div ref={trackWrapperRef} className={(active && !prefersReduced.current ? 'sticky top-0 h-screen' : '') + ' flex flex-col bg-gradient-to-b from-white to-neutral-50 overflow-hidden'}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 flex flex-col h-full w-full">
          <header className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600/80">Latest</p>
            <h2 id="announcements-heading" className="mt-2 text-3xl font-semibold tracking-tight">Announcements</h2>
            <p className="mt-3 max-w-xl text-sm text-neutral-600">{active && !prefersReduced.current ? 'Keep scrolling – vertical motion advances the horizontal reel.' : 'Latest calls & updates.'}</p>
          </header>
          <div className="relative flex-1 w-full">
            {active && !prefersReduced.current && <>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
            </>}
            <div ref={trackRef} className={(active && !prefersReduced.current ? 'absolute top-0 left-0 ' : '') + 'flex gap-6 px-1 w-max h-full will-change-transform'} style={{ alignItems: 'stretch' }}>
              {items.map((a) => (
                <article
                  key={a.id}
                  data-ann-card
                  className={(active && !prefersReduced.current ? '' : 'snap-start') + " relative w-[280px] sm:w-[300px] md:w-[340px] flex-shrink-0 card px-5 py-6 flex flex-col justify-between bg-white/90 backdrop-blur ring-1 ring-neutral-200/70 focus:outline-none focus-visible:ring-2 ring-brand-600"}
                  aria-label={a.title}
                  tabIndex={0}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 flex-wrap text-[11px] font-medium uppercase tracking-wide">
                      {a.category && <span className="px-2 py-0.5 rounded-full bg-neutral-900 text-white">{formatCategory(a.category)}</span>}
                      {a.deadline && <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">Deadline {a.deadline}</span>}
                    </div>
                    <h3 className="text-base font-medium leading-snug tracking-tight line-clamp-2">{a.title}</h3>
                    <p className="text-[13px] text-neutral-600 leading-relaxed line-clamp-4">{a.message}</p>
                  </div>
                  <div className="mt-5 flex items-center justify-between text-[11px] text-neutral-500">
                    <div className="space-x-1">
                      {a.start && <span>{a.start}</span>}
                      {a.end && <span>– {a.end}</span>}
                    </div>
                    {a.href && (
                      <Link href={a.href} className="text-brand-700 hover:text-brand-800 font-medium inline-flex items-center gap-0.5">
                        View <span aria-hidden>→</span>
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <Link href="/announcements" className="inline-flex items-center text-sm font-medium text-neutral-700 hover:text-neutral-900 underline underline-offset-4">All announcements →</Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          [data-ann-card] { transform: none !important; opacity: 1 !important; }
        }
      `}</style>
    </section>
  );
}

function formatCategory(c: string) {
  return c.replace(/[-_]/g, ' ').replace(/\b\w/g, m => m.toUpperCase());
}
