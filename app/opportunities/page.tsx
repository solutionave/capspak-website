import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '../../site.config';
import MemberApplicationForm from '@/components/MemberApplicationForm';
// (future) import helpers for dynamic events if needed

export const metadata: Metadata = {
  title: `Opportunities | ${site.shortName}`,
  description: 'Learn about upcoming engagement opportunities, our methodology, and apply to become a member.'
};

// Temporary mock upcoming events data
const upcoming = [
  { id: 'u1', date: '2025-09-05', title: 'Expert Talk: Aerospace Resilience', type: 'Expert Talk' },
  { id: 'u2', date: '2025-09-18', title: 'Seminar: Dual-Use Tech Governance', type: 'Seminar' },
  { id: 'u3', date: '2025-10-02', title: 'Podcast Live: Strategic Stability & AI', type: 'Podcast' }
];

export default function OpportunitiesPage(){
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50/50 via-white to-white" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <header className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight">Opportunities</h1>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">Engage with our work through upcoming events, collaborative research pathways, and membership. This page centralises near-term activities and outlines how we approach partnerships.</p>
        </header>

        {/* Upcoming Events Preview */}
        <section className="mt-16" aria-labelledby="upcoming-heading">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 id="upcoming-heading" className="text-sm font-semibold uppercase tracking-wide text-neutral-600">Upcoming Events</h2>
            <Link href="/events" className="text-sm font-medium text-brand-600 hover:text-brand-700">View all →</Link>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map(ev => (
              <li key={ev.id} className="group relative rounded-xl border border-neutral-200/70 bg-white/70 backdrop-blur-sm p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-600 flex items-center gap-2">
                  <span>{ev.type}</span>
                  <span className="w-1 h-1 rounded-full bg-brand-200" />
                  <time dateTime={ev.date}>{new Date(ev.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</time>
                </div>
                <p className="mt-3 text-sm font-medium leading-snug text-neutral-800 line-clamp-3">{ev.title}</p>
                <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-brand-300/60" />
              </li>
            ))}
          </ul>
        </section>

        {/* Methodology */}
        <section className="mt-24 max-w-4xl" aria-labelledby="methodology-heading">
          <h2 id="methodology-heading" className="text-sm font-semibold uppercase tracking-wide text-neutral-600 mb-6">Our Methodology</h2>
          <div className="prose prose-neutral max-w-none">
            <p>We integrate interdisciplinary policy analysis with technically grounded aerospace and dual-use domain expertise. Our methodology emphasises:</p>
            <ul>
              <li><strong>Analytical Rigor:</strong> Mixed-method evidence synthesis, scenario construction, and comparative baselining.</li>
              <li><strong>Stakeholder Co-Creation:</strong> Iterative engagement with public sector, industry, and research partners.</li>
              <li><strong>Transparency & Ethics:</strong> Clear delineation of assumptions, limitations, and responsible innovation framing.</li>
              <li><strong>Impact Pathways:</strong> Translation of insights into actionable options, briefings, and capability roadmaps.</li>
            </ul>
            <p>Prospective members and collaborators are encouraged to align proposals with these pillars to accelerate review and onboarding.</p>
          </div>
        </section>

        {/* Membership Application Form */}
        <section className="mt-24 max-w-3xl" aria-labelledby="membership-heading">
          <h2 id="membership-heading" className="text-sm font-semibold uppercase tracking-wide text-neutral-600 mb-8">Become a Member</h2>
          <MemberApplicationForm />
        </section>
      </div>
    </div>
  );
}
