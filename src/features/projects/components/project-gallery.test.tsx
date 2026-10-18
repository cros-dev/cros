import "@testing-library/jest-dom/vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { projects } from "~/features/projects/content/projects";
import { ProjectGallery } from "./project-gallery";
import { ProjectTimelineCard } from "./project-timeline-card";

function setupBrowserMocks(reducedMotion = false) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches:
        query === "(prefers-reduced-motion: reduce)" ? reducedMotion : false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  class MockResizeObserver {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
  }

  class MockIntersectionObserver {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
    takeRecords = vi.fn(() => []);
  }

  vi.stubGlobal("ResizeObserver", MockResizeObserver);
  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
}

describe("ProjectGallery and ProjectTimelineCard gallery integration", () => {
  const projectWithGallery = projects[0];

  beforeEach(() => {
    setupBrowserMocks(false);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders gallery buttons 1 to 13 in both detail and summary variants", () => {
    if (!projectWithGallery) {
      throw new Error("Expected at least one project");
    }

    const { unmount } = render(
      <ProjectTimelineCard project={projectWithGallery} variant="detail" />,
    );

    for (let index = 1; index <= 13; index += 1) {
      expect(
        screen.getByRole("button", { name: `Ampliar imagem ${index} de 13` }),
      ).toBeInTheDocument();
    }

    unmount();

    render(
      <ProjectTimelineCard project={projectWithGallery} variant="summary" />,
    );

    for (let index = 1; index <= 13; index += 1) {
      expect(
        screen.getByRole("button", { name: `Ampliar imagem ${index} de 13` }),
      ).toBeInTheDocument();
    }
  });

  it("opens dialog on clicked image with title and 3 / 13 counter, navigates, and closes on Fechar", () => {
    if (!projectWithGallery?.gallery) {
      throw new Error("Expected project with gallery");
    }

    render(
      <ProjectGallery
        projectTitle={projectWithGallery.title}
        images={projectWithGallery.gallery}
      />,
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Ampliar imagem 3 de 13" }),
    );

    expect(
      screen.getByRole("heading", {
        name: `Imagens — ${projectWithGallery.title}`,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("3 / 13")).toBeInTheDocument();

    fireEvent.click(
      screen.getAllByRole("button", { name: "Próxima imagem" })[0],
    );
    expect(screen.getByText("4 / 13")).toBeInTheDocument();

    fireEvent.keyDown(window, { key: "ArrowLeft" });
    expect(screen.getByText("3 / 13")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Fechar" }));
    expect(
      screen.queryByRole("heading", {
        name: `Imagens — ${projectWithGallery.title}`,
      }),
    ).not.toBeInTheDocument();
  });

  it("renders Próxima imagem buttons when dialog is open and advances counter when clicking the first", () => {
    if (!projectWithGallery?.gallery) {
      throw new Error("Expected project with gallery");
    }

    render(
      <ProjectGallery
        projectTitle={projectWithGallery.title}
        images={projectWithGallery.gallery}
      />,
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Ampliar imagem 1 de 13" }),
    );

    const nextButtons = screen.getAllByRole("button", {
      name: "Próxima imagem",
    });
    expect(nextButtons.length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText("1 / 13")).toBeInTheDocument();

    fireEvent.click(nextButtons[0]);
    expect(screen.getByText("2 / 13")).toBeInTheDocument();
  });

  it("omits duplicate thumbnails and animation when prefers-reduced-motion is enabled", () => {
    setupBrowserMocks(true);

    if (!projectWithGallery?.gallery) {
      throw new Error("Expected project with gallery");
    }

    const { container } = render(
      <ProjectGallery
        projectTitle={projectWithGallery.title}
        images={projectWithGallery.gallery}
      />,
    );

    const allButtons = container.querySelectorAll("button");
    expect(allButtons).toHaveLength(13);
    expect(
      container.querySelector(".project-gallery-track"),
    ).not.toBeInTheDocument();
  });
});
