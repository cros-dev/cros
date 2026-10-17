import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { THEME_STORAGE_KEY, type Theme } from "~/lib/theme";

function persistTheme(theme: Theme): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /** Armazenamento indisponível no modo privado. */
  }
}

/** Botão de alternância entre tema claro e escuro com persistência local. */
export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const syncDarkClass = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    syncDarkClass();
  }, []);

  function handleToggle() {
    const currentlyDark = document.documentElement.classList.contains("dark");
    const nextTheme: Theme = currentlyDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    persistTheme(nextTheme);
    setIsDark(nextTheme === "dark");
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Alternar tema"
      aria-pressed={isDark}
      onClick={handleToggle}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="block size-4 dark:hidden"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hidden size-4 dark:block"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    </Button>
  );
}
