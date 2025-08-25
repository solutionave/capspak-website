import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '../../site.config';
import MemberApplicationForm from '@/components/MemberApplicationForm';

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
          <h2 id="Joinournetwork-heading" className="text-sm font-semibold uppercase tracking-wide text-neutral-600 mb-6">
            Eligibility Criteria for Membership
          </h2>
          <div className="prose prose-neutral max-w-none">
            <p>CAPS membership is open to:</p>
            <ul className="list-disc list-outside pl-6 space-y-1">
              <li>Faculty members of public/private universities working on any issue related to the Asia-Pacific region.</li>
              <li>
                University students enrolled in relevant disciplines including but not limited to Political Science,
                International Relations, Strategic Studies, International Political Economy, and Area Studies, with a keen
                interest in the politics, security, and economy of the Asia-Pacific region.
              </li>
              <li>Members of the diplomatic community, media, and civil society organizations.</li>
            </ul>
            <p className='mt-6'>
              Prospective members and collaborators are encouraged to align proposals with these pillars to accelerate
              review and onboarding.
            </p>
          </div>
        </section>

        {/* Membership Application Form */}
        <section className="mt-24 max-w-3xl" aria-labelledby="membership-heading">
          <h2 id="membership-heading" className="text-sm font-semibold uppercase tracking-wide text-neutral-600 mb-8">
            Become a Member
          </h2>

          {/* CAPS membership form hyperlink */}
          <p className="mb-6 text-neutral-700">
            Please complete the{' '}
            <Link
              href="https://docs.google.com/forms/d/1bbOHHr4DjQA1eBgUE4VqHdxXhh1UQ1wyVB2OHrrkRtg/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-brand-700)] hover:text-[var(--color-brand-600)] underline underline-offset-2"
            >
              CAPS membership form
            </Link>
            .
          </p>

          <MemberApplicationForm />
        </section>
      </div>
    </div>
  );
}
