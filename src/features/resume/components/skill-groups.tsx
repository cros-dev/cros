import { TechnologyPillList } from "~/components/ui/technology-pill";
import { ResumeSectionHeading } from "~/features/resume/components/resume-section-heading";
import type { ResumeSkillGroup } from "~/features/resume/schemas/resume";

export interface SkillGroupsProps {
  groups: readonly ResumeSkillGroup[];
}

/** Seção de competências técnicas agrupadas por categoria. */
export function SkillGroups({ groups }: SkillGroupsProps) {
  return (
    <section aria-labelledby="resume-skills-heading">
      <ResumeSectionHeading id="resume-skills-heading">
        Competências técnicas
      </ResumeSectionHeading>
      <dl className="space-y-5">
        {groups.map((group) => (
          <div key={group.category}>
            <dt className="text-caption font-medium text-foreground">
              {group.category}
            </dt>
            <dd className="mt-1.5">
              <TechnologyPillList items={group.items} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
