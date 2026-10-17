import { describe, expect, it } from "vitest";
import { experienceSchema } from "./experience";

const validExperience = {
  id: "empresa-cargo",
  company: "Empresa Exemplo",
  role: "Engenheiro de Software",
  startDate: "2026-01",
  endDate: null,
  summary: "Resumo da experiência.",
  technologies: ["TypeScript"],
  highlights: ["Destaque principal da atuação."],
};

describe("experienceSchema", () => {
  it("accepts a valid experience record", () => {
    expect(experienceSchema.safeParse(validExperience).success).toBe(true);
  });

  it("rejects startDate outside YYYY-MM format", () => {
    const invalidDate = { ...validExperience, startDate: "01/2026" };
    expect(experienceSchema.safeParse(invalidDate).success).toBe(false);
  });

  it("rejects empty highlights array", () => {
    const emptyHighlights = { ...validExperience, highlights: [] };
    expect(experienceSchema.safeParse(emptyHighlights).success).toBe(false);
  });
});
