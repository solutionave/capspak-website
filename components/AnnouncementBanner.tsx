"use client";
import { useEffect, useState, useCallback } from "react";
import type { Announcement } from "../lib/announcements";
import Link from "next/link";

interface Props { items?: Announcement[] }

const STORAGE_KEY = "capspak.dismissed.announcements.v1";

export default function AnnouncementBanner({ items: initial }: Props) {
  const [items, setItems] = useState<Announcement[]>(initial ?? []);
  const [index, setIndex] = useState(0);
  const [dismissed, setDismissed] = useState<string[]>([]);

  // Fetch if not provided (progressive enhancement)
  useEffect(() => {
    if (initial && initial.length) return;
    (async () => {
      try {
        const r = await fetch('/api/announcements');
        if (r.ok) {
          const data: Announcement[] = await r.json();
          setItems(data);
        }
      } catch { /* ignore */ }
    })();
  }, [initial]);

  // Load dismissed IDs
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDismissed(JSON.parse(raw));
    } catch { /* ignore */ }
  }, []);

  const persistDismissed = useCallback((list: string[]) => {
    setDismissed(list);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); } catch { /* ignore */ }
  }, []);

  const visible = items.filter(a => !dismissed.includes(a.id));

  useEffect(() => {
    if (!visible.length) return;
    const id = setTimeout(() => setIndex(i => (i + 1) % visible.length), 8000);
    return () => clearTimeout(id);
  }, [visible, index]);

  if (!visible.length) return null;
  const current = visible[Math.min(index, visible.length - 1)];

  const levelStyles: Record<string,string> = {
    info: 'bg-brand-600 text-white',
    update: 'bg-neutral-900 text-white',
    warning: 'bg-amber-600 text-white'
  };
  const cls = levelStyles[current.level || 'info'];

  const dismissCurrent = () => {
    persistDismissed([...dismissed, current.id]);
    setIndex(0);
  };
  const dismissAll = () => {
    persistDismissed([...dismissed, ...visible.map(v => v.id)]);
  };

  return (
    <div className={`relative overflow-hidden ${cls} text-sm`} role="region" aria-label="Site announcements">
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
        {visible.length > 1 && (
          <div className="flex items-center gap-2 text-xs font-medium">
            <button aria-label="Previous announcement" onClick={() => setIndex(i => (i - 1 + visible.length) % visible.length)} className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">‹</button>
            <span>{visible.indexOf(current) + 1}/{visible.length}</span>
            <button aria-label="Next announcement" onClick={() => setIndex(i => (i + 1) % visible.length)} className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">›</button>
          </div>
        )}
        <div className="flex items-center gap-1">
          <button aria-label="Dismiss announcement" onClick={dismissCurrent} className="text-xs px-2 py-1 rounded bg-white/10 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">✕</button>
          {visible.length > 1 && (
            <button aria-label="Dismiss all announcements" onClick={dismissAll} className="text-xs px-2 py-1 rounded bg-white/10 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">Dismiss All</button>
          )}
        </div>
      </div>
    </div>
  );
}
