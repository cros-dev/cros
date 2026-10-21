import "@testing-library/jest-dom/vitest";
import { render, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { projects } from "~/features/projects/content/projects";
import { ProjectTimelineSection } from "./project-timeline";

describe("ProjectTimelineSection", () => {
  it("renders 6 project articles, context and status badges, and Sem data in 2 timeline pills", () => {
    const { container } = render(
      <ProjectTimelineSection
        projects={projects}
        variant="detail"
        title="Projetos"
        heading="h2"
      />,
    );

    const desktopSlots = Array.from(
      container.querySelectorAll<HTMLElement>(".hidden.md\\:grid"),
    );
    expect(desktopSlots).toHaveLength(6);

    const articles = desktopSlots.map((slot) => within(slot).getByRole("article"));
    expect(articles).toHaveLength(6);

    const personalBadges = desktopSlots.flatMap((slot) =>
      within(slot).queryAllByText("Projeto pessoal"),
    );
    const corporateBadges = desktopSlots.flatMap((slot) =>
      within(slot).queryAllByText("Projeto corporativo"),
    );
    const maintenanceBadges = desktopSlots.flatMap((slot) =>
      within(slot).queryAllByText("Em manutenção"),
    );
    const prototypeBadges = desktopSlots.flatMap((slot) =>
      within(slot).queryAllByText("Protótipo"),
    );
    const undatedPills = desktopSlots.flatMap((slot) =>
      within(slot).queryAllByText("Sem data"),
    );

    expect(personalBadges).toHaveLength(3);
    expect(corporateBadges).toHaveLength(3);
    expect(maintenanceBadges).toHaveLength(1);
    expect(prototypeBadges).toHaveLength(2);
    expect(undatedPills).toHaveLength(2);
  });

  it("applies muted tone with border-line class to Protótipo status badges", () => {
    const { container } = render(
      <ProjectTimelineSection
        projects={projects}
        variant="detail"
        title="Projetos"
        heading="h2"
      />,
    );

    const desktopSlots = Array.from(
      container.querySelectorAll<HTMLElement>(".hidden.md\\:grid"),
    );
    const prototypeBadges = desktopSlots.flatMap((slot) =>
      within(slot).queryAllByText("Protótipo"),
    );

    expect(prototypeBadges).toHaveLength(2);
    for (const badge of prototypeBadges) {
      expect(badge).toHaveClass("border-line");
    }
  });
});
