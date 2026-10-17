const monthFormatter = new Intl.DateTimeFormat("pt-BR", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/** Expressão regular para validação de datas no formato AAAA-MM. */
export const YEAR_MONTH_REGEX = /^\d{4}-(0[1-9]|1[0-2])$/;

/** Formata uma referência AAAA-MM para mês abreviado e ano em português. */
export function formatMonth(yearMonth: string): string {
  const date = new Date(`${yearMonth}-01T00:00:00Z`);
  return monthFormatter.format(date);
}

/** Formata um intervalo de meses AAAA-MM ou indica continuidade quando sem fim. */
export function formatPeriod(startDate: string, endDate: string | null): string {
  const start = formatMonth(startDate);
  const end = endDate === null ? "atual" : formatMonth(endDate);
  return `${start} – ${end}`;
}
