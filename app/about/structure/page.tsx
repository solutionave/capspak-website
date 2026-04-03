import { Metadata } from "next";
import { site } from "../../../site.config";
import { Section } from "../../../components/Section";

import {
  leadership,
  conveningCommittee,
  researchfellows as researchFellows,
  advisoryBoard,
  residentfellow,
  // seniorResearchAnalyst,
  researchteam,
  advisoryBoard1
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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 pb-32">
        <TeamBlock id="advisoryBoard" title="Advisory Board" members={advisoryBoard1} />
        <TeamBlock id="leadership" title="Executive Leadership" members={leadership} />
  <TeamBlock id="fellows" title="Convening Committee" members={conveningCommittee} />
  {/* <TeamBlock id="seniorResearchAnalyst" title="Senior Research Analyst" members={seniorResearchAnalyst} /> */}
  <TeamBlock id="researchers" title="Research Fellow" members={researchFellows} />
        <TeamBlock id="researchteam" title="Research Team" members={researchteam} />
        <TeamBlock id="residentfellow" title="Non-Resident Fellow" members={residentfellow} />
        <TeamBlock id="itmanager" title="IT Manager" members={advisoryBoard} />
      </div>
    </>
  );
}

interface TeamBlockProps {
  id: string;
  title: string;
  members: {
    id: string;
    name: string;
    role: string;
    headshot?: string;
    bio?: string;
    unit?: string;
    slug?: string;
  }[];
}

function TeamBlock({ id, title, members }: TeamBlockProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      {/* Section Heading */}
      <div className="mb-8">
        <h2 id={`${id}-title`} className="text-2xl font-bold tracking-tight">
          {title}
        </h2>
      </div>

      {/* Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {members.map((m) => (
          <li key={m.id}>
            <Link href={m.slug ? `/team/${m.slug}` : "#"} className="block">

              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">

                {/* BIGGER IMAGE (Full and Clear) */}
                <div className="w-full h-72 bg-gray-200 relative">
                  {m.headshot ? (
                    <Image
                      src={m.headshot}
                      alt={m.name}
                      fill
                      sizes="100%"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-4xl font-bold text-gray-500">
                      {m.name
                        .split(" ")
                        .map((p) => p[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900">{m.name}</h3>
                  <p className="text-sm font-medium text-gray-600">{m.role}</p>
                  {m.unit && <p className="text-sm text-gray-500">{m.unit}</p>}

                  {/* Bio */}
                  {m.bio && (
                    <p className="mt-3 text-gray-700 text-sm line-clamp-5">
                      {m.bio}
                    </p>
                  )}

                  <div className="mt-auto"></div>
                </div>

              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
