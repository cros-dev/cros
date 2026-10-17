const PREPOSITION_AROUND_SPACES_REGEX = /\s+(da|de|do|dos|das)\s+/gi;

/** Substitui os espaços ao redor de preposições de nomes em português por espaços inseparáveis. */
export function formatPortugueseName(name: string): string {
  return name.replace(PREPOSITION_AROUND_SPACES_REGEX, "\u00A0$1\u00A0");
}
