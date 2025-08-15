"use client";
import { useRef, useEffect, useState } from 'react';
import type { ShowcaseItem } from '../lib/showcase';

interface Props { items: ShowcaseItem[]; auto?: boolean; speed?: number; fullBleed?: boolean }

export function InfiniteShowcase({ items, auto = true, speed = 40, fullBleed = false }: Props) {
  // Transform-based infinite marquee (no native scrollbar) for "infinity" look
  const containerRef = useRef<HTMLDivElement | null>(null);
  const laneRef = useRef<HTMLDivElement | null>(null);
  const widthRef = useRef(0);
  const xRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  const reduce = useRef(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const lane = laneRef.current; if(!lane) return;
    reduce.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, [items]);

  // Build lane content & measure
  useEffect(() => {
    const lane = laneRef.current; if(!lane) return;
    // Clear lane
    lane.innerHTML = '';
    const fragmentA = document.createDocumentFragment();
    const fragmentB = document.createDocumentFragment();
    items.forEach(item => {
      fragmentA.appendChild(renderCardNode(item));
    });
    items.forEach(item => {
      fragmentB.appendChild(renderCardNode(item));
    });
    lane.appendChild(fragmentA);
    lane.appendChild(fragmentB);
    // Measure width of first sequence
    let w = 0;
    for(let i=0;i<items.length;i++){
      const child = lane.children[i] as HTMLElement; w += child.getBoundingClientRect().width + 24; // gap approx (gap-6 => 1.5rem=24px)
    }
    widthRef.current = w;
    xRef.current = 0;
    (lane as HTMLElement).style.transform = 'translate3d(0,0,0)';
    setReady(true);
  }, [items]);

  useEffect(() => {
    if(!auto || reduce.current) return; const lane = laneRef.current; if(!lane) return;
    let last = performance.now();
    function step(ts:number){
      const dt = ts - last; last = ts;
      if(!pausedRef.current && widthRef.current && lane){
        xRef.current -= (speed * dt)/1000; // move left
        if(-xRef.current >= widthRef.current){
          xRef.current += widthRef.current; // wrap
        }
        lane.style.transform = `translate3d(${xRef.current}px,0,0)`;
      }
      rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
    const pause = () => pausedRef.current = true;
    const resume = () => pausedRef.current = false;
    lane.addEventListener('mouseenter', pause); lane.addEventListener('mouseleave', resume);
    lane.addEventListener('focusin', pause); lane.addEventListener('focusout', resume);
    return () => { if(rafRef.current) cancelAnimationFrame(rafRef.current); lane.removeEventListener('mouseenter', pause); lane.removeEventListener('mouseleave', resume); lane.removeEventListener('focusin', pause); lane.removeEventListener('focusout', resume); };
  }, [auto, speed]);

  useEffect(() => {
    function onResize(){
      const lane = laneRef.current; if(!lane) return; let w=0; for(let i=0;i<items.length;i++){ const child = lane.children[i] as HTMLElement; w += child.getBoundingClientRect().width + 24; } widthRef.current = w; }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [items]);

  const wrapperClasses = fullBleed ? 'relative w-screen left-1/2 right-1/2 -mx-[50vw] px-4 sm:px-6 lg:px-8' : 'relative';

  return (
    <div className={wrapperClasses} aria-label="Continuous program showcase">
      <div ref={containerRef} className="overflow-hidden">
        <div ref={laneRef} className="flex gap-6 py-4 will-change-transform select-none" data-ready={ready} />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/70 to-transparent" />
    </div>
  );
}

function renderCardNode(item: ShowcaseItem){
  const div = document.createElement('div');
  div.className = 'relative group/card h-64 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] xl:w-[360px] flex-shrink-0 rounded-2xl overflow-hidden ring-1 ring-neutral-200/70 bg-neutral-900/95 isolate shadow-sm hover:shadow-xl transition-all duration-500';
  div.innerHTML = `
    <div class="absolute inset-0 -z-10">
      <img src="${item.image}" alt="${item.alt}" class="w-full h-full object-cover object-center opacity-70 brightness-[0.7] group-hover/card:brightness-[0.45] transition-[filter,transform] duration-700 group-hover/card:scale-105" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/80"></div>
    </div>
    <div class="flex flex-col h-full p-5">
      <span class="text-[11px] font-semibold uppercase tracking-wide text-brand-300/90">Focus</span>
      <h3 class="mt-2 text-lg font-semibold leading-snug tracking-tight text-white line-clamp-2">${item.title}</h3>
      ${item.blurb ? `<p class="mt-3 text-[13px] leading-relaxed text-neutral-200/90 line-clamp-4">${item.blurb}</p>` : ''}
      <div class="mt-auto pt-4">
        <span class="inline-flex items-center text-[11px] font-semibold uppercase tracking-wide text-brand-200/90">Explore <span class="ml-1" aria-hidden>→</span></span>
      </div>
    </div>
    <div class="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 bg-black/30"></div>
    <span class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"></span>`;
  return div;
}

// (Old React Card component removed; cards now rendered imperatively for smoother infinite transform loop.)
