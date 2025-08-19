"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

interface CarouselProps {
  images: CarouselImage[];
  autoPlayMs?: number;
  aspect?: string; // e.g. '16/9' or '4/3'
  overlay?: React.ReactNode; // optional overlay content for hero usage
  hideCaptions?: boolean;
  className?: string;
}

export function Carousel({ images, autoPlayMs = 6000, aspect = "16/9", overlay, hideCaptions = false, className }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const count = images.length;
  const goTo = useCallback((i: number) => {
    setIndex((i + count) % count);
  }, [count]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // autoplay
  useEffect(() => {
    if (paused || count <= 1) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      next();
    }, autoPlayMs);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [index, paused, count, next, autoPlayMs]);

  // keyboard nav when focused
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      else if (e.key === " " || e.key === "Spacebar") { e.preventDefault(); setPaused(p => !p); }
    };
    el.addEventListener("keydown", handler);
    return () => el.removeEventListener("keydown", handler);
  }, [next, prev]);

  if (!count) return null;

  // touch / swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const threshold = 60;
    if (touchDeltaX.current > threshold) prev();
    else if (touchDeltaX.current < -threshold) next();
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <div
      ref={containerRef}
      className={"group relative select-none " + (className ?? "")}
      role="region"
      aria-roledescription="carousel"
      aria-label="Event image carousel"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: aspect }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <ul className="h-full w-full m-0 p-0 list-none flex transition-transform ease-out duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((img, i) => (
            <li key={img.src} className="relative shrink-0 w-full h-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
              {!hideCaptions && img.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent p-4 sm:p-6 text-white text-sm">
                  <p className="max-w-xl leading-snug"><span className="font-medium">{i+1}/{count}:</span> {img.caption}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
        {overlay && (
          <div className="pointer-events-none absolute inset-0 flex items-center">
            <div className="w-full">
              <div className="pointer-events-auto">{overlay}</div>
            </div>
          </div>
        )}
        {/* Prev/Next buttons */}
        {count > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-neutral-800 shadow rounded-full w-9 h-9 flex items-center justify-center backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              onClick={prev}
            >
              <span aria-hidden>‹</span>
            </button>
            <button
              type="button"
              aria-label="Next slide"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-neutral-800 shadow rounded-full w-9 h-9 flex items-center justify-center backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              onClick={next}
            >
              <span aria-hidden>›</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
