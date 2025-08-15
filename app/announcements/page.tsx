import { Metadata } from "next";
import { site } from "../../site.config";
import { getAnnouncements } from "../../lib/announcements";

export const metadata: Metadata = { title: `Announcements | ${site.shortName}` };

export default function AnnouncementsPage() {
  const items = getAnnouncements();
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight">Announcements</h1>
        <p className="mt-2 text-neutral-600 max-w-2xl text-sm">Key updates, event notices, and organisational news. Replace static data with CMS or API integration in production.</p>
        <ul className="mt-10 space-y-6">
          {items.map(a => (
            <li key={a.id} className="card p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-medium tracking-tight">{a.title}</h2>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{a.message}</p>
                  {a.tags && <div className="mt-3 flex flex-wrap gap-1.5">{a.tags.map(t => <span key={t} className="px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 text-xs font-medium">{t}</span>)}</div>}
                </div>
                <div className="text-right text-xs text-neutral-500 space-y-1">
                  <div>Created: {a.createdAt}</div>
                  {a.start && <div>From: {a.start}</div>}
                  {a.end && <div>Until: {a.end}</div>}
                </div>
              </div>
              {a.href && <div className="mt-4"><a href={a.href} className="text-sm font-medium text-brand-700 hover:text-brand-800 underline">Learn more →</a></div>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
