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
    <section id={id} className={"py-16 sm:py-24 " + (className ?? "") }>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{eyebrow}</p>}
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">{title}</h2>
          <div className="prose prose-neutral mt-6 max-w-none text-neutral-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  );
}
