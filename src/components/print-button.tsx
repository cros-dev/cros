import { buttonVariants } from "~/components/ui/button";

/** Botão de ação que aciona a impressão ou exportação em PDF pelo navegador. */
export function PrintButton() {
  return (
    <button
      type="button"
      aria-label="Imprimir currículo"
      title="Imprimir currículo"
      onClick={() => window.print()}
      className={buttonVariants({
        variant: "ghost",
        size: "icon-sm",
        className: "print:hidden",
      })}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4"
      >
        <path d="M6 9V2h12v7" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" />
      </svg>
    </button>
  );
}
