import { describe, expect, it } from "vitest";
import { projects } from "./projects";

const IPV4_REGEX = /\b\d{1,3}(\.\d{1,3}){3}\b/;
const INTERNAL_DOMAIN_REGEX = /\b[\w.-]+\.(com\.br|local)\b/i;
const URL_REGEX = /\bhttps?:\/\/\S+/i;

const collectProjectTexts = () =>
  projects.flatMap((project) => [
    project.slug,
    project.title,
    project.summary,
    ...project.highlights,
    ...project.technologies,
    ...(project.gallery?.map((image) => image.alt) ?? []),
  ]);

describe("projects content compliance", () => {
  it("contains no IPv4 addresses in project text fields", () => {
    for (const text of collectProjectTexts()) {
      expect(text).not.toMatch(IPV4_REGEX);
    }
  });

  it("contains no .com.br or .local domains in project text fields", () => {
    for (const text of collectProjectTexts()) {
      expect(text).not.toMatch(INTERNAL_DOMAIN_REGEX);
    }
  });

  it("contains no URLs outside the links field", () => {
    for (const text of collectProjectTexts()) {
      expect(text).not.toMatch(URL_REGEX);
    }
  });

  it("defines gallery only for zona-azul and cros-dev-br and never for corporate projects", () => {
    const slugsWithGallery = projects
      .filter((project) => project.gallery !== undefined)
      .map((project) => project.slug);

    expect(slugsWithGallery).toEqual(["zona-azul", "cros-dev-br"]);

    for (const project of projects) {
      if (project.context === "corporate") {
        expect(project.gallery).toBeUndefined();
      }
    }
  });

  it("contains no Manaus or AGEMAM references in gallery alt texts", () => {
    const altTexts = projects.flatMap(
      (project) => project.gallery?.map((image) => image.alt) ?? [],
    );

    expect(altTexts.length).toBeGreaterThan(0);
    for (const alt of altTexts) {
      expect(alt).not.toMatch(/manaus|agemam/i);
    }
  });
});
