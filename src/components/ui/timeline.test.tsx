import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TimelineContent, TimelineDate } from "./timeline";

describe("Timeline", () => {
  it("applies data-active=\"true\" and bg-foreground when TimelineDate is active", () => {
    render(<TimelineDate label="2025 – Atual" isActive />);

    const pill = screen.getByText("2025 – Atual");
    expect(pill).toHaveAttribute("data-active", "true");
    expect(pill).toHaveClass("bg-foreground");
  });

  it("renders the date label and children inside TimelineContent", () => {
    render(
      <TimelineContent dateLabel="2024 – 2025" align="left">
        <p>Detalhes da experiência</p>
      </TimelineContent>,
    );

    expect(screen.getAllByText("2024 – 2025").length).toBeGreaterThan(0);
    expect(
      screen.getAllByText("Detalhes da experiência").length,
    ).toBeGreaterThan(0);
  });
});
