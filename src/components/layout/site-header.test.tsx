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

    expect(
      screen.getByRole("link", { name: "Projetos" }),
    ).toHaveAttribute("href", "/#projetos");
    expect(
      screen.getByRole("link", { name: "Experiência" }),
    ).toHaveAttribute("href", "/#experiencia");
    expect(
      screen.getByRole("link", { name: "Currículo" }),
    ).toHaveAttribute("href", "/curriculo");
    expect(
      screen.getByRole("button", { name: "Alternar tema" }),
    ).toBeInTheDocument();
  });
});
