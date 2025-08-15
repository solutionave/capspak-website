"use client";
import type { Announcement } from "../lib/announcements";
import { getRecentNews } from "../lib/news";
import Link from "next/link";
import { useMemo, useRef, useEffect, useState } from "react";

interface Props { items: Announcement[] }

// Simplified vertical announcements section with its own scrollable panel.
export default function AnnouncementsParallax({ items }: Props) {
  // Optionally we could sort or filter here (e.g., by deadline)
  const ordered = useMemo(() => items.slice(), [items]);
  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const a of items) if (a.category) set.add(a.category);
    return Array.from(set.values());
  }, [items]);
  const [activeCat, setActiveCat] = useState<string | 'all'>('all');
  const filtered = useMemo(() => activeCat === 'all' ? ordered : ordered.filter(a => a.category === activeCat), [ordered, activeCat]);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = useRef(false);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const newsScrollRef = useRef<HTMLDivElement | null>(null);
  const annPausedRef = useRef(false);
  const newsPausedRef = useRef(false);
  const annRaf = useRef<number | null>(null);
  const newsRaf = useRef<number | null>(null);

  // Internal focus effect: highlight the card nearest the vertical center
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    prefersReduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Still run logic for focus ring even with reduced motion (but no transforms)
    let frame = 0;
    const cards = Array.from(el.querySelectorAll<HTMLElement>('[data-ann-card]'));

    function update() {
      frame = 0;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const h = rect.height || 1;
      const containerCenter = rect.top + h / 2;
      let closest: { card: HTMLElement; dist: number } | null = null;
      cards.forEach(card => {
        const cRect = card.getBoundingClientRect();
        const cardCenter = cRect.top + cRect.height / 2;
        const dist = Math.abs(cardCenter - containerCenter);
        if (!closest || dist < closest.dist) closest = { card, dist };
      });
      cards.forEach(card => {
        if (closest && card === closest.card) {
          card.classList.add('is-active');
          card.classList.remove('is-dim');
        } else {
          card.classList.remove('is-active');
          card.classList.add('is-dim');
        }
        if (!card.classList.contains('ann-visible')) card.classList.add('ann-visible');
      });
      const maxScroll = el.scrollHeight - el.clientHeight;
      if (progressRef.current && maxScroll > 0) {
        const p = el.scrollTop / maxScroll;
        progressRef.current.style.transform = `scaleY(${p.toFixed(4)})`;
      }
    }
    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(update);
    }
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [filtered]);


  const newsItems = getRecentNews();
  // Autoplay announcements vertical scroll
  useEffect(() => {
    const el = scrollRef.current; if(!el) return; if(prefersReduced.current) return;
    let last = performance.now();
    const speed = 40; // px/s
    function tick(ts:number){
      if(!el) return; const dt=ts-last; last=ts; if(!annPausedRef.current){ el.scrollTop += (speed*dt)/1000; if(el.scrollTop >= el.scrollHeight - el.clientHeight -1){ el.scrollTop = 0; } }
      annRaf.current = requestAnimationFrame(tick);
    }
    annRaf.current = requestAnimationFrame(tick);
    const pause = ()=> annPausedRef.current = true;
    const resume = ()=> annPausedRef.current = false;
    el.addEventListener('mouseenter', pause); el.addEventListener('mouseleave', resume);
    el.addEventListener('wheel', () => { annPausedRef.current = true; setTimeout(()=> annPausedRef.current=false, 2500); }, {passive:true});
    return ()=> { if(annRaf.current) cancelAnimationFrame(annRaf.current); el.removeEventListener('mouseenter', pause); el.removeEventListener('mouseleave', resume);} ;
  }, [filtered]);

  // Autoplay news vertical scroll (loop with duplication)
  useEffect(() => {
    const wrap = newsScrollRef.current; if(!wrap) return; if(prefersReduced.current) return;
    const baseList = wrap.querySelector('.ann-news'); if(!baseList) return;
    // Build enough duplicated content to facilitate a seamless loop even if list is short
    if(wrap.dataset.loopBuilt !== '1') {
      let total = (baseList as HTMLElement).scrollHeight;
      // Duplicate until we have at least 2x container height (or 1.5x base height) to make motion obvious
      while(total < wrap.clientHeight * 2) {
        const clone = baseList.cloneNode(true);
        wrap.appendChild(clone);
        total += (clone as HTMLElement).scrollHeight;
        if(total > 8000) break; // sanity guard
      }
      wrap.dataset.loopBuilt = '1';
      wrap.dataset.baseHeight = String((baseList as HTMLElement).scrollHeight);
    }
    const baseHeight = parseFloat(wrap.dataset.baseHeight || String((baseList as HTMLElement).scrollHeight));
    let last = performance.now();
    const speed = 38; // px/s (slightly faster for visibility)
    function loop(ts:number){
      if(!wrap) return; const dt=ts-last; last=ts;
      if(!newsPausedRef.current){
        wrap.scrollTop += (speed*dt)/1000;
        // Reset after traversing one baseHeight to keep seamless loop
        if(wrap.scrollTop >= baseHeight){ wrap.scrollTop = 0; }
      }
      newsRaf.current = requestAnimationFrame(loop);
    }
    newsRaf.current = requestAnimationFrame(loop);
    const pause=()=> newsPausedRef.current=true; const resume=()=> newsPausedRef.current=false;
    wrap.addEventListener('mouseenter', pause); wrap.addEventListener('mouseleave', resume);
    wrap.addEventListener('wheel', ()=> { newsPausedRef.current=true; setTimeout(()=> newsPausedRef.current=false, 2500); }, {passive:true});
    return ()=> { if(newsRaf.current) cancelAnimationFrame(newsRaf.current); wrap.removeEventListener('mouseenter', pause); wrap.removeEventListener('mouseleave', resume);} ;
  }, [newsItems]);

  if (!items.length) return null;
  return (
  <section aria-labelledby="announcements-heading" className="py-24 bg-gradient-to-b from-[var(--color-brand-50)] via-white to-[var(--grey-50)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-700)]/80">Latest</p>
            <h2 id="announcements-heading" className="mt-2 text-3xl font-semibold tracking-tight">Announcements</h2>
            <p className="mt-3 max-w-xl text-sm text-neutral-600">Current calls, notices & programme updates.</p>
        </header>
        <div className="grid gap-10 lg:gap-14 md:grid-cols-3 items-start">
          <div className="md:col-span-2 space-y-6 relative">
            <div className="mb-5 flex flex-wrap items-center gap-2 text-xs">
              <button
                type="button"
                onClick={() => setActiveCat('all')}
                className={(activeCat === 'all' ? 'bg-[var(--color-brand-700)] text-white shadow-sm' : 'bg-[var(--color-brand-100)] text-[var(--color-brand-700)] hover:bg-[var(--color-brand-200)]') + ' px-3 py-1 rounded-full font-medium transition-colors'}
              >All ({ordered.length})</button>
              {categories.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCat(cat)}
                  className={(activeCat === cat ? 'bg-[var(--color-brand-700)] text-white shadow-sm' : 'bg-[var(--color-brand-100)] text-[var(--color-brand-700)] hover:bg-[var(--color-brand-200)]') + ' px-3 py-1 rounded-full font-medium transition-colors'}
                >{formatCategory(cat)}</button>
              ))}
            </div>
            <div ref={scrollRef} className="relative max-h-[520px] overflow-y-auto pr-3 scroll-smooth ann-scroll group/ann" aria-label="Announcements list">
              <div className="pointer-events-none absolute top-0 right-0 w-2 h-full bg-gradient-to-l from-white to-transparent" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-2 h-6 bg-gradient-to-t from-white to-transparent" />
              <div className="absolute top-2 right-0 w-1 h-[calc(100%-1rem)] bg-neutral-200/60 rounded overflow-hidden">
                <div ref={progressRef} className="w-full h-full origin-top bg-gradient-to-b from-brand-600/80 to-brand-700 scale-y-0 transition-transform duration-150 ease-out" />
              </div>
              <ul className="space-y-4">
                {filtered.map(a => (
                  <li key={a.id} className="group">
                    <article data-ann-card className="card bg-white/90 backdrop-blur px-5 py-5 ring-1 ring-neutral-200/70 shadow-sm transition-all focus-within:ring-[var(--color-brand-600)] opacity-0 ann-init">
                      <div className="flex flex-wrap items-center gap-2 mb-3 text-[11px] font-medium uppercase tracking-wide">
                        {a.category && <span className="px-2 py-0.5 rounded-full bg-[var(--color-brand-700)] text-white shadow-sm">{formatCategory(a.category)}</span>}
                        {a.deadline && <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">Deadline {a.deadline}</span>}
                      </div>
                      <h3 className="text-base font-medium leading-snug tracking-tight">
                        {a.href ? (
                          <Link href={a.href} className="underline-offset-2 decoration-transparent hover:decoration-current focus:outline-none focus-visible:ring-2 ring-brand-600 rounded-sm">
                            {a.title}
                          </Link>
                        ) : a.title}
                      </h3>
                      <p className="mt-2 text-[13px] text-neutral-600 leading-relaxed">{a.message}</p>
                      <div className="mt-4 flex items-center justify-between text-[11px] text-neutral-500">
                        <div className="space-x-1">
                          {a.start && <span>{a.start}</span>}
                          {a.end && <span>– {a.end}</span>}
                        </div>
                        {a.href && (
                          <Link href={a.href} className="text-[var(--color-brand-700)] hover:text-[var(--color-brand-600)] font-medium inline-flex items-center gap-0.5 text-xs">
                            View <span aria-hidden>→</span>
                          </Link>
                        )}
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="space-y-6 relative">
            <div className="p-5 card bg-white/90 ring-1 ring-neutral-200/60">
              <h3 className="text-sm font-semibold tracking-tight mb-2">News Updates</h3>
              <p className="text-xs text-neutral-600 leading-relaxed mb-3">Recent institutional highlights & media notes.</p>
              <div ref={newsScrollRef} className="relative max-h-[520px] overflow-y-auto ann-scroll pr-1" aria-label="News auto scroller">
                <ul className="space-y-3 ann-news">
                  {newsItems.map(n => (
                    <li key={n.id} className="group/news">
                      <article className="relative rounded-md border border-neutral-200/70 bg-white/80 px-4 py-3 hover:border-[var(--color-brand-600)] transition-colors">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-[11px] font-medium uppercase tracking-wide text-[var(--color-brand-700)]/90">{n.tag || 'Update'}</span>
                          <time className="text-[11px] text-neutral-500" dateTime={n.date}>{n.date}</time>
                        </div>
                        <h4 className="text-[13px] font-semibold leading-snug mb-1 line-clamp-2">{n.href ? <Link href={n.href} className="hover:underline focus:outline-none focus-visible:ring-2 ring-[var(--color-brand-600)] rounded-sm">{n.title}</Link> : n.title}</h4>
                        <p className="text-[12px] text-neutral-600 leading-relaxed line-clamp-3">{n.summary}</p>
                      </article>
                    </li>
                  ))}
                </ul>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent" />
              </div>
            </div>
            <div className="p-5 card bg-white/90 ring-1 ring-neutral-200/60">
              <h3 className="text-sm font-semibold tracking-tight mb-2">Submit an Opportunity</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">Have a call for papers or event relevant to our mission? Share it with us for listing.</p>
              <Link href="/contact" className="mt-3 inline-flex text-xs font-medium text-[var(--color-brand-700)] hover:text-[var(--color-brand-600)] underline underline-offset-4">Contact us →</Link>
            </div>
            <div className="p-5 card bg-white/90 ring-1 ring-neutral-200/60">
              <h3 className="text-sm font-semibold tracking-tight mb-2">Browse All</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">See the complete archive of announcements including past deadlines.</p>
              <Link href="/announcements" className="mt-3 inline-flex text-xs font-medium text-[var(--color-brand-700)] hover:text-[var(--color-brand-600)] underline underline-offset-4">All announcements →</Link>
            </div>
          </aside>
        </div>
      </div>
      <style jsx>{`
  .ann-scroll { scrollbar-width: none; -ms-overflow-style: none; }
  .ann-scroll::-webkit-scrollbar { display: none; }
  .ann-news { position: relative; }
  .ann-news > li { opacity: 0; transform: translateY(12px); animation: news-in .5s forwards; }
  .ann-news > li:nth-child(1) { animation-delay: .05s; }
  .ann-news > li:nth-child(2) { animation-delay: .1s; }
  .ann-news > li:nth-child(3) { animation-delay: .15s; }
  .ann-news > li:nth-child(4) { animation-delay: .2s; }
  .ann-news > li:nth-child(5) { animation-delay: .25s; }
  @keyframes news-in { to { opacity:1; transform:translateY(0);} }
        .ann-init { transform: translateY(16px); }
        .ann-visible { opacity: 1 !important; transform: translateY(0) !important; transition: transform .4s cubic-bezier(.4,.8,.3,1), opacity .35s ease; }
        [data-ann-card] { will-change: opacity, transform; }
        [data-ann-card].is-dim { opacity: .45; filter: blur(0.5px); }
        [data-ann-card].is-active { opacity: 1 !important; filter: none; box-shadow: 0 6px 18px -4px rgba(0,0,0,.12); transform: translateY(0) scale(1.015); }
        [data-ann-card].is-active h3 { text-decoration: underline; text-decoration-color: rgba(0,0,0,.12); text-underline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) {
          [data-ann-card] { transform: none !important; opacity: 1 !important; filter: none !important; }
        }
      `}</style>
  {/* Autoplay effects */}
    </section>
  );
}

function formatCategory(c: string) {
  return c.replace(/[-_]/g, ' ').replace(/\b\w/g, m => m.toUpperCase());
}
