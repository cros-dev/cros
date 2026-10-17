import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteFooter } from "./site-footer";

describe("SiteFooter", () => {
  it("renders id=\"contato\", copyright notice, mailto, LinkedIn, and GitHub links", () => {
    const { container } = render(
      <SiteFooter
        ownerName="Caio Riquelmy"
        year={2026}
        email="crosnegocios@hotmail.com"
        linkedinUrl="https://www.linkedin.com/in/caio-riquelmy-a295ba19b/"
        githubUrl="https://github.com/cros-dev"
      />,
    );

    const footer = container.querySelector("footer");
    expect(footer).toHaveAttribute("id", "contato");
    expect(screen.getByText("© 2026 Caio Riquelmy")).toBeInTheDocument();

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
