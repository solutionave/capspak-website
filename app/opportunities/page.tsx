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
        </header>

        {/* Join our network */}
        <section className="mt-24 max-w-4xl" aria-labelledby="Joinournetwork-heading">
          <h2 id="Joinournetwork-heading" className="text-sm font-semibold uppercase tracking-wide text-neutral-600 mb-6">Join our network</h2>
          <div className="prose prose-neutral max-w-none">
            <p>CAPS membership is open to:</p>
            <ul>
              <li><strong>Faculty members</strong> of public/private universities working on any issue related to Asia-Pacific Region.</li>
              <li><strong>University students enrolled in relevant disciplines</strong> including but not limited to Political Science,International Relations, Strategic Studies, International Political Economy, Area Studies with a keen   interest   in   Politics, Security   and   Economy   of   Asia-Pacific region.</li>
              <li><strong>Members   of   diplomatic   community,</strong> media and civil society organizations.</li>
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
