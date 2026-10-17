import { PrintButton } from "~/components/print-button";
import { formatPortugueseName } from "~/lib/format-portuguese-name";

export interface ResumeHeaderProps {
  fullName: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
}

const CONTACT_LINK_CLASSES = "transition-colors hover:text-primary";

/** Cabeçalho documental do currículo com nome completo, contatos e ação de impressão. */
export function ResumeHeader({
  fullName,
  email,
  linkedinUrl,
  githubUrl,
}: ResumeHeaderProps) {
  return (
    <header className="relative mb-16 print:mb-6">
      <div className="mb-4 flex justify-end print:hidden sm:absolute sm:top-0 sm:right-0 sm:mb-0">
        <PrintButton />
      </div>
      <div className="text-center">
        <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-medium tracking-[-0.03em] text-foreground">
          {formatPortugueseName(fullName)}
        </h1>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-caption text-muted-foreground">
          <li>
            <a href={`mailto:${email}`} className={CONTACT_LINK_CLASSES}>
              {email}
            </a>
          </li>
          <li aria-hidden="true" className="text-line">
            |
          </li>
          <li>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className={CONTACT_LINK_CLASSES}
            >
              LinkedIn
            </a>
          </li>
          <li aria-hidden="true" className="text-line">
            |
          </li>
          <li>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className={CONTACT_LINK_CLASSES}
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
