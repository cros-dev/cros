import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import { describe, expect, it } from "vitest";
import Home from "./home";

describe("Home route", () => {
  it("renders the heading and construction message", () => {
    const Stub = createRoutesStub([
      {
        path: "/",
        Component: Home,
      },
    ]);

    render(<Stub initialEntries={["/"]} />);

    expect(
      screen.getByRole("heading", { level: 1, name: "cros.dev.br" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Em construção.")).toBeInTheDocument();
  });
});
