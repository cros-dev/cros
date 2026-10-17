import { ResumeSectionHeading } from "~/features/resume/components/resume-section-heading";
import type { ResumeLanguage } from "~/features/resume/schemas/resume";

export interface LanguageListProps {
  items: readonly ResumeLanguage[];
}

/** Seção de idiomas com indicação do nível de proficiência. */
export function LanguageList({ items }: LanguageListProps) {
  return (
    <section aria-labelledby="resume-languages-heading">
      <ResumeSectionHeading id="resume-languages-heading">
        Idiomas
      </ResumeSectionHeading>
      <ul className="space-y-2 text-ui-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item.label} className="flex items-baseline gap-2">
            <span aria-hidden="true" className="text-primary">
              ●
            </span>
            <span>
              {item.label}
              <span className="text-muted-foreground/80"> — {item.level}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
