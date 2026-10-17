import { Badge } from "~/components/ui/badge";
import { TimelineDate, TimelineMarker } from "~/components/ui/timeline";
import type { Experience } from "~/features/experience/schemas/experience";
import { formatTimelinePeriod } from "~/lib/date";

export interface ExperienceTimelineItemProps {
  experience: Experience;
  isActive: boolean;
}

/** Item individual da linha do tempo de experiências com período, marcador, cargo, empresa, resumo e tecnologias. */
export function ExperienceTimelineItem({
  experience,
  isActive,
}: ExperienceTimelineItemProps) {
  const periodLabel = formatTimelinePeriod(
    experience.startDate,
    experience.endDate,
  );

  return (
    <div className="relative rounded-md py-4 sm:py-5">
      <div className="mb-3 pl-[3.25rem] sm:hidden">
        <TimelineDate label={periodLabel} isActive={isActive} />
      </div>
      <div className="relative grid grid-cols-[2.25rem_minmax(0,1fr)] items-start gap-x-3 sm:grid-cols-[10rem_2.25rem_minmax(0,1fr)] sm:gap-x-5">
        <div className="hidden sm:flex sm:justify-end sm:pt-1">
          <TimelineDate label={periodLabel} isActive={isActive} />
        </div>
        <div className="flex justify-center sm:pt-1">
          <TimelineMarker isActive={isActive} />
        </div>
        <article className="min-w-0">
          <h3 className="text-ui-sm font-medium tracking-[-0.01em] text-foreground">
            {experience.role}
          </h3>
          <p className="mt-0.5 text-caption text-muted-foreground">
            {experience.company}
          </p>
          <p className="mt-2 text-pretty text-caption leading-[1.6] text-muted-foreground">
            {experience.summary}
          </p>
          {experience.technologies.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {experience.technologies.map((tech) => (
                <Badge key={tech} label={tech} tone="primary" />
              ))}
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
