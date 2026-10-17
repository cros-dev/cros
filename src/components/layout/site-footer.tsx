import { Container } from "~/components/layout/container";

export interface SiteFooterProps {
  ownerName: string;
  year: number;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
}

const FOOTER_LINK_CLASSES = "transition-colors hover:text-primary";

/** Rodapé global com identificação de autoria e links de contato e perfis profissionais. */
export function SiteFooter({
  ownerName,
  year,
  email,
  linkedinUrl,
  githubUrl,
}: SiteFooterProps) {
  return (
    <footer
      id="contato"
      className="scroll-mt-[var(--site-section-scroll-margin)]"
    >
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border py-8 pb-14 text-caption text-muted-foreground">
          <p>
            © {year} {ownerName}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a href={`mailto:${email}`} className={FOOTER_LINK_CLASSES}>
              {email}
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className={FOOTER_LINK_CLASSES}
            >
              LinkedIn
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className={FOOTER_LINK_CLASSES}
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
