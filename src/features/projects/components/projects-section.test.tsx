import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { projects } from "~/features/projects/content/projects";
import { formatPeriod } from "~/lib/date";
import { ProjectsSection } from "./projects-section";

describe("ProjectsSection", () => {
  it("renders 4 project articles, context and status badges, and periods only for dated projects", () => {
    render(<ProjectsSection projects={projects} />);

    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(4);

    expect(screen.getAllByText("Projeto pessoal")).toHaveLength(1);
    expect(screen.getAllByText("Projeto corporativo")).toHaveLength(3);
    expect(screen.getByText("Em manutenção")).toBeInTheDocument();

    const expectedPeriod = formatPeriod("2026-07", null);
    expect(screen.getAllByText(expectedPeriod)).toHaveLength(2);
  });
});
