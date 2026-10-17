import { useRef, type ReactNode } from "react";
import { SectionHeading } from "~/components/ui/section-heading";
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineLine,
} from "~/components/ui/timeline";
import {
  ProjectTimelineCard,
  type ProjectTimelineCardVariant,
} from "~/features/projects/components/project-timeline-card";
import type { Project } from "~/features/projects/schemas/project";
import { formatTimelineMonth } from "~/lib/date";
import { useActiveTimeline } from "~/lib/use-active-timeline";

export interface ProjectTimelineSectionProps {
  projects: Project[];
  variant: ProjectTimelineCardVariant;
  heading: "h1" | "h2";
  title: string;
  action?: ReactNode;
}

/** Seção de projetos em linha do tempo alternada com destaque progressivo por rolagem. */
export function ProjectTimelineSection({
  projects,
  variant,
  heading,
  title,
  action,
}: ProjectTimelineSectionProps) {
  const timelineRef = useRef<HTMLOListElement>(null);
  const activeIndex = useActiveTimeline(
    projects.length,
    "projetos",
    timelineRef,
  );

  return (
    <section
      id="projetos"
      aria-labelledby="projects-heading"
      className="scroll-mt-[var(--site-section-scroll-margin)] py-16"
    >
      <SectionHeading
        eyebrow="Portfólio"
        title={title}
        id="projects-heading"
        level={heading}
        action={action}
      />
      <Timeline
        ref={timelineRef}
        position="alternate"
        aria-label="Linha do tempo de projetos"
      >
        <TimelineLine />
        {projects.map((project, index) => {
          const align = index % 2 === 0 ? "left" : "right";
          const isActive = activeIndex === index;

          return (
            <TimelineItem
              key={project.slug}
              align={align}
              itemId={project.slug}
            >
              <TimelineContent
                align={align}
                dateLabel={formatTimelineMonth(project.startDate)}
                isActive={isActive}
              >
                <ProjectTimelineCard project={project} variant={variant} />
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </section>
  );
}
