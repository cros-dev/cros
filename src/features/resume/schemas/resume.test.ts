import { describe, expect, it } from "vitest";
import { resumeSchema } from "./resume";

const validResume = {
  summaryParagraphs: ["Resumo profissional."],
  education: [
    {
      title: "Graduação em Engenharia de Software",
      institution: "Faculdade FPFtech",
      startDate: "2026-03",
      endDate: "2029-12",
    },
  ],
  languages: [{ label: "Português", level: "nativo" }],
  skillGroups: [{ category: "Linguagens", items: ["TypeScript"] }],
};

describe("resumeSchema", () => {
  it("accepts a valid resume payload", () => {
    expect(resumeSchema.safeParse(validResume).success).toBe(true);
  });

  it("rejects education dates outside YYYY-MM format", () => {
    const invalidDate = {
      ...validResume,
      education: [
        {
          ...validResume.education[0],
          startDate: "03/2026",
        },
      ],
    };
    expect(resumeSchema.safeParse(invalidDate).success).toBe(false);
  });

  it("rejects a skill group with empty items", () => {
    const emptyGroup = {
      ...validResume,
      skillGroups: [{ category: "Linguagens", items: [] }],
    };
    expect(resumeSchema.safeParse(emptyGroup).success).toBe(false);
  });
});
