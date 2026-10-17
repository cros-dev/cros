import { parseContent } from "~/lib/content";
import { projectsSchema } from "~/features/projects/schemas/project";

/** Lista validada de projetos do portfólio. */
export const projects = parseContent(
  projectsSchema,
  [
    {
      slug: "gram-hub",
      title: "GRAM Hub",
      description:
        "Projeto base para apresentação de ferramentas e projetos dos setores.",
      status: "in_progress",
      startDate: "2026-08",
      endDate: null,
      technologies: [],
    },
  ],
  "features/projects/content/projects.ts",
);
