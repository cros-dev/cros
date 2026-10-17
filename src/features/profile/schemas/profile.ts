import { z } from "zod";

/** Schema de validação dos dados de perfil e contato do portfólio. */
export const profileSchema = z.object({
  fullName: z.string().min(1),
  headline: z.string().min(1),
  summary: z.string().min(1),
  email: z.email(),
  linkedinUrl: z.url(),
  githubUrl: z.url(),
});

export type Profile = z.infer<typeof profileSchema>;
