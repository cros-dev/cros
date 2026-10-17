import { ResumeSectionHeading } from "~/features/resume/components/resume-section-heading";

export interface ResumeSummaryProps {
  paragraphs: readonly string[];
}

/** Seção de resumo profissional do currículo com parágrafos editoriais. */
export function ResumeSummary({ paragraphs }: ResumeSummaryProps) {
  return (
    <section aria-labelledby="resume-summary-heading">
      <ResumeSectionHeading id="resume-summary-heading">
        Resumo profissional
      </ResumeSectionHeading>
      <div className="w-full space-y-4 text-ui-sm leading-[1.65] text-muted-foreground">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
