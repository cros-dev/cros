import type { ReactNode } from "react";

export interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  action?: ReactNode;
}

/** Cabeçalho padronizado de seção com subtítulo superior, título principal e ação opcional. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  action,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="mb-3 text-caption font-medium tracking-[0.08em] text-primary uppercase">
          {eyebrow}
        </p>
        <h2
          id={id}
          className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium tracking-[-0.03em] text-foreground"
        >
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
