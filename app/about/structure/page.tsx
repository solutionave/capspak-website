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

interface TeamBlockProps { id: string; title: string; description?: string; members: { id: string; name: string; role: string; headshot?: string; unit?: string }[] }
function TeamBlock({ id, title, description, members }: TeamBlockProps){
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      <div className="mb-6">
        <h2 id={`${id}-title`} className="text-xl font-semibold tracking-tight">{title}</h2>
        {description && <p className="mt-2 text-sm text-neutral-600 max-w-2xl">{description}</p>}
      </div>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map(m => (
          <li key={m.id} className="group relative rounded-xl bg-white ring-1 ring-neutral-200/70 p-5 flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 rounded-lg bg-neutral-100 ring-1 ring-neutral-200 overflow-hidden flex items-center justify-center text-neutral-400 text-xs font-medium">
                {m.headshot ? <Image src={m.headshot} alt="" fill className="object-cover" /> : m.name.split(' ').map(p=>p[0]).slice(0,2).join('') }
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold tracking-tight text-neutral-900 leading-snug">{m.name}</h3>
                <p className="text-[12px] font-medium uppercase tracking-wide text-brand-600 mt-1">{m.role}</p>
                {m.unit && <p className="text-[11px] text-neutral-500 mt-1">{m.unit}</p>}
              </div>
            </div>
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
