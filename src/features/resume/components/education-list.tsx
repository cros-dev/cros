import { ResumeSectionHeading } from "~/features/resume/components/resume-section-heading";
import type { ResumeEducation } from "~/features/resume/schemas/resume";
import { formatShortPeriod } from "~/lib/date";

export interface EducationListProps {
  items: readonly ResumeEducation[];
}

/** Seção de formação acadêmica com curso, instituição e período. */
export function EducationList({ items }: EducationListProps) {
  return (
    <section aria-labelledby="resume-education-heading">
      <ResumeSectionHeading id="resume-education-heading">
        Formação acadêmica
      </ResumeSectionHeading>
      <div className="space-y-6">
        {items.map((item) => (
          <div key={`${item.title}-${item.startDate}`}>
            <h3 className="text-ui-sm font-medium tracking-[-0.01em] text-foreground">
              {item.title}
            </h3>
            <p className="mt-1 text-caption text-muted-foreground">
              {item.institution} ·{" "}
              {formatShortPeriod(item.startDate, item.endDate)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
