import { z } from "zod";
import { YEAR_MONTH_REGEX } from "~/lib/date";

const yearMonthSchema = z.string().regex(YEAR_MONTH_REGEX);

const projectLinksSchema = z.object({
  repositoryUrl: z.url().optional(),
  demoUrl: z.url().optional(),
});

const projectGalleryImageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
});

/** Schema de validação de um projeto do portfólio. */
export const projectSchema = z
  .object({
    slug: z.string().min(1),
    title: z.string().min(1),
    context: z.enum(["personal", "corporate"]),
    featured: z.boolean(),
    summary: z.string().min(1),
    highlights: z.array(z.string().min(1)).min(1).max(5),
    technologies: z.array(z.string().min(1)).min(1),
    status: z.enum(["in_progress", "completed", "maintenance"]),
    startDate: yearMonthSchema.nullable(),
    endDate: yearMonthSchema.nullable(),
    links: projectLinksSchema.optional(),
    gallery: z.array(projectGalleryImageSchema).min(3).optional(),
  })
  .superRefine((project, ctx) => {
    if (project.context === "corporate" && project.links !== undefined) {
      ctx.addIssue({
        code: "custom",
        path: ["links"],
        message: "Projetos corporativos não podem definir links externos.",
      });
    }
    if (project.context === "corporate" && project.gallery !== undefined) {
      ctx.addIssue({
        code: "custom",
        path: ["gallery"],
        message: "Projetos corporativos não podem definir galeria de imagens.",
      });
    }
  });

/** Schema de validação da lista de projetos do portfólio. */
export const projectsSchema = z.array(projectSchema);

export type ProjectGalleryImage = z.infer<typeof projectGalleryImageSchema>;
export type Project = z.infer<typeof projectSchema>;
