interface SiteFooterProps {
  email: string;
  linkedinUrl: string;
  githubUrl: string;
}

/** Rodapé global com links de contato direto e perfis profissionais. */
export function SiteFooter({ email, linkedinUrl, githubUrl }: SiteFooterProps) {
  return (
    <footer className="border-t-[0.5px] border-border bg-background print:bg-transparent">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-6 text-sm text-muted-foreground">
        <a
          href={`mailto:${email}`}
          className="text-primary hover:underline focus-visible:underline"
        >
          {email}
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:underline focus-visible:underline"
        >
          LinkedIn
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:underline focus-visible:underline"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
