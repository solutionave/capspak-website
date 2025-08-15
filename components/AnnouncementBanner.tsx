"use client";
import { useEffect, useState } from "react";
import { getActiveAnnouncements, type Announcement } from "../lib/announcements";
import Link from "next/link";

// NOTE: Using dynamic import of data on client for now; for SSR you could create a server component wrapper.
export default function AnnouncementBanner() {
  const [items, setItems] = useState<Announcement[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // In real app fetch from /api/announcements
    setItems(getActiveAnnouncements());
  }, []);

  useEffect(() => {
    if (!items.length) return;
    const id = setTimeout(() => setIndex(i => (i + 1) % items.length), 8000);
    return () => clearTimeout(id);
  }, [items, index]);

  if (!items.length) return null;
  const current = items[index];
  const levelStyles: Record<string,string> = {
    info: 'bg-brand-600 text-white',
    update: 'bg-neutral-900 text-white',
    warning: 'bg-amber-600 text-white'
  };
  const cls = levelStyles[current.level || 'info'];

  return (
    <div className={`relative overflow-hidden ${cls} text-sm`}
      role="region" aria-label="Site announcements">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center gap-4 py-2">
        <div className="flex-1 min-w-0">
          <p className="truncate">
            <span className="font-medium">{current.title}: </span>
            {current.href ? (
              <Link href={current.href} className="underline decoration-white/50 hover:decoration-white">
                {current.message}
              </Link>
            ) : (
              current.message
            )}
          </p>
        </div>
        {items.length > 1 && (
          <div className="flex items-center gap-2 text-xs font-medium">
            <button aria-label="Previous announcement" onClick={() => setIndex(i => (i - 1 + items.length) % items.length)} className="px-2 py-1 rounded bg-white/10 hover:bg-white/20">‹</button>
            <span>{index + 1}/{items.length}</span>
            <button aria-label="Next announcement" onClick={() => setIndex(i => (i + 1) % items.length)} className="px-2 py-1 rounded bg-white/10 hover:bg-white/20">›</button>
          </div>
        )}
      </div>
    </div>
  );
}
