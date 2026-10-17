import { DOCUMENT_HEADING_CLASSES } from "~/components/ui/section-heading";

export interface ResumeSectionHeadingProps {
  id: string;
  children: string;
}

/** Título padronizado de seção do documento de currículo. */
export function ResumeSectionHeading({
  id,
  children,
}: ResumeSectionHeadingProps) {
  return (
    <h2 id={id} className={DOCUMENT_HEADING_CLASSES}>
      {children}
    </h2>
  );
}
