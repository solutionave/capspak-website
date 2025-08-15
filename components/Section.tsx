import { ReactNode } from "react";

export function Section({
  title,
  eyebrow,
  children,
  className,
  id,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={"relative py-16 sm:py-24 " + (className ?? "") }>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.9] bg-[radial-gradient(circle_at_15%_20%,var(--color-brand-50),transparent_60%),radial-gradient(circle_at_85%_40%,var(--color-brand-100),transparent_65%)]" />
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black,black,transparent)] bg-[linear-gradient(120deg,rgba(19,137,199,0.08),rgba(7,63,92,0.05))]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-700)]">{eyebrow}</p>}
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 bg-clip-text">{title}</h2>
          <div className="prose prose-neutral mt-6 max-w-none text-neutral-700 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
