"use client";
import { useRef, useEffect } from 'react';
import type { ShowcaseItem } from '../lib/showcase';
import Image from 'next/image';
import Link from 'next/link';

interface Props { items: ShowcaseItem[]; auto?: boolean; speed?: number }

export function InfiniteShowcase({ items, auto = true, speed = 35 }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const reduce = useRef(false);

  useEffect(() => {
    const el = trackRef.current; if(!el) return;
    reduce.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(el.dataset.built !== '1') {
      const base = el.querySelector('[data-track-inner]');
      if(base){
        const clone = base.cloneNode(true);
        el.appendChild(clone);
        el.dataset.built = '1';
      }
    }
    if(!auto || reduce.current) return;
    let last = performance.now();
    function step(ts: number){
      if(!el) return; const dt = ts - last; last = ts;
      if(!pausedRef.current){
        el.scrollLeft += (speed * dt) / 1000;
        const half = (el.scrollWidth / 2);
        if(el.scrollLeft >= half){ el.scrollLeft = el.scrollLeft - half; }
      }
      rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
    const enter = () => pausedRef.current = true;
    const leave = () => pausedRef.current = false;
    el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave);
    el.addEventListener('wheel', () => { pausedRef.current = true; setTimeout(()=> pausedRef.current=false, 2500); }, { passive: true });
    return () => { if(rafRef.current) cancelAnimationFrame(rafRef.current); el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave); };
  }, [items, auto, speed]);

  return (
    <div className="relative group">
      <div ref={trackRef} className="overflow-x-auto scroll-smooth no-scrollbar" aria-label="Scrollable program showcase">
        <div data-track-inner className="flex gap-6 py-4 pr-6">
          {items.map(item => <Card key={item.id} item={item} />)}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white via-white/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white via-white/70 to-transparent" />
    </div>
  );
}

function Card({ item }: { item: ShowcaseItem }) {
  const content = (
    <div className="relative group/card h-64 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px] flex-shrink-0 rounded-2xl overflow-hidden ring-1 ring-neutral-200/70 bg-neutral-900/95 isolate shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="absolute inset-0 -z-10">
        <Image src={item.image} alt={item.alt} fill className="object-cover object-center opacity-70 brightness-[0.7] group-hover/card:brightness-[0.45] transition-[filter,transform] duration-700 group-hover/card:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/80" />
      </div>
      <div className="flex flex-col h-full p-5">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-300/90">Focus</span>
        <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-white line-clamp-2 group-hover/card:line-clamp-none transition-[line-clamp]">{item.title}</h3>
        {item.blurb && <p className="mt-3 text-[13px] leading-relaxed text-neutral-200/90 line-clamp-4 group-hover/card:line-clamp-none transition-colors">{item.blurb}</p>}
        <div className="mt-auto pt-4">
          <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wide text-brand-200/90 group-hover/card:text-white transition-colors">Explore <span className="ml-1" aria-hidden>→</span></span>
        </div>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 bg-black/30" />
      <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover/card:ring-brand-500/40 transition-colors" />
    </div>
  );
  return item.href ? <Link href={item.href} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-2xl">{content}</Link> : content;
}
