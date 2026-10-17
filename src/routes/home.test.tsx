import "@testing-library/jest-dom/vitest";
import { render, screen, within } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import { describe, expect, it } from "vitest";
import Home from "./home";

describe("Home route", () => {
  it("renders h1 with full name, sections, 6 experiences, and at most 3 highlights per experience (18 total)", () => {
    const Stub = createRoutesStub([
      {
        path: "/",
        Component: Home,
      },
    ]);

    const { container } = render(<Stub initialEntries={["/"]} />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Caio Riquelmy Oliveira da Silva",
      }),
    ).toBeInTheDocument();

    const sobreSection = container.querySelector("#sobre");
    const experienciaSection = container.querySelector("#experiencia");
    const projetosSection = container.querySelector("#projetos");

    expect(sobreSection).toBeInTheDocument();
    expect(experienciaSection).toBeInTheDocument();
    expect(projetosSection).toBeInTheDocument();

    const experienceArticles = within(
      experienciaSection as HTMLElement,
    ).getAllByRole("article");
    expect(experienceArticles).toHaveLength(6);

    for (const article of experienceArticles) {
      const items = within(article).getAllByRole("listitem");
      expect(items.length).toBeLessThanOrEqual(3);
    }

    const allHighlights = within(
      experienciaSection as HTMLElement,
    ).getAllByRole("listitem");
    expect(allHighlights).toHaveLength(18);
  });
});
