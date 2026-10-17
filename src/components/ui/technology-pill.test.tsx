import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TechnologyPillList } from "./technology-pill";

describe("TechnologyPillList", () => {
  it("renders 3 list items when given 3 items", () => {
    render(<TechnologyPillList items={["TypeScript", "React", "Vite"]} />);

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(3);
  });

  it("renders nothing when items list is empty", () => {
    const { container } = render(<TechnologyPillList items={[]} />);

    expect(container.firstChild).toBeNull();
  });
});
