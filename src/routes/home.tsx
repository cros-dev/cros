import { Link } from "react-router";
import { ExperienceTimelineSection } from "~/features/experience/components/experience-timeline";
import { experiences } from "~/features/experience/content/experiences";
import { HeroSection } from "~/features/profile/components/hero-section";
import { profile } from "~/features/profile/content/profile";
import { ProjectTimelineSection } from "~/features/projects/components/project-timeline";
import { projects } from "~/features/projects/content/projects";
import type { Route } from "./+types/home";

const featuredProjects = projects.filter((project) => project.featured);

/** Metadados da página inicial do portfólio. */
export function meta(_args: Route.MetaArgs) {
  return [
    { title: `${profile.fullName} | ${profile.headline}` },
    { name: "description", content: profile.summary },
  ];
}

/** Página inicial do portfólio com abertura principal e linhas do tempo de projetos e experiências. */
export default function Home() {
  return (
    <>
      <HeroSection profile={profile} />
      <ProjectTimelineSection
        projects={featuredProjects}
        variant="summary"
        title="Projetos em destaque"
        heading="h2"
        action={
          <Link
            to="/projetos"
            className="text-ui-sm text-primary transition-colors hover:text-primary/80"
          >
            Ver todos os projetos
          </Link>
        }
      />
      <ExperienceTimelineSection experiences={experiences} />
    </>
  );
}
