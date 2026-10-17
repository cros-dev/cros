import { z } from "zod";
import { YEAR_MONTH_REGEX } from "~/lib/date";

const yearMonthSchema = z.string().regex(YEAR_MONTH_REGEX);

/** Schema de validação de um projeto do portfólio. */
export const projectSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  status: z.enum(["in_progress", "completed"]),
  startDate: yearMonthSchema.nullable(),
  endDate: yearMonthSchema.nullable(),
  technologies: z.array(z.string().min(1)),
});

/** Schema de validação da lista de projetos do portfólio. */
export const projectsSchema = z.array(projectSchema);

export type Project = z.infer<typeof projectSchema>;
