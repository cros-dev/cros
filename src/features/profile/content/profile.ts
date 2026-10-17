import { parseContent } from "~/lib/content";
import { profileSchema } from "~/features/profile/schemas/profile";

/** Conteúdo estático validado do perfil profissional. */
export const profile = parseContent(
  profileSchema,
  {
    fullName: "Caio Riquelmy Oliveira da Silva",
    headline: "Software Engineer",
    summary:
      "Desenvolvo sistemas corporativos, integrações entre plataformas e infraestrutura de deploy — do modelo de dados ao pipeline em produção.",
    email: "crosnegocios@hotmail.com",
    linkedinUrl: "https://www.linkedin.com/in/caio-riquelmy-a295ba19b/",
    githubUrl: "https://github.com/cros-dev",
  },
  "features/profile/content/profile.ts",
);
