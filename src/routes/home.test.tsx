import "@testing-library/jest-dom/vitest";
import { render, screen, within } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import { describe, expect, it } from "vitest";
import { experiences } from "~/features/experience/content/experiences";
import { PROJECT_STATUS_LABELS } from "~/features/projects/components/project-labels";
import { projects } from "~/features/projects/content/projects";
import Home from "./home";

describe("Home route", () => {
  it("renders h1 with full name, 3 featured summary project cards without highlights or status badges, link to /projetos, 6 experience items without highlights, and link to /curriculo", () => {
    const Stub = createRoutesStub([
      {
        path: "/",
        Component: Home,
      },
    ]);

    const { container } = render(<Stub initialEntries={["/"]} />);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: "Caio Riquelmy Oliveira da Silva",
    });
    expect(heading).toBeInTheDocument();

    const sobreSection = container.querySelector("#sobre");
    const projetosSection = container.querySelector("#projetos");
    const experienciaSection = container.querySelector("#experiencia");

    expect(sobreSection).toBeInTheDocument();
    expect(projetosSection).toBeInTheDocument();
    expect(experienciaSection).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 2, name: "Projetos em destaque" }),
    ).toBeInTheDocument();

    const projectsLink = screen.getByRole("link", {
      name: "Ver todos os projetos",
    });
    expect(projectsLink).toHaveAttribute("href", "/projetos");

    const projectItems = (projetosSection as HTMLElement).querySelectorAll(
      "[data-timeline-item]",
    );
    expect(projectItems).toHaveLength(3);
    for (const item of projectItems) {
      expect(
        within(item as HTMLElement).getAllByRole("article").length,
      ).toBeGreaterThan(0);
    }

    expect(
      within(projectItems[0] as HTMLElement).getAllByRole("button", {
        name: "Ampliar imagem 1 de 6",
      }).length,
    ).toBeGreaterThan(0);

    for (const project of projects) {
      for (const highlight of project.highlights) {
        expect(
          within(projetosSection as HTMLElement).queryByText(highlight),
        ).not.toBeInTheDocument();
      }
    }

    for (const statusLabel of Object.values(PROJECT_STATUS_LABELS)) {
      expect(
        within(projetosSection as HTMLElement).queryByText(statusLabel),
      ).not.toBeInTheDocument();
    }

    const experienceArticles = within(
      experienciaSection as HTMLElement,
    ).getAllByRole("article");
    expect(experienceArticles).toHaveLength(6);

    for (const experience of experiences) {
      for (const highlight of experience.highlights) {
        expect(
          within(experienciaSection as HTMLElement).queryByText(highlight),
        ).not.toBeInTheDocument();
      }
    }

    const resumeLink = screen.getByRole("link", {
      name: "Ver currículo completo",
    });
    expect(resumeLink).toHaveAttribute("href", "/curriculo");
  });
});
