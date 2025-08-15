import { Metadata } from "next";
import { site } from "../../site.config";
import { getAnnouncements } from "../../lib/announcements";

export const metadata: Metadata = { title: `Announcements | ${site.shortName}` };

export default function AnnouncementsPage() {
  const items = getAnnouncements();
  const groups = groupBy(items, a => a.category || 'general');
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight">Announcements</h1>
        <p className="mt-2 text-neutral-600 max-w-2xl text-sm">Calls, programme notices, greetings, and organisational updates.</p>
        <div className="mt-10 space-y-14">
          {Object.entries(groups).map(([category, list]) => (
            <section key={category}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 flex items-center gap-2">
                <span>{formatCategory(category)}</span>
                <span className="h-px flex-1 bg-neutral-200" />
              </h2>
              <ul className="mt-5 space-y-5">
                {list.map(a => (
                  <li key={a.id} className="card p-5">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base font-medium tracking-tight flex items-center gap-2">
                          {a.title}
                          {a.deadline && <span className="text-[10px] font-semibold uppercase bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">Deadline {a.deadline}</span>}
                        </h3>
                        <p className="mt-1.5 text-[13px] text-neutral-600 leading-relaxed line-clamp-4">{a.message}</p>
                        {a.tags && <div className="mt-3 flex flex-wrap gap-1.5">{a.tags.map(t => <span key={t} className="px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 text-[11px] font-medium">{t}</span>)}</div>}
                      </div>
                      <div className="text-right text-[11px] text-neutral-500 space-y-1">
                        {a.start && <div>From: {a.start}</div>}
                        {a.end && <div>Until: {a.end}</div>}
                      </div>
                    </div>
                    {a.href && <div className="mt-3"><a href={a.href} className="text-sm font-medium text-brand-700 hover:text-brand-800 inline-flex items-center gap-1">Details <span aria-hidden>→</span></a></div>}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

function groupBy<T, K extends string | number | symbol>(arr: T[], key: (t: T) => K): Record<K, T[]> {
  return arr.reduce((acc, item) => {
    const k = key(item);
    (acc[k] ||= []).push(item);
    return acc;
  }, {} as Record<K, T[]>);
}

function formatCategory(c: string) {
  return c.replace(/[-_]/g, ' ').replace(/\b\w/g, m => m.toUpperCase());
}
