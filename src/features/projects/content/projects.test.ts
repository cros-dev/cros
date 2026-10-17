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
});
