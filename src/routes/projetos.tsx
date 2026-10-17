import { Link } from "react-router";
import { buttonVariants } from "~/components/ui/button";
import { profile } from "~/features/profile/content/profile";
import { ProjectTimelineSection } from "~/features/projects/components/project-timeline";
import { projects } from "~/features/projects/content/projects";
import type { Route } from "./+types/projetos";

/** Metadados da página completa de projetos do portfólio. */
export function meta(_args: Route.MetaArgs) {
  return [{ title: `Projetos | ${profile.fullName}` }];
}

/** Página de projetos completos em linha do tempo alternada. */
export default function Projetos() {
  return (
    <>
      <ProjectTimelineSection
        projects={projects}
        variant="detail"
        title="Projetos"
        heading="h1"
      />
      <div className="mt-12 flex justify-center">
        <Link to="/" className={buttonVariants({ variant: "cta" })}>
          Voltar para a home
        </Link>
      </div>
    </>
  );
}
