import { Link, useLocation } from "react-router";
import { Container } from "~/components/layout/container";
import { ThemeToggle } from "~/components/ui/theme-toggle";
import { useActiveSection } from "~/lib/use-active-section";

const HOME_SECTION_IDS = ["projetos", "experiencia"] as const;

const NAV_LINK_BASE_CLASSES =
  "text-caption sm:text-sm transition-colors hover:text-primary";

function getSectionLinkClasses(isActive: boolean): string {
  const colorClass = isActive ? "text-primary" : "text-muted-foreground";
  return `hidden sm:inline ${NAV_LINK_BASE_CLASSES} ${colorClass}`;
}

/** Cabeçalho global fixo no topo com navegação principal e alternância de tema. */
export function SiteHeader() {
  const location = useLocation();
  const activeSection = useActiveSection(HOME_SECTION_IDS);
  const isHome = location.pathname === "/";
  const isProjectsActive = isHome && activeSection === "projetos";
  const isExperienceActive = isHome && activeSection === "experiencia";

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
                aria-current={isProjectsActive ? "true" : undefined}
                className={getSectionLinkClasses(isProjectsActive)}
              >
                Projetos
              </a>
              <a
                href="/#experiencia"
                aria-current={isExperienceActive ? "true" : undefined}
                className={getSectionLinkClasses(isExperienceActive)}
              >
                Experiência
              </a>
              <Link
                to="/curriculo"
                className={`${NAV_LINK_BASE_CLASSES} text-muted-foreground`}
              >
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
