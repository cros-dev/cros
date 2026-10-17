import type { z } from "zod";

/** Valida um conteúdo estático contra um schema Zod ou lança erro detalhado com a origem. */
export function parseContent<T>(
  schema: z.ZodType<T>,
  data: unknown,
  source: string,
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const details = result.error.issues
      .map((issue) => `${issue.path.join(".") || "<root>"}: ${issue.message}`)
      .join("; ");
    throw new Error(`Invalid content in ${source}: ${details}`);
  }
  return result.data;
}
