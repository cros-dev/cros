import { describe, expect, it } from "vitest";
import { resolveTheme } from "./theme";

describe("resolveTheme", () => {
  it("returns stored theme when valid regardless of system preference", () => {
    expect(resolveTheme("dark", false)).toBe("dark");
    expect(resolveTheme("light", true)).toBe("light");
  });

  it("falls back to system preference when no valid value is stored", () => {
    expect(resolveTheme(null, true)).toBe("dark");
    expect(resolveTheme(null, false)).toBe("light");
  });
});
