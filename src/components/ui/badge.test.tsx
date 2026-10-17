import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "./badge";

describe("Badge", () => {
  it("applies bg-warn-bg when tone is warn", () => {
    render(<Badge label="Atenção" tone="warn" />);

    const badge = screen.getByText("Atenção");
    expect(badge).toHaveClass("bg-warn-bg");
  });
});
