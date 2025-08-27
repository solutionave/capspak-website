import { Metadata } from "next";
import { site } from "../../../site.config";
import { Section } from "../../../components/Section";
import {
  leadership,
  researchFellows,
  advisoryBoard, residentfellow,
  researchteam
} from "../../../lib/team";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Structure & Governance | ${site.shortName}`,
};

export default function StructurePage() {
  return (
    <>
      <Section title="Structure & Governance">
        <p></p>
      </Section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 pb-32">
        <TeamBlock
          id="leadership"
          title="Executive Leadership"
          members={leadership}
        />
        <TeamBlock
          id="fellows"
          title="Convening Committee"
          members={researchFellows}
        />
        <TeamBlock
          id="advisory"
          title="Organizing Committee"
          members={advisoryBoard}
        />
        <TeamBlock
          id="residentfellow"
          title="Non-Resident Fellow"
          members={residentfellow}
        />
        <TeamBlock
          id="researchteam"
          title="Research Team"
          members={researchteam}
        />
      </div>
    </>
  );
}

interface TeamBlockProps {
  id: string;
  title: string;
  description?: string;
  members: {
    id: string;
    name: string;
    role: string;
    headshot?: string;
    unit?: string;
    slug?: string;
    bio?: string;
  }[];
}

function TeamBlock({ id, title, description, members }: TeamBlockProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      <div className="mb-6">
        <h2 id={`${id}-title`} className="text-xl font-semibold tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-sm text-neutral-600 max-w-2xl">
            {description}
          </p>
        )}
      </div>
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <li key={m.id}>
            <Link
              href={m.slug ? `/team/${m.slug}` : "#"}
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 rounded-2xl"
            >
              <article className="relative h-72 rounded-2xl overflow-hidden ring-1 ring-neutral-200/70 bg-white shadow-sm transition-all duration-500 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-100" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="relative h-28 w-28 rounded-2xl bg-neutral-100 ring-1 ring-neutral-200 overflow-hidden flex items-center justify-center text-neutral-400 text-base font-medium shadow-sm">
                    {m.headshot ? (
                      <Image
                        src={m.headshot}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    ) : (
                      m.name
                        .split(" ")
                        .map((p) => p[0])
                        .slice(0, 2)
                        .join("")
                    )}
                  </div>
                  <h3 className="mt-5 text-base font-semibold tracking-tight text-neutral-900 leading-snug">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-[11px] font-semibold tracking-wide text-brand-600 ">
                    {m.role}
                  </p>
                  {m.unit && (
                    <p className="mt-1 text-[11px] text-neutral-500">
                      {m.unit}
                    </p>
                  )}
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
