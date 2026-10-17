import { z } from "zod";
import { YEAR_MONTH_REGEX } from "~/lib/date";

const yearMonthSchema = z.string().regex(YEAR_MONTH_REGEX);

export const resumeEducationSchema = z.object({
  title: z.string().min(1),
  institution: z.string().min(1),
  startDate: yearMonthSchema,
  endDate: yearMonthSchema.nullable(),
});

export const resumeLanguageSchema = z.object({
  label: z.string().min(1),
  level: z.string().min(1),
});

export const resumeSkillGroupSchema = z.object({
  category: z.string().min(1),
  items: z.array(z.string().min(1)).min(1),
});

/** Schema de validação das seções complementares do documento de currículo. */
export const resumeSchema = z.object({
  summaryParagraphs: z.array(z.string().min(1)).min(1),
  education: z.array(resumeEducationSchema).min(1),
  languages: z.array(resumeLanguageSchema).min(1),
  skillGroups: z.array(resumeSkillGroupSchema).min(1),
});

export type ResumeEducation = z.infer<typeof resumeEducationSchema>;
export type ResumeLanguage = z.infer<typeof resumeLanguageSchema>;
export type ResumeSkillGroup = z.infer<typeof resumeSkillGroupSchema>;
export type Resume = z.infer<typeof resumeSchema>;
