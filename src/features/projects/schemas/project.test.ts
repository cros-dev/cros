import { describe, expect, it } from "vitest";
import { projectSchema } from "./project";

const baseProject = {
  slug: "projeto-exemplo",
  title: "Projeto Exemplo",
  context: "personal" as const,
  summary: "Resumo objetivo do projeto.",
  highlights: ["Destaque 1", "Destaque 2"],
  technologies: ["TypeScript", "React"],
  status: "in_progress" as const,
  startDate: "2026-07",
  endDate: null,
};

describe("projectSchema", () => {
  it("rejects unknown context", () => {
    const result = projectSchema.safeParse({
      ...baseProject,
      context: "freelance",
    });

    expect(result.success).toBe(false);
  });

  it("rejects unknown status", () => {
    const result = projectSchema.safeParse({
      ...baseProject,
      status: "archived",
    });

    expect(result.success).toBe(false);
  });

  it("rejects more than 3 highlights", () => {
    const result = projectSchema.safeParse({
      ...baseProject,
      highlights: ["Item 1", "Item 2", "Item 3", "Item 4"],
    });

    expect(result.success).toBe(false);
  });

  it("rejects corporate project with links", () => {
    const result = projectSchema.safeParse({
      ...baseProject,
      context: "corporate",
      links: {
        repositoryUrl: "https://example.org/repo",
      },
    });

    expect(result.success).toBe(false);
  });

  it("accepts personal project with links", () => {
    const result = projectSchema.safeParse({
      ...baseProject,
      context: "personal",
      links: {
        repositoryUrl: "https://example.org/repo",
        demoUrl: "https://example.org/demo",
      },
    });

    expect(result.success).toBe(true);
  });
});
