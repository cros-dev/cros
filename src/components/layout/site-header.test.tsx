import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "./site-header";

describe("SiteHeader", () => {
  it("renders navigation links and theme toggle button", () => {
    const Stub = createRoutesStub([
      {
        path: "/",
        Component: SiteHeader,
      },
    ]);

    render(<Stub initialEntries={["/"]} />);

    const projectsLink = screen.getByRole("link", { name: "Projetos" });
    const experienceLink = screen.getByRole("link", { name: "Experiência" });
    const resumeLink = screen.getByRole("link", { name: "Currículo" });

    expect(projectsLink).toHaveAttribute("href", "/#projetos");
    expect(projectsLink).toHaveClass("hidden", "sm:inline");
    expect(experienceLink).toHaveAttribute("href", "/#experiencia");
    expect(experienceLink).toHaveClass("hidden", "sm:inline");
    expect(resumeLink).toHaveAttribute("href", "/curriculo");
    expect(resumeLink).not.toHaveClass("hidden");
    expect(
      screen.getByRole("button", { name: "Alternar tema" }),
    ).toBeInTheDocument();
  });
});
