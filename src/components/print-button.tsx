/** Botão de ação que aciona a impressão ou exportação em PDF pelo navegador. */
export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-lg border-[0.5px] border-border bg-secondary px-3 py-1.5 text-sm font-medium text-primary hover:bg-accent focus-visible:outline-2 focus-visible:outline-primary print:hidden print:bg-transparent"
    >
      Baixar PDF
    </button>
  );
}
