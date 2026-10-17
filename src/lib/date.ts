const SHORT_MONTHS = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
] as const;

const FULL_MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
] as const;

/** Expressão regular para validação de datas no formato AAAA-MM. */
export const YEAR_MONTH_REGEX = /^\d{4}-(0[1-9]|1[0-2])$/;

function parseYearMonth(yearMonth: string): { year: string; monthIndex: number } {
  const [year = "", month = "1"] = yearMonth.split("-");
  return {
    year,
    monthIndex: Number(month) - 1,
  };
}

function formatShortMonth(yearMonth: string): string {
  const { year, monthIndex } = parseYearMonth(yearMonth);
  const label = SHORT_MONTHS[monthIndex] ?? SHORT_MONTHS[0];
  return `${label}/${year}`;
}

/** Formata um período AAAA-MM com meses abreviados ou "atual" quando em aberto. */
export function formatShortPeriod(
  startDate: string,
  endDate: string | null,
): string {
  const start = formatShortMonth(startDate);
  const end = endDate === null ? "atual" : formatShortMonth(endDate);
  return `${start} — ${end}`;
}

/** Formata um período AAAA-MM para a etiqueta da linha do tempo com "Atual" maiúsculo. */
export function formatTimelinePeriod(
  startDate: string,
  endDate: string | null,
): string {
  const start = formatShortMonth(startDate);
  const end = endDate === null ? "Atual" : formatShortMonth(endDate);
  return `${start} — ${end}`;
}

/** Formata uma referência AAAA-MM com mês por extenso e ano ou retorna "Sem data". */
export function formatTimelineMonth(startDate: string | null): string {
  if (startDate === null) {
    return "Sem data";
  }
  const { year, monthIndex } = parseYearMonth(startDate);
  const label = FULL_MONTHS[monthIndex] ?? FULL_MONTHS[0];
  return `${label}, ${year}`;
}
