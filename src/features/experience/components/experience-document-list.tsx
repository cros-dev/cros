import { DOCUMENT_HEADING_CLASSES } from "~/components/ui/section-heading";
import type { Experience } from "~/features/experience/schemas/experience";
import { formatShortPeriod } from "~/lib/date";

export interface ExperienceDocumentListProps {
  experiences: Experience[];
}

/** Seção documental de experiências profissionais com empresa, cargo, período e todos os destaques. */
export function ExperienceDocumentList({
  experiences,
}: ExperienceDocumentListProps) {
  return (
    <section id="experiencia" aria-labelledby="resume-experience-heading">
      <h2 id="resume-experience-heading" className={DOCUMENT_HEADING_CLASSES}>
        Experiência profissional
      </h2>
      <div>
        {experiences.map((experience) => (
          <article key={experience.id} className="py-6 first:pt-0 last:pb-0">
            <div className="print:break-inside-avoid">
              <h3 className="text-ui-sm font-medium tracking-[-0.01em] text-foreground">
                {experience.company}
              </h3>
              <p className="mt-1 text-caption text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {experience.role}
                </span>
                <span aria-hidden="true"> | </span>
                <span className="font-semibold text-foreground">
                  {formatShortPeriod(experience.startDate, experience.endDate)}
                </span>
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-caption leading-[1.65] text-muted-foreground">
              {experience.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-2 print:break-inside-avoid"
                >
                  <span aria-hidden="true" className="shrink-0 text-primary">
                    ●
                  </span>
                  <span className="min-w-0 flex-1 text-pretty break-words">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
