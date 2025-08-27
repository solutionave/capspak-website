/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { site } from "../../../site.config";
import { getTeamMember, getTeamSlugs } from "../../../lib/team";
import Image from "next/image";
import Link from "next/link";


export function generateStaticParams() {
  return getTeamSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: any): Metadata {
  const m = getTeamMember(params.slug);
  if (!m) return { title: `Profile | ${site.shortName}` };
  return { title: `${m.name} | ${site.shortName}` };
}

export default function TeamProfilePage({ params }: any) {
  const member = getTeamMember(params.slug);
  if (!member) return notFound();

  return (
    <div className="relative">
      {/* Decorative gradient backdrop */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50/40 via-white to-white [mask-image:linear-gradient(to_bottom,black,black,transparent)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <Link
          href="/about/structure"
          className="inline-flex items-center text-sm text-brand-600 hover:text-brand-700 font-medium group"
        >
          <span className="mr-1 transition-transform group-hover:-translate-x-0.5">
            ←
          </span>{" "}
          Back to team
        </Link>
        <div className="mt-8 grid gap-12 lg:grid-cols-[320px,1fr]">
          {/* Sidebar (no more sticky) */}
          <aside className="space-y-8 self-start">
            <div className="relative group">
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden ring-1 ring-neutral-200/70 shadow-sm bg-neutral-100">
                {member.headshot && (
                  <Image
                    src={member.headshot}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-semibold tracking-tight leading-tight">
                  {member.name}
                </h1>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-600">
                  {member.role}
                </p>
                {member.unit && (
                  <p className="mt-1 text-sm text-neutral-500">{member.unit}</p>
                )}
              </div>
              {/* {tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-medium ring-1 ring-brand-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )} */}
            </div>
            <div className="rounded-xl border border-neutral-200/70 bg-white/60 backdrop-blur-sm p-5 space-y-4 shadow-sm">
              <dl className="text-sm divide-y divide-neutral-100">
                {member.email && (
                  <div className="py-2 flex justify-between gap-4">
                    <dt className="text-neutral-500">Email</dt>
                    <dd>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-brand-600 hover:underline break-all"
                      >
                        {member.email}
                      </a>
                    </dd>
                  </div>
                )}
                {member.linkedin && (
                  <div className="py-2 flex justify-between gap-4">
                    <dt className="text-neutral-500">LinkedIn</dt>
                    <dd>
                      <a
                        href={`https://linkedin.com/in/${member.linkedin}`}
                        className="text-brand-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Profile
                      </a>
                    </dd>
                  </div>
                )}
                <div className="py-2 flex justify-between gap-4">
                  {member.about && (
                    <section id="overview">
                      <header className="mb-6">
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-600">
                          Overview
                        </h2>
                      </header>
                      <p className="text-base leading-relaxed text-neutral-700 ">
                        {member.about}
                      </p>
                    </section>
                  )}
                </div>
                {member.unit && (
                  <div className="py-2 flex justify-between gap-4">
                    <dt className="text-neutral-500">Unit</dt>
                    <dd className="text-neutral-800">{member.unit}</dd>
                  </div>
                )}
              </dl>
            </div>
          </aside>

          {/* Main content */}
          {/* <main className="space-y-16">
            {member.experience && member.experience.length > 0 && (
              <section id="experience">
                <header className="mb-6 flex items-center gap-3">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-600">
                    Experience
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-neutral-200 to-transparent" />
                </header>
                <ul className="relative max-w-3xl">
                  {member.experience.map((e, idx) => (
                    <li key={e} className="pl-6 pb-6 last:pb-0 relative">
                      <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-brand-500 ring-2 ring-white" />
                      {idx !== member.experience!.length - 1 && (
                        <span
                          className="absolute left-1.5 top-5 bottom-0 w-px bg-gradient-to-b from-brand-200 via-neutral-200 to-neutral-100"
                          aria-hidden="true"
                        />
                      )}
                      <p className="text-sm leading-relaxed text-neutral-700">
                        {e}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {member.publications && member.publications.length > 0 && (
              <section id="publications">
                <header className="mb-6 flex items-center gap-3">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-600">
                    Selected Publications
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-neutral-200 to-transparent" />
                </header>
                <ul className="grid sm:grid-cols-2 gap-6 max-w-4xl">
                  {member.publications.map((p) => (
                    <li
                      key={p}
                      className="group relative rounded-xl border border-neutral-200/70 bg-white/60 backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <p className="text-sm font-medium text-neutral-800 leading-snug">
                        {p}
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-[11px] text-neutral-500">
                        <span>Internal Ref</span>
                        <span className="w-1 h-1 rounded-full bg-neutral-300" />
                        <span>2025</span>
                      </div>
                      <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-brand-300/70" />
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {related.length > 0 && (
              <section id="related" className="pt-4">
                <header className="mb-6 flex items-center gap-3">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-600">
                    Colleagues
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-neutral-200 to-transparent" />
                </header>
                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {related.map((r) => (
                    <li key={r.slug} className="group">
                      <Link
                        href={`/team/${r.slug}`}
                        className="block rounded-xl border border-neutral-200/70 bg-white/70 backdrop-blur-sm p-4 hover:border-brand-300/70 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-neutral-100 ring-1 ring-neutral-200">
                            {r.headshot && (
                              <Image
                                src={r.headshot}
                                alt={r.name}
                                fill
                                className="object-cover"
                              />
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-neutral-800 truncate">
                              {r.name}
                            </p>
                            <p className="text-[11px] uppercase font-semibold tracking-wide text-brand-600 truncate">
                              {r.role}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </main> */}
        </div>
      </div>
    </div>
  );
}
