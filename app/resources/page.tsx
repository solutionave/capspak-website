import { site } from '../../site.config';

export default function ResourcesOverview(){
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Resources</h1>
      <p className="mt-4 text-neutral-600 max-w-2xl text-sm leading-relaxed">Central access point for publications, recorded sessions, and commentary from {site.shortName}. Use the navigation dropdown to drill down into specific resource types.</p>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        <li className="rounded-xl border border-neutral-200/70 bg-white/70 backdrop-blur p-5 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">Publications</h2>
          <p className="mt-2 text-xs text-neutral-600 leading-relaxed">Briefs, reports & analytical outputs.</p>
        </li>
        <li className="rounded-xl border border-neutral-200/70 bg-white/70 backdrop-blur p-5 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">Event Recordings</h2>
          <p className="mt-2 text-xs text-neutral-600 leading-relaxed">Curated archive of selected session media.</p>
        </li>
        <li className="rounded-xl border border-neutral-200/70 bg-white/70 backdrop-blur p-5 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">Commentary</h2>
          <p className="mt-2 text-xs text-neutral-600 leading-relaxed">Short-form insights & perspective notes.</p>
        </li>
      </ul>
    </div>
  );
}
