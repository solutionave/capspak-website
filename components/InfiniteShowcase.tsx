"use client";
import { useRef, useEffect, useState } from "react";
import type { ShowcaseItem } from "../lib/showcase";

interface Props {
  items: ShowcaseItem[];
  auto?: boolean;
  speed?: number;
  fullBleed?: boolean;
}

export function InfiniteShowcase({
  items,
  auto = true,
  speed = 40,
  fullBleed = false,
}: Props) {
  // Transform-based infinite marquee (no native scrollbar)
  const containerRef = useRef<HTMLDivElement | null>(null);
  const laneRef = useRef<HTMLDivElement | null>(null);
  const widthRef = useRef(0);
  const xRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  const reduce = useRef(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const lane = laneRef.current;
    if (!lane) return;
    reduce.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, [items]);

  // Build lane content & measure
  useEffect(() => {
    const lane = laneRef.current;
    if (!lane) return;
    // Clear lane
    lane.innerHTML = "";

    // Build two sequences for seamless wrap
    const fragmentA = document.createDocumentFragment();
    const fragmentB = document.createDocumentFragment();
    items.forEach((item) => fragmentA.appendChild(renderCardNode(item)));
    items.forEach((item) => fragmentB.appendChild(renderCardNode(item)));
    lane.appendChild(fragmentA);
    lane.appendChild(fragmentB);

    // Measure width of first sequence
    let w = 0;
    for (let i = 0; i < items.length; i++) {
      const child = lane.children[i] as HTMLElement;
      // gap-6 ≈ 24px between cards
      w += child.getBoundingClientRect().width + 24;
    }
    widthRef.current = w;
    xRef.current = 0;
    (lane as HTMLElement).style.transform = "translate3d(0,0,0)";
    setReady(true);
  }, [items]);

  useEffect(() => {
    if (!auto || reduce.current) return;
    const lane = laneRef.current;
    if (!lane) return;

    let last = performance.now();
    function step(ts: number) {
      const dt = ts - last;
      last = ts;
      if (!pausedRef.current && widthRef.current && lane) {
        xRef.current -= (speed * dt) / 1000; // move left
        if (-xRef.current >= widthRef.current) {
          xRef.current += widthRef.current; // wrap
        }
        lane.style.transform = `translate3d(${xRef.current}px,0,0)`;
      }
      rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);

    const pause = () => (pausedRef.current = true);
    const resume = () => (pausedRef.current = false);
    lane.addEventListener("mouseenter", pause);
    lane.addEventListener("mouseleave", resume);
    lane.addEventListener("focusin", pause);
    lane.addEventListener("focusout", resume);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lane.removeEventListener("mouseenter", pause);
      lane.removeEventListener("mouseleave", resume);
      lane.removeEventListener("focusin", pause);
      lane.removeEventListener("focusout", resume);
    };
  }, [auto, speed]);

  useEffect(() => {
    function onResize() {
      const lane = laneRef.current;
      if (!lane) return;
      let w = 0;
      for (let i = 0; i < items.length; i++) {
        const child = lane.children[i] as HTMLElement;
        w += child.getBoundingClientRect().width + 24;
      }
      widthRef.current = w;
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [items]);

  const wrapperClasses = fullBleed
    ? "relative w-screen left-1/2 right-1/2 -mx-[50vw] px-4 sm:px-6 lg:px-8"
    : "relative";

  return (
    <div className={wrapperClasses} aria-label="Continuous program showcase">
      <div ref={containerRef} className="overflow-hidden">
        <div
          ref={laneRef}
          className="flex gap-6 py-4 will-change-transform select-none"
          data-ready={ready}
        />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/70 to-transparent" />
    </div>
  );
}

/**
 * UPDATED CARD:
 * - Size now mirrors "Our Focus": tall, roomy layout.
 * - Heights: h-[26rem] on mobile, up to h-[28rem] on lg.
 * - Widths: ~320–400px across breakpoints (like a single FocusCard).
 * - Layout: tag → title → blurb → Learn More (bottom), with same dark/gradient look.
 */
function renderCardNode(item: ShowcaseItem) {
  const div = document.createElement("div");
  div.className = [
    "relative group/card",
    "h-96 w-80", // exact same size as Our Focus cards
    "flex-shrink-0 rounded-2xl overflow-hidden",
    "bg-neutral-950/95 isolate shadow-md hover:shadow-2xl transition-all duration-500",
    "ring-1 ring-neutral-800 hover:ring-brand-500/50 hover:-translate-y-1",
    "before:absolute before:inset-0 before:-z-10 before:rounded-[inherit]",
    "before:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_60%)]",
    "after:absolute after:inset-0 after:pointer-events-none after:rounded-[inherit]",
    "after:ring-1 after:ring-inset after:ring-white/10",
  ].join(" ");

  div.innerHTML = `
    <div class="absolute inset-0 -z-20">
  <img src="${item.image}" alt="${item.alt}"
    class="w-full h-full object-cover object-center opacity-90 brightness-100 group-hover/card:scale-105 transition-transform duration-[1200ms] ease-out" />
  <!-- Slight backdrop -->
  <div class="absolute inset-0 bg-black/50"></div>
  <div class="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_70%_80%,rgba(0,160,255,0.25),transparent_70%)] mix-blend-screen"></div>
</div>


    <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent"></div>

    <div class="flex flex-col h-full p-6 relative z-10">
      <span class="text-[11px] font-semibold uppercase tracking-wide text-brand-300/90 drop-shadow-sm">Focus</span>
      <h3 class="mt-3 text-xl font-semibold tracking-tight text-white leading-snug drop-shadow">
        ${item.title}
      </h3>
      ${
        item.blurb
          ? `<p class="mt-3 text-sm text-neutral-200/90 leading-relaxed line-clamp-5 group-hover/card:line-clamp-none transition-[color] duration-300">
               ${item.blurb}
             </p>`
          : ""
      }
      <div class="mt-auto pt-5">
        <button type="button"
          class="relative inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide uppercase text-brand-200/90 hover:text-white group-hover/card:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60">
          Learn More <span aria-hidden class="translate-y-[1px]">→</span>
          <span class="absolute -inset-2 rounded-lg bg-gradient-to-r from-brand-500/0 via-brand-500/0 to-brand-500/0 opacity-0 group-hover/card:opacity-40 transition-opacity"></span>
        </button>
      </div>
    </div>
  `;

  return div;
}
