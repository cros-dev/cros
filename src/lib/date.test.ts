import { describe, expect, it } from "vitest";
import { formatMonth, formatPeriod } from "./date";

describe("date helpers", () => {
  it("formats a YYYY-MM string to pt-BR short month and year", () => {
    expect(formatMonth("2026-01")).toBe("jan. de 2026");
    expect(formatMonth("2025-11")).toBe("nov. de 2025");
  });

  it("formats a closed period with start and end months", () => {
    expect(formatPeriod("2025-04", "2025-10")).toBe(
      "abr. de 2025 – out. de 2025",
    );
  });

  it("formats an open period with null end date as atual", () => {
    expect(formatPeriod("2026-01", null)).toBe("jan. de 2026 – atual");
  });
});
