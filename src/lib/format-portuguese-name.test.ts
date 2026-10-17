import { describe, expect, it } from "vitest";
import { formatPortugueseName } from "./format-portuguese-name";

describe("formatPortugueseName", () => {
  it("replaces spaces before and after da with non-breaking spaces", () => {
    expect(formatPortugueseName("Caio Riquelmy Oliveira da Silva")).toBe(
      "Caio Riquelmy Oliveira\u00A0da\u00A0Silva",
    );
  });
});
