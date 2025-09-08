"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
  link?: string; // ← added
}

interface CarouselProps {
  images: CarouselImage[];
  autoPlayMs?: number;
  aspect?: string;
  hideCaptions?: boolean;
  className?: string;
}

export function Carousel({
  images,
  autoPlayMs = 6000,
  aspect = "16/9",
  hideCaptions = false,
  className,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const count = images.length;

  const goTo = useCallback(
    (i: number) => {
      setIndex((i + count) % count);
    },
    [count]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // autoplay
  useEffect(() => {
    if (paused || count <= 1) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      next();
    }, autoPlayMs);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, paused, count, next, autoPlayMs]);

  // keyboard nav
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        setPaused((p) => !p);
      }
    };
    el.addEventListener("keydown", handler);
    return () => el.removeEventListener("keydown", handler);
  }, [next, prev]);

  // touch/swipe
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

  if (!count) return null;

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
        <ul
          className="h-full w-full m-0 p-0 list-none flex transition-transform ease-out duration-700"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
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
              {/* Caption in center of image */}
              <div className="pointer-events-none absolute inset-0 flex items-center">
                <div className="w-full text-center pointer-events-auto">
                  <div className="mt-[500px]">
                    {img.link ? (
                      <a
                        href={img.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-auto bg-[#90b4d8]/70 max-w-xl text-xl md:text-2xl font-semibold text-white drop-shadow-lg rounded-lg py-1 px-4 inline-block hover:bg-[#90b4d8]/90"
                      >
                        {img.caption}
                      </a>
                    ) : (
                      <p className="mx-auto bg-[#90b4d8]/70 max-w-xl text-xl md:text-2xl font-semibold text-white drop-shadow-lg rounded-lg py-1 px-4">
                        {img.caption}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom caption */}
              {!hideCaptions && img.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent p-4 sm:p-6 text-white text-sm">
                  {img.link ? (
                    <a
                      href={img.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="max-w-xl leading-snug block hover:underline"
                    >
                      <span className="font-medium">
                        {i + 1}/{count}:
                      </span>{" "}
                      {img.caption}
                    </a>
                  ) : (
                    <p className="max-w-xl leading-snug">
                      <span className="font-medium">
                        {i + 1}/{count}:
                      </span>{" "}
                      {img.caption}
                    </p>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Navigation buttons */}
        {count > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-neutral-800 shadow rounded-full w-9 h-9 flex items-center justify-center backdrop-blur"
              onClick={prev}
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next slide"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-neutral-800 shadow rounded-full w-9 h-9 flex items-center justify-center backdrop-blur"
              onClick={next}
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
}
