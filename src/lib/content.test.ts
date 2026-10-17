import { describe, expect, it } from "vitest";
import { z } from "zod";
import { parseContent } from "./content";

const sampleSchema = z.object({
  title: z.string().min(1),
  nested: z.object({
    count: z.number().int().positive(),
  }),
});

describe("parseContent", () => {
  it("returns typed validated data when input matches schema", () => {
    const raw = { title: "cros.dev.br", nested: { count: 3 } };
    const parsed = parseContent(sampleSchema, raw, "sample-content.ts");

    expect(parsed).toEqual({
      title: "cros.dev.br",
      nested: { count: 3 },
    });
  });

  it("throws an Error containing the source and invalid field path when validation fails", () => {
    const invalidRaw = { title: "cros.dev.br", nested: { count: -1 } };

    expect(() =>
      parseContent(sampleSchema, invalidRaw, "sample-content.ts"),
    ).toThrowError(/sample-content\.ts.*nested\.count/);
  });
});
