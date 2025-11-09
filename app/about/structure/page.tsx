import { Metadata } from "next";
import { site } from "../../../site.config";
import { Section } from "../../../components/Section";
import {
  leadership,
  researchFellows,
  advisoryBoard, residentfellow,
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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 pb-32">
        <TeamBlock
          id="advisoryBoard"
          title="Advisory Board"
          members={advisoryBoard1}
        />
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
          title="IT Manager"
          members={advisoryBoard}
        />
        <TeamBlock
          id="researchteam"
          title="Research Team"
          members={researchteam}
        />
        <TeamBlock
          id="residentfellow"
          title="Non-Resident Fellow"
          members={residentfellow}
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
              <article className="relative h-96 w-86 rounded-2xl overflow-hidden ring-1 ring-neutral-200/70 bg-transparent shadow-lg transition-all duration-500 hover:shadow-xl">
                {/* Image fills the card */}
                {m.headshot ? (
                  <Image
                    src={m.headshot}
                    alt={m.name}
                    fill
                    className="object-fit"
                    sizes="(max-width: 768px) 100vw, 33vw"  
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-lg font-bold bg-neutral-100">
                    {m.name
                      .split(" ")
                      .map((p) => p[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}

                {/* Gradient overlay for readability */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <h3 className="text-base font-semibold text-white">
                    {m.name}
                  </h3>
                  <p className="text-[11px] font-semibold text-neutral-200">
                    {m.role}
                  </p>
                  {m.unit && (
                    <p className="text-[11px] text-neutral-300">{m.unit}</p>
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
