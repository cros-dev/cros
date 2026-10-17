import type { Experience } from "~/features/experience/schemas/experience";
import { formatPeriod } from "~/lib/date";

interface ExperienceSectionProps {
  experiences: Experience[];
  highlightLimit?: number;
}

/** Seção de experiências profissionais com resumo, destaques e tecnologias utilizadas. */
export function ExperienceSection({
  experiences,
  highlightLimit,
}: ExperienceSectionProps) {
  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-heading"
      className="space-y-6"
    >
      <h2
        id="experiencia-heading"
        className="text-xl font-semibold tracking-tight text-foreground"
      >
        Experiência
      </h2>
      <div className="space-y-4">
        {experiences.map((experience) => {
          const visibleHighlights =
            highlightLimit !== undefined
              ? experience.highlights.slice(0, highlightLimit)
              : experience.highlights;

          return (
            <article
              key={experience.id}
              className="rounded-lg border-[0.5px] border-border bg-card p-5 text-card-foreground print:bg-transparent"
            >
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {experience.role}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {experience.company}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">
                  {formatPeriod(experience.startDate, experience.endDate)}
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground">
                {experience.summary}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
                {visibleHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              {experience.technologies.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border-[0.5px] border-border bg-secondary px-2 py-0.5 text-xs text-secondary-foreground print:bg-transparent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
