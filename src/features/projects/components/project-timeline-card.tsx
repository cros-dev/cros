import { useId } from "react";
import { Badge, type BadgeTone } from "~/components/ui/badge";
import { TechnologyPillList } from "~/components/ui/technology-pill";
import { ProjectGallery } from "~/features/projects/components/project-gallery";
import {
  PROJECT_CONTEXT_LABELS,
  PROJECT_STATUS_LABELS,
} from "~/features/projects/components/project-labels";
import type { Project } from "~/features/projects/schemas/project";

export type ProjectTimelineCardVariant = "summary" | "detail";

export interface ProjectTimelineCardProps {
  project: Project;
  variant: ProjectTimelineCardVariant;
}

const PROJECT_STATUS_TONES: Record<Project["status"], BadgeTone> = {
  in_progress: "primary",
  completed: "primary",
  maintenance: "secondary",
  prototype: "muted",
};

/** Cartão de projeto da linha do tempo em versão resumida ou detalhada. */
export function ProjectTimelineCard({
  project,
  variant,
}: ProjectTimelineCardProps) {
  const techHeadingId = useId();
  const isDetail = variant === "detail";

  return (
    <article className="min-w-0 overflow-hidden rounded-[0.625rem] border-[0.5px] border-line bg-surface p-6">
      <h3 className="text-ui-sm font-medium tracking-[-0.01em] text-foreground">
        {project.title}
      </h3>
      <div className="mt-2 flex flex-wrap gap-1.5">
        <Badge label={PROJECT_CONTEXT_LABELS[project.context]} tone="muted" />
        {isDetail && (
          <Badge
            label={PROJECT_STATUS_LABELS[project.status]}
            tone={PROJECT_STATUS_TONES[project.status]}
          />
        )}
      </div>
      <p className="mt-4 text-pretty break-words text-ui-sm leading-[1.55] text-muted-foreground">
        {project.summary}
      </p>
      {isDetail && (
        <ul className="mt-3 space-y-1.5 text-caption leading-[1.6] text-muted-foreground">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span aria-hidden="true" className="shrink-0 text-primary">
                ●
              </span>
              <span className="min-w-0 flex-1 text-pretty break-words">
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      )}
      {project.gallery && (
        <ProjectGallery
          projectTitle={project.title}
          images={project.gallery}
        />
      )}
      {project.technologies.length > 0 && (
        <div className="mt-5">
          <p
            id={techHeadingId}
            className="mb-1.5 text-caption text-muted-foreground/70"
          >
            Tecnologias utilizadas
          </p>
          <TechnologyPillList
            items={project.technologies}
            aria-labelledby={techHeadingId}
          />
        </div>
      )}
      {isDetail && (project.links?.repositoryUrl ?? project.links?.demoUrl) && (
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium">
          {project.links.repositoryUrl && (
            <a
              href={project.links.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Repositório
            </a>
          )}
          {project.links.demoUrl && (
            <a
              href={project.links.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Demonstração
            </a>
          )}
        </div>
      )}
    </article>
  );
}
