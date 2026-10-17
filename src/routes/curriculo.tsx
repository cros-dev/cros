import { PrintButton } from "~/components/print-button";
import { ExperienceSection } from "~/features/experience/components/experience-section";
import { experiences } from "~/features/experience/content/experiences";
import { AboutSection } from "~/features/profile/components/about-section";
import { profile } from "~/features/profile/content/profile";
import { ProjectsSection } from "~/features/projects/components/projects-section";
import { projects } from "~/features/projects/content/projects";
import type { Route } from "./+types/curriculo";

/** Metadados da rota de currículo imprimível. */
export function meta(_args: Route.MetaArgs) {
  return [{ title: `Currículo | ${profile.fullName}` }];
}

/** Página de currículo completo otimizada para leitura e impressão em PDF. */
export default function Curriculo() {
  return (
    <div className="space-y-10">
      <div className="flex justify-end print:hidden">
        <PrintButton />
      </div>
      <AboutSection profile={profile} />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
    </div>
  );
}
