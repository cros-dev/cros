import { z } from "zod";
import { YEAR_MONTH_REGEX } from "~/lib/date";

const yearMonthSchema = z.string().regex(YEAR_MONTH_REGEX);

/** Schema de validação de uma experiência profissional individual. */
export const experienceSchema = z.object({
  id: z.string().min(1),
  company: z.string().min(1),
  role: z.string().min(1),
  startDate: yearMonthSchema,
  endDate: yearMonthSchema.nullable(),
  summary: z.string().min(1),
  technologies: z.array(z.string().min(1)),
  highlights: z.array(z.string().min(1)).min(1),
});

/** Schema de validação da lista de experiências profissionais. */
export const experiencesSchema = z.array(experienceSchema).min(1);

export type Experience = z.infer<typeof experienceSchema>;
