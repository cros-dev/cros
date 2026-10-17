import { describe, expect, it } from "vitest";
import {
  formatShortPeriod,
  formatTimelineMonth,
  formatTimelinePeriod,
} from "./date";

describe("date helpers", () => {
  it("formats a closed and open short period", () => {
    expect(formatShortPeriod("2026-01", "2029-12")).toBe("Jan/2026 — Dez/2029");
    expect(formatShortPeriod("2026-01", null)).toBe("Jan/2026 — atual");
  });

  it("formats a timeline period with capitalized Atual when open", () => {
    expect(formatTimelinePeriod("2025-04", "2025-10")).toBe(
      "Abr/2025 — Out/2025",
    );
    expect(formatTimelinePeriod("2026-01", null)).toBe("Jan/2026 — Atual");
  });

  it("formats a timeline month in full pt-BR or Sem data when null", () => {
    expect(formatTimelineMonth("2025-08")).toBe("Agosto, 2025");
    expect(formatTimelineMonth(null)).toBe("Sem data");
  });
});
