import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteFooter } from "./site-footer";

describe("SiteFooter", () => {
  it("renders mailto, LinkedIn, and GitHub links matching props", () => {
    render(
      <SiteFooter
        email="crosnegocios@hotmail.com"
        linkedinUrl="https://www.linkedin.com/in/caio-riquelmy-a295ba19b/"
        githubUrl="https://github.com/cros-dev"
      />,
    );

    const emailLink = screen.getByRole("link", {
      name: "crosnegocios@hotmail.com",
    });
    const linkedinLink = screen.getByRole("link", { name: "LinkedIn" });
    const githubLink = screen.getByRole("link", { name: "GitHub" });

    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:crosnegocios@hotmail.com",
    );
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/caio-riquelmy-a295ba19b/",
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noreferrer");
    expect(githubLink).toHaveAttribute("href", "https://github.com/cros-dev");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noreferrer");
  });
});
