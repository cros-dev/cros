import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import { describe, expect, it, vi } from "vitest";
import Curriculo from "./curriculo";

describe("Curriculo route", () => {
  it("renders all 32 highlights and triggers window.print when clicking Baixar PDF", () => {
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

    const experienciaSection = container.querySelector("#experiencia");
    expect(experienciaSection).toBeInTheDocument();

    const allHighlights = within(
      experienciaSection as HTMLElement,
    ).getAllByRole("listitem");
    expect(allHighlights).toHaveLength(32);

    const printButton = screen.getByRole("button", { name: "Baixar PDF" });
    fireEvent.click(printButton);

    expect(printSpy).toHaveBeenCalledTimes(1);
    printSpy.mockRestore();
  });
});
