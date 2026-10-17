export type Theme = "light" | "dark";

/** Chave de persistência da preferência de tema no armazenamento local. */
export const THEME_STORAGE_KEY = "theme";

/** Resolve o tema ativo priorizando o valor salvo sobre a preferência do sistema. */
export function resolveTheme(
  stored: string | null,
  prefersDark: boolean,
): Theme {
  if (stored === "dark" || stored === "light") {
    return stored;
  }
  return prefersDark ? "dark" : "light";
}

/** Script inline executado no head para aplicar a classe de tema antes da primeira pintura. */
export const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");var d=window.matchMedia("(prefers-color-scheme: dark)").matches;var t=(s==="dark"||s==="light")?s:(d?"dark":"light");document.documentElement.classList.toggle("dark",t==="dark");}catch(e){}})();`;
