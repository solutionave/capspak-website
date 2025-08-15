import Link from "next/link";
import { site } from "../site.config";

export default function Footer() {
  return (
  <footer className="border-t border-neutral-200 bg-white mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-neutral-900 tracking-tight">{site.shortName}</h3>
          <p className="mt-2 text-sm text-neutral-600 max-w-xs leading-relaxed">{site.tagline}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Navigate</h4>
      <ul className="mt-3 space-y-2 text-sm">
            {site.nav.map((n) => (
              <li key={n.href}>
        <Link className="text-neutral-600 hover:text-[var(--color-brand-600)] transition-colors" href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Follow</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {site.social.map((s) => (
              <li key={s.href}>
                <a className="text-neutral-600 hover:text-[var(--color-brand-600)] transition-colors" href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-200 text-center py-6 text-xs text-neutral-600">
        © {new Date().getFullYear()} {site.shortName}. All rights reserved.<br />
        <span className="block mt-2 text-[13px] text-neutral-500">Design and developed by <a href="https://solutionave.com" target="_blank" rel="noopener" className="hover:text-[var(--color-brand-600)]">Solutionave</a></span>
      </div>
    </footer>
  );
}
