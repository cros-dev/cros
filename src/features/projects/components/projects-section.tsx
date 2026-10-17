import { Badge } from "~/components/ui/badge";
import { TechnologyPillList } from "~/components/ui/technology-pill";
import {
  PROJECT_CONTEXT_LABELS,
  PROJECT_STATUS_LABELS,
} from "~/features/projects/components/project-labels";
import type { Project } from "~/features/projects/schemas/project";
import { formatPeriod } from "~/lib/date";

interface ProjectsSectionProps {
  projects: Project[];
}

/** Seção de projetos com contexto, status, período, resumo, destaques, tecnologias e links. */
export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-heading"
      className="space-y-6"
    >
      <h2
        id="projetos-heading"
        className="text-xl font-semibold tracking-tight text-foreground"
      >
        Projetos
      </h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="rounded-lg border-[0.5px] border-border bg-card p-5 text-card-foreground print:bg-transparent"
          >
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-base font-semibold text-foreground">
                {project.title}
              </h3>
              {project.startDate !== null && (
                <p className="text-xs text-muted-foreground">
                  {formatPeriod(project.startDate, project.endDate)}
                </p>
              )}
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              <Badge
                label={PROJECT_CONTEXT_LABELS[project.context]}
                tone="muted"
              />
              <Badge
                label={PROJECT_STATUS_LABELS[project.status]}
                tone={project.status === "maintenance" ? "secondary" : "primary"}
              />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              {project.summary}
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="mt-4">
              <TechnologyPillList items={project.technologies} />
            </div>
            {(project.links?.repositoryUrl ?? project.links?.demoUrl) && (
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
        ))}
      </div>
    </section>
  );
}
