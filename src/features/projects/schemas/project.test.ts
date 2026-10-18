import { describe, expect, it } from "vitest";
import { projectSchema } from "./project";

const baseProject = {
  slug: "projeto-exemplo",
  title: "Projeto Exemplo",
  context: "personal" as const,
  featured: true,
  summary: "Resumo objetivo do projeto.",
  highlights: ["Destaque 1", "Destaque 2"],
  technologies: ["TypeScript", "React"],
  status: "in_progress" as const,
  startDate: "2026-07",
  endDate: null,
};

describe("projectSchema", () => {
  it("rejects project without featured", () => {
    const { featured: _featured, ...withoutFeatured } = baseProject;
    const result = projectSchema.safeParse(withoutFeatured);

    expect(result.success).toBe(false);
  });

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

  it("accepts personal project with gallery of 3 or more items", () => {
    const createImages = (count: number) =>
      Array.from({ length: count }, (_, index) => ({
        src: `/img-${index + 1}.webp`,
        alt: `Descrição da imagem ${index + 1}`,
        width: 1600,
        height: 1000,
      }));

    expect(
      projectSchema.safeParse({
        ...baseProject,
        context: "personal",
        gallery: createImages(3),
      }).success,
    ).toBe(true);

    expect(
      projectSchema.safeParse({
        ...baseProject,
        context: "personal",
        gallery: createImages(6),
      }).success,
    ).toBe(true);
  });

  it("rejects gallery with fewer than 3 items", () => {
    const createImages = (count: number) =>
      Array.from({ length: count }, (_, index) => ({
        src: `/img-${index + 1}.webp`,
        alt: `Descrição da imagem ${index + 1}`,
        width: 1600,
        height: 1000,
      }));

    expect(
      projectSchema.safeParse({
        ...baseProject,
        gallery: createImages(2),
      }).success,
    ).toBe(false);
  });

  it("rejects gallery item with empty alt", () => {
    const result = projectSchema.safeParse({
      ...baseProject,
      gallery: [
        { src: "/1.webp", alt: "Imagem 1", width: 1600, height: 1000 },
        { src: "/2.webp", alt: "", width: 1600, height: 1000 },
        { src: "/3.webp", alt: "Imagem 3", width: 1600, height: 1000 },
      ],
    });

    expect(result.success).toBe(false);
  });

  it("rejects corporate project with gallery", () => {
    const result = projectSchema.safeParse({
      ...baseProject,
      context: "corporate",
      gallery: [
        { src: "/1.webp", alt: "Imagem 1", width: 1600, height: 1000 },
        { src: "/2.webp", alt: "Imagem 2", width: 1600, height: 1000 },
        { src: "/3.webp", alt: "Imagem 3", width: 1600, height: 1000 },
      ],
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            path: ["gallery"],
            message:
              "Projetos corporativos não podem definir galeria de imagens.",
          }),
        ]),
      );
    }
  });
});
