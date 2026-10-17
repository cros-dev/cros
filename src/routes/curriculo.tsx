import { Link } from "react-router";
import { buttonVariants } from "~/components/ui/button";
import { ExperienceDocumentList } from "~/features/experience/components/experience-document-list";
import { experiences } from "~/features/experience/content/experiences";
import { profile } from "~/features/profile/content/profile";
import { EducationList } from "~/features/resume/components/education-list";
import { LanguageList } from "~/features/resume/components/language-list";
import { ResumeHeader } from "~/features/resume/components/resume-header";
import { ResumeSummary } from "~/features/resume/components/resume-summary";
import { SkillGroups } from "~/features/resume/components/skill-groups";
import { resume } from "~/features/resume/content/resume";
import type { Route } from "./+types/curriculo";

/** Metadados da rota de currículo imprimível. */
export function meta(_args: Route.MetaArgs) {
  return [{ title: `Currículo | ${profile.fullName}` }];
}

/** Página de currículo completo em formato documental otimizado para leitura e impressão. */
export default function Curriculo() {
  return (
    <article
      aria-labelledby="resume-page-title"
      className="resume-print-shell py-20 pb-32 print:mx-auto print:w-full print:max-w-[var(--resume-print-max-width)] print:px-0 print:py-0 print:pb-0"
    >
      <span id="resume-page-title" className="sr-only">
        Currículo de {profile.fullName}
      </span>
      <ResumeHeader
        fullName={profile.fullName}
        email={profile.email}
        linkedinUrl={profile.linkedinUrl}
        githubUrl={profile.githubUrl}
      />
      <div className="flex flex-col gap-10 text-justify print:gap-8 [&>section:not(:last-child)]:border-b [&>section:not(:last-child)]:border-line [&>section:not(:last-child)]:pb-10 [&>section:not(:last-child)]:print:pb-8">
        <ResumeSummary paragraphs={resume.summaryParagraphs} />
        <ExperienceDocumentList experiences={experiences} />
        <EducationList items={resume.education} />
        <LanguageList items={resume.languages} />
        <SkillGroups groups={resume.skillGroups} />
      </div>
      <div className="mt-16 print:hidden">
        <Link to="/" className={buttonVariants({ variant: "cta" })}>
          Voltar para a home
        </Link>
      </div>
    </article>
  );
}
