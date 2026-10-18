import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import { describe, expect, it } from "vitest";
import { projects } from "~/features/projects/content/projects";
import Projetos from "./projetos";

describe("Projetos route", () => {
  it("renders h1 Projetos, 5 project cards, maintenance badge, project highlights, and link back to home", () => {
    const Stub = createRoutesStub([
      {
        path: "/projetos",
        Component: Projetos,
      },
    ]);

    const { container } = render(<Stub initialEntries={["/projetos"]} />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Projetos" }),
    ).toBeInTheDocument();

    const projetosSection = container.querySelector("#projetos");
    expect(projetosSection).toBeInTheDocument();

    const projectItems = (projetosSection as HTMLElement).querySelectorAll(
      "[data-timeline-item]",
    );
    expect(projectItems).toHaveLength(5);

    expect(screen.getAllByText("Em manutenção").length).toBeGreaterThan(0);

    for (const project of projects) {
      for (const highlight of project.highlights) {
        expect(screen.getAllByText(highlight).length).toBeGreaterThan(0);
      }
    }

    const backLink = screen.getByRole("link", { name: "Voltar para a home" });
    expect(backLink).toHaveAttribute("href", "/");
  });
});
