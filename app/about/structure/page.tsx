import { Metadata } from 'next';
import { site } from '../../../site.config';
import { Section } from '../../../components/Section';
import { leadership, researchFellows, advisoryBoard, governanceBodies } from '../../../lib/team';
import Image from 'next/image';

export const metadata: Metadata = { title: `Structure & Governance | ${site.shortName}` };

export default function StructurePage(){
  return (
    <>
      <Section title="Structure & Governance" eyebrow="How we operate">
        <p>{site.shortName} maintains a lean governance model balancing strategic oversight with analytical agility. Executive leadership steers operations & external partnerships, while thematic fellows drive domain depth. An independent advisory board provides integrity, strategic challenge, and horizon scanning.</p>
      </Section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 pb-24">
        <OrgDiagram />
        <TeamBlock id="leadership" title="Executive Leadership" members={leadership} description="Core executive responsible for institutional strategy, partnerships, and output quality." />
        <TeamBlock id="fellows" title="Research Fellows" members={researchFellows} description="Domain experts advancing analytical depth across core thematic lines." />
        <TeamBlock id="advisory" title="Advisory Board" members={advisoryBoard} description="External strategic guidance & ethical oversight." />
        <GovernanceBodies />
      </div>
    </>
  );
}

function OrgDiagram(){
  return (
    <section aria-labelledby="org-diagram" className="relative">
      <h2 id="org-diagram" className="text-xl font-semibold tracking-tight mb-6">High-Level Structure</h2>
      <div className="overflow-x-auto">
        <div className="min-w-[780px] p-6 rounded-xl bg-white ring-1 ring-neutral-200/70 shadow-sm relative">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-brand-600 mb-2">Advisory Board</div>
              <p className="text-xs text-neutral-600">Strategic guidance & integrity</p>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-brand-600 mb-2">Executive</div>
              <p className="text-xs text-neutral-600">Direction & stewardship</p>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-brand-600 mb-2">Research Fellows</div>
              <p className="text-xs text-neutral-600">Analytical depth</p>
            </div>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
          <div className="mt-8 grid grid-cols-4 gap-6 text-center">
            <div className="col-span-4 sm:col-span-1">
              <div className="text-[11px] font-medium uppercase tracking-wide text-neutral-500 mb-1">Operations</div>
              <p className="text-xs text-neutral-600 leading-snug">Admin, finance, partnerships</p>
            </div>
            <div className="col-span-4 sm:col-span-1">
              <div className="text-[11px] font-medium uppercase tracking-wide text-neutral-500 mb-1">Aerospace & Space</div>
              <p className="text-xs text-neutral-600 leading-snug">Launch, orbital, aviation</p>
            </div>
            <div className="col-span-4 sm:col-span-1">
              <div className="text-[11px] font-medium uppercase tracking-wide text-neutral-500 mb-1">Strategic Stability</div>
              <p className="text-xs text-neutral-600 leading-snug">Deterrence & escalation</p>
            </div>
            <div className="col-span-4 sm:col-span-1">
              <div className="text-[11px] font-medium uppercase tracking-wide text-neutral-500 mb-1">Industrial Base</div>
              <p className="text-xs text-neutral-600 leading-snug">Supply chains & diffusion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
interface TeamBlockProps { id: string; title: string; description?: string; members: { id: string; name: string; role: string; headshot?: string; unit?: string; slug?: string; bio?: string }[] }
function TeamBlock({ id, title, description, members }: TeamBlockProps){
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      <div className="mb-6">
        <h2 id={`${id}-title`} className="text-xl font-semibold tracking-tight">{title}</h2>
        {description && <p className="mt-2 text-sm text-neutral-600 max-w-2xl">{description}</p>}
      </div>
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {members.map(m => (
          <li key={m.id} className="group relative">
            <Link href={m.slug ? `/team/${m.slug}` : '#'} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 rounded-2xl">
              <article className="relative h-72 rounded-2xl overflow-hidden ring-1 ring-neutral-200/70 bg-white shadow-sm transition-all duration-500 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-100" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="relative h-28 w-28 rounded-2xl bg-neutral-100 ring-1 ring-neutral-200 overflow-hidden flex items-center justify-center text-neutral-400 text-base font-medium shadow-sm">
                    {m.headshot ? <Image src={m.headshot} alt="" fill className="object-cover" /> : m.name.split(' ').map(p=>p[0]).slice(0,2).join('') }
                  </div>
                  <h3 className="mt-5 text-base font-semibold tracking-tight text-neutral-900 leading-snug">{m.name}</h3>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-brand-600">{m.role}</p>
                  {m.unit && <p className="mt-1 text-[11px] text-neutral-500">{m.unit}</p>}
                </div>
                {/* Bottom sheet overlay */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="mx-3 mb-3 rounded-xl bg-neutral-900/90 backdrop-blur px-4 py-4 ring-1 ring-white/10 text-left">
                    <p className="text-[12px] leading-relaxed text-neutral-200 line-clamp-4 group-hover:line-clamp-none">{m.bio || 'Profile overview coming soon.'}</p>
                    <span className="mt-3 inline-flex items-center text-[11px] font-semibold uppercase tracking-wide text-brand-300">View Profile <span className="ml-1" aria-hidden>→</span></span>
                  </div>
                </div>
                <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-brand-500/30 transition-colors" />
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function GovernanceBodies(){
  return (
    <section aria-labelledby="gov-bodies" className="scroll-mt-24">
      <h2 id="gov-bodies" className="text-xl font-semibold tracking-tight mb-6">Governance Bodies</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {governanceBodies.map(g => (
          <div key={g.id} className="rounded-xl bg-white ring-1 ring-neutral-200/70 p-6 shadow-sm">
            <h3 className="text-sm font-semibold tracking-tight text-neutral-900">{g.title}</h3>
            {g.description && <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{g.description}</p>}
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              {g.members.map(m => <li key={m.id}>{m.name} – <span className="text-neutral-500">{m.role}</span></li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
