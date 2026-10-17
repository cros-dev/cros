import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button, buttonVariants } from "./button";

describe("Button", () => {
  it("buttonVariants includes classes for cta and outline variants and sizes", () => {
    const defaultClasses = buttonVariants();
    const ctaClasses = buttonVariants({ variant: "cta" });
    const outlineClasses = buttonVariants({ variant: "outline" });
    const iconSmClasses = buttonVariants({ size: "icon-sm" });
    const ghostIconSmClasses = buttonVariants({
      variant: "ghost",
      size: "icon-sm",
    });

    expect(defaultClasses).toContain("cursor-pointer");
    expect(defaultClasses).toContain("h-9");
    expect(defaultClasses).not.toContain("py-[0.875rem]");
    expect(ctaClasses).toContain("bg-cta");
    expect(ctaClasses).toContain("text-cta-foreground");
    expect(outlineClasses).toContain("border-primary/40");
    expect(outlineClasses).toContain("text-primary");
    expect(iconSmClasses).toContain("size-8");
    expect(ghostIconSmClasses).toContain("cursor-pointer");
  });

  it("renders type=\"button\" by default", () => {
    render(<Button>Ação</Button>);

    const button = screen.getByRole("button", { name: "Ação" });
    expect(button).toHaveAttribute("type", "button");
  });
});
