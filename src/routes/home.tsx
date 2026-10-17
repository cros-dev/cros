import { ExperienceSection } from "~/features/experience/components/experience-section";
import { experiences } from "~/features/experience/content/experiences";
import { AboutSection } from "~/features/profile/components/about-section";
import { profile } from "~/features/profile/content/profile";
import { ProjectsSection } from "~/features/projects/components/projects-section";
import { projects } from "~/features/projects/content/projects";
import type { Route } from "./+types/home";

/** Metadados da página inicial do portfólio. */
export function meta(_args: Route.MetaArgs) {
  return [
    { title: `${profile.fullName} | ${profile.headline}` },
    { name: "description", content: profile.summary },
  ];
}

/** Página inicial do portfólio com resumo das seções Sobre, Experiência e Projetos. */
export default function Home() {
  return (
    <div className="space-y-12">
      <AboutSection profile={profile} />
      <ExperienceSection experiences={experiences} highlightLimit={3} />
      <ProjectsSection projects={projects} />
    </div>
  );
}
