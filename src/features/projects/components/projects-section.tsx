import type { Project } from "~/features/projects/schemas/project";
import { formatPeriod } from "~/lib/date";

interface ProjectsSectionProps {
  projects: Project[];
}

/** Seção de projetos com título, descrição, período e tecnologias. */
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
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            {project.technologies.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
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
        ))}
      </div>
    </section>
  );
}
