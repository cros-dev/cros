import { Link } from "react-router";

interface SiteHeaderProps {
  fullName: string;
}

/** Cabeçalho global com identificação e links de navegação do portfólio. */
export function SiteHeader({ fullName }: SiteHeaderProps) {
  return (
    <header className="border-b-[0.5px] border-border bg-background print:hidden print:bg-transparent">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          to="/"
          className="text-sm font-semibold tracking-tight text-foreground hover:text-primary focus-visible:text-primary"
        >
          {fullName}
        </Link>
        <nav
          aria-label="Navegação principal"
          className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground print:hidden"
        >
          <a
            href="/#sobre"
            className="hover:text-primary focus-visible:text-primary"
          >
            Sobre
          </a>
          <a
            href="/#experiencia"
            className="hover:text-primary focus-visible:text-primary"
          >
            Experiência
          </a>
          <a
            href="/#projetos"
            className="hover:text-primary focus-visible:text-primary"
          >
            Projetos
          </a>
          <Link
            to="/curriculo"
            className="font-medium text-primary hover:underline focus-visible:underline"
          >
            Currículo
          </Link>
        </nav>
      </div>
    </header>
  );
}
