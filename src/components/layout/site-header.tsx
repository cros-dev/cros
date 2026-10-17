import { Link } from "react-router";
import { Container } from "~/components/layout/container";
import { ThemeToggle } from "~/components/ui/theme-toggle";

const NAV_LINK_CLASSES =
  "text-caption sm:text-sm text-muted-foreground transition-colors hover:text-primary";

/** Cabeçalho global fixo no topo com navegação principal e alternância de tema. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-background/82 backdrop-blur-md print:hidden">
      <Container>
        <div className="flex h-[var(--site-header-height)] items-center justify-between gap-4 sm:gap-8">
          <Link
            to="/"
            className="shrink-0 text-ui-sm font-medium tracking-[-0.01em] text-foreground transition-colors hover:text-primary"
          >
            cros.dev.br
          </Link>
          <div className="flex shrink-0 items-center gap-3 sm:gap-7">
            <nav
              aria-label="Principal"
              className="flex items-center gap-3 sm:gap-7"
            >
              <a
                href="/#projetos"
                className={`hidden sm:inline ${NAV_LINK_CLASSES}`}
              >
                Projetos
              </a>
              <a
                href="/#experiencia"
                className={`hidden sm:inline ${NAV_LINK_CLASSES}`}
              >
                Experiência
              </a>
              <Link to="/curriculo" className={NAV_LINK_CLASSES}>
                Currículo
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
