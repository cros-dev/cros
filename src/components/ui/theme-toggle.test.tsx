import "@testing-library/jest-dom/vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { hydrateRoot } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ThemeToggle } from "./theme-toggle";

describe("ThemeToggle", () => {
  beforeEach(() => {
    document.documentElement.classList.remove("dark");
    localStorage.clear();
  });

  afterEach(() => {
    document.documentElement.classList.remove("dark");
    localStorage.clear();
  });

  it("toggles dark class on documentElement and persists theme in localStorage", () => {
    render(<ThemeToggle />);

    const button = screen.getByRole("button", { name: "Alternar tema" });
    expect(button).toHaveAttribute("aria-pressed", "false");

    fireEvent.click(button);

    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(button).toHaveAttribute("aria-pressed", "true");

    fireEvent.click(button);

    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("theme")).toBe("light");
    expect(button).toHaveAttribute("aria-pressed", "false");
  });

  it("renders both moon and sun icons with dark mode visibility classes", () => {
    const { container } = render(<ThemeToggle />);

    const svgs = container.querySelectorAll("svg");
    expect(svgs).toHaveLength(2);
    expect(svgs[0]).toHaveClass("block", "size-4", "dark:hidden");
    expect(svgs[1]).toHaveClass("hidden", "size-4", "dark:block");
  });

  it("hydrates without recoverable errors when dark class is already applied on documentElement", () => {
    const html = renderToString(<ThemeToggle />);
    const container = document.createElement("div");
    container.innerHTML = html;
    document.body.appendChild(container);

    document.documentElement.classList.add("dark");
    const onRecoverableError = vi.fn();

    let root: ReturnType<typeof hydrateRoot> | undefined;
    act(() => {
      root = hydrateRoot(container, <ThemeToggle />, { onRecoverableError });
    });

    expect(onRecoverableError).not.toHaveBeenCalled();
    const button = container.querySelector("button");
    expect(button).toHaveAttribute("aria-pressed", "true");

    act(() => {
      root?.unmount();
    });
    container.remove();
  });
});
