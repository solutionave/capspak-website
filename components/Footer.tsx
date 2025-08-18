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
                <Link
                  className="text-neutral-600 hover:text-[var(--color-brand-600)] transition-colors"
                  href={n.href}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Follow</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {site.social.map((s) => (
              <li key={s.href}>
                <a
                  className="text-neutral-600 hover:text-[var(--color-brand-600)] transition-colors"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>


      {/* Horizontal social bar */}
      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <ul className="flex items-center justify-center gap-6">
            <li>
              <a
                href="https://www.instagram.com/capspak_official?igsh=YjJxbTJmaXd4bjVv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group inline-flex items-center gap-2 text-neutral-600 hover:text-[var(--color-brand-600)] transition-colors"
                title="Instagram"
              >
                <IconInstagram className="h-5 w-5" />
                <span className="hidden sm:inline text-xs">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/19ZBqzhCai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group inline-flex items-center gap-2 text-neutral-600 hover:text-[var(--color-brand-600)] transition-colors"
                title="Facebook"
              >
                <IconFacebook className="h-5 w-5" />
                <span className="hidden sm:inline text-xs">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/consortium-for-asia-pacific-studies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex items-center gap-2 text-neutral-600 hover:text-[var(--color-brand-600)] transition-colors"
                title="LinkedIn"
              >
                <IconLinkedIn className="h-5 w-5" />
                <span className="hidden sm:inline text-xs">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/capspakofficial?t=ZYfnxPUqm8Pu9BuMhQ49Bw&s=09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="group inline-flex items-center gap-2 text-neutral-600 hover:text-[var(--color-brand-600)] transition-colors"
                title="X"
              >
                <IconX className="h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>


      <div className="border-t border-neutral-200 text-center py-6 text-xs text-neutral-600">
        © {new Date().getFullYear()} {site.shortName}. All rights reserved.<br />
        <span className="block mt-2 text-[13px] text-neutral-500">Design and developed by <a href="https://solutionave.com" target="_blank" rel="noopener" className="hover:text-[var(--color-brand-600)]">Solutionave LLC</a></span>
      </div>
    </footer>
  );
}

/* --- Inline SVG icons (no extra packages) --- */
function IconInstagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}
function IconFacebook({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M14.5 8H16V5h-2a4 4 0 0 0-4 4v2H8v3h2v6h3v-6h2.1l.4-3H13V9a1 1 0 0 1 1-1h.5Z"
        fill="currentColor"
      />
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function IconLinkedIn({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 10h2.3v7H7v-7Zm1.2-3.5a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7Z" fill="currentColor"/>
        <path d="M12 10h2.2v1c.4-.7 1.2-1.2 2.3-1.2 2 0 3.5 1.3 3.5 4v3.2h-2.3v-2.9c0-1.1-.5-1.9-1.6-1.9-1 0-1.7.7-1.9 1.5 0 .1 0 .3 0 .5v2.8H12V10Z" fill="currentColor"/>
    </svg>
  );
}
function IconX({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M16.6 4H20l-6.9 7.9L20.8 20h-4.3l-5-5.9-5.6 5.9H4.5l7.4-7.8L3.7 4h4.4l4.6 5.4L16.6 4Z"
        fill="currentColor"
      />
    </svg>
  );
}
