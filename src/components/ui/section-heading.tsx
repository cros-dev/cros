import type { ReactNode } from "react";

/** Classes tipográficas compartilhadas para cabeçalhos de seção no documento de currículo. */
export const DOCUMENT_HEADING_CLASSES =
  "mb-6 scroll-mt-[var(--site-section-scroll-margin)] text-caption font-medium tracking-[0.08em] text-primary uppercase print:break-after-avoid";

export interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  level?: "h1" | "h2";
  action?: ReactNode;
}

/** Cabeçalho padronizado de seção com subtítulo superior, título principal e ação opcional. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  level = "h2",
  action,
}: SectionHeadingProps) {
  const HeadingTag = level;

  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="mb-3 text-caption font-medium tracking-[0.08em] text-primary uppercase">
          {eyebrow}
        </p>
        <HeadingTag
          id={id}
          className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium tracking-[-0.03em] text-foreground"
        >
          {title}
        </HeadingTag>
      </div>
      {action}
    </div>
  );
}
