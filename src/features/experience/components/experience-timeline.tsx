import { useRef } from "react";
import { Link } from "react-router";
import { SectionHeading } from "~/components/ui/section-heading";
import { Timeline, TimelineItem, TimelineLine } from "~/components/ui/timeline";
import { ExperienceTimelineItem } from "~/features/experience/components/experience-timeline-item";
import type { Experience } from "~/features/experience/schemas/experience";
import { useActiveTimeline } from "~/lib/use-active-timeline";

export interface ExperienceTimelineSectionProps {
  experiences: Experience[];
}

/** Seção de experiências profissionais em linha do tempo com indicador de leitura por rolagem. */
export function ExperienceTimelineSection({
  experiences,
}: ExperienceTimelineSectionProps) {
  const timelineRef = useRef<HTMLOListElement>(null);
  const activeIndex = useActiveTimeline(
    experiences.length,
    "experiencia",
    timelineRef,
  );

  return (
    <section
      id="experiencia"
      aria-labelledby="experience-heading"
      className="scroll-mt-[var(--site-section-scroll-margin)] py-16 pb-24"
    >
      <SectionHeading
        eyebrow="Carreira"
        title="Experiência profissional"
        id="experience-heading"
        action={
          <Link
            to="/curriculo"
            className="text-ui-sm text-primary transition-colors hover:text-primary/80"
          >
            Ver currículo completo
          </Link>
        }
      />
      <Timeline
        ref={timelineRef}
        position="left"
        aria-label="Linha do tempo de experiências"
        className="[--experience-timeline-axis:1.125rem] sm:[--experience-timeline-axis:calc(10rem+1.125rem+1.25rem)]"
      >
        <TimelineLine
          align="left"
          className="!left-[var(--experience-timeline-axis)]"
        />
        {experiences.map((experience, index) => (
          <TimelineItem
            key={experience.id}
            itemId={experience.id}
            className="pb-1 last:pb-0 sm:pb-2"
          >
            <ExperienceTimelineItem
              experience={experience}
              isActive={activeIndex === index}
            />
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
