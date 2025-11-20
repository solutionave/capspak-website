import { Metadata } from "next";
import { site } from "../../../site.config";
import { Section } from "../../../components/Section";

import {
  leadership,
  researchFellows,
  advisoryBoard,
  residentfellow,
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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 pb-32">
        <TeamBlock id="advisoryBoard" title="Advisory Board" members={advisoryBoard1} />
        <TeamBlock id="leadership" title="Executive Leadership" members={leadership} />
        <TeamBlock id="fellows" title="Convening Committee" members={researchFellows} />
        <TeamBlock id="researchteam" title="Research Team" members={researchteam} />
        <TeamBlock id="residentfellow" title="Non-Resident Fellow" members={residentfellow} />
        <TeamBlock id="advisory" title="IT Manager" members={advisoryBoard} />
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
    bio?: string; // Add bio field
    unit?: string;
    slug?: string;
  }[];
}

function TeamBlock({ id, title, members }: TeamBlockProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      <div className="mb-6">
        <h2 id={`${id}-title`} className="text-xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>

      <ul className="space-y-8">
        {members.map((m) => (
          <li key={m.id}>
            <Link
              href={m.slug ? `/team/${m.slug}` : "#"}
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 rounded-2xl"
            >
              <article className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Profile Picture */}
<div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center mx-auto md:mx-0">
  {m.headshot ? (
    <Image
      src={m.headshot}
      alt={m.name}
      width={192} // or any desired size
      height={192} // keep it square
      className="object-cover rounded-full border-4 border-gray-200"
    />
  ) : (
    <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center bg-gray-200 rounded-full text-3xl font-bold text-gray-500">
      {m.name
        .split(" ")
        .map((p) => p[0])
        .slice(0, 2)
        .join("")}
    </div>
  )}
</div>


                {/* Bio & Info */}
                <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-lg font-semibold text-gray-900">{m.name}</h3>
                  <p className="text-sm font-medium text-gray-500">{m.role}</p>
                  {m.unit && <p className="text-sm text-gray-400">{m.unit}</p>}
                  {m.bio && (
                    <p className="mt-3 text-gray-700 text-sm">{m.bio}</p>
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

