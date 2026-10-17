import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button, buttonVariants } from "./button";

describe("Button", () => {
  it("buttonVariants includes classes for cta and outline variants", () => {
    const ctaClasses = buttonVariants({ variant: "cta" });
    const outlineClasses = buttonVariants({ variant: "outline" });

    expect(ctaClasses).toContain("bg-cta");
    expect(ctaClasses).toContain("text-cta-foreground");
    expect(outlineClasses).toContain("border-primary/40");
    expect(outlineClasses).toContain("text-primary");
  });

  it("renders type=\"button\" by default", () => {
    render(<Button>Ação</Button>);

    const button = screen.getByRole("button", { name: "Ação" });
    expect(button).toHaveAttribute("type", "button");
  });
});
