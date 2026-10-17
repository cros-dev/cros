import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import { describe, expect, it, vi } from "vitest";
import { projects } from "~/features/projects/content/projects";
import Curriculo from "./curriculo";

describe("Curriculo route", () => {
  it("renders document sections, 6 summary paragraphs, 27 highlights, 2 educations, 3 languages, 6 skill groups, print action, and no project cards", () => {
    const printSpy = vi
      .spyOn(window, "print")
      .mockImplementation(() => undefined);

    const Stub = createRoutesStub([
      {
        path: "/curriculo",
        Component: Curriculo,
      },
    ]);

    const { container } = render(<Stub initialEntries={["/curriculo"]} />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Resumo profissional" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Experiência profissional",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Formação acadêmica" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Idiomas" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Competências técnicas" }),
    ).toBeInTheDocument();

    const summarySection = screen
      .getByRole("heading", { level: 2, name: "Resumo profissional" })
      .closest("section");
    expect((summarySection as HTMLElement).querySelectorAll("p")).toHaveLength(
      6,
    );

    const experienciaSection = container.querySelector("#experiencia");
    expect(experienciaSection).toBeInTheDocument();

    const allHighlights = within(
      experienciaSection as HTMLElement,
    ).getAllByRole("listitem");
    expect(allHighlights).toHaveLength(27);

    const educationSection = screen
      .getByRole("heading", { level: 2, name: "Formação acadêmica" })
      .closest("section");
    expect(
      within(educationSection as HTMLElement).getAllByRole("heading", {
        level: 3,
      }),
    ).toHaveLength(2);

    const languagesSection = screen
      .getByRole("heading", { level: 2, name: "Idiomas" })
      .closest("section");
    expect(
      within(languagesSection as HTMLElement).getAllByRole("listitem"),
    ).toHaveLength(3);

    const skillsSection = screen
      .getByRole("heading", { level: 2, name: "Competências técnicas" })
      .closest("section");
    expect(
      (skillsSection as HTMLElement).querySelectorAll("dt"),
    ).toHaveLength(6);

    expect(screen.queryByText("Baixar PDF")).not.toBeInTheDocument();

    const printButton = screen.getByRole("button", {
      name: "Imprimir currículo",
    });
    fireEvent.click(printButton);
    expect(printSpy).toHaveBeenCalledTimes(1);
    printSpy.mockRestore();

    for (const project of projects) {
      expect(
        screen.queryByRole("heading", { level: 3, name: project.title }),
      ).not.toBeInTheDocument();
    }
  });
});
