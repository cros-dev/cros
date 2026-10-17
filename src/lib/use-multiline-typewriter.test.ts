import { describe, expect, it } from "vitest";
import {
  getActiveLineIndex,
  sliceTypedLines,
} from "./use-multiline-typewriter";

describe("useMultilineTypewriter pure helpers", () => {
  const sampleLines = ["Caio Riquelmy", "Oliveira da Silva"];

  it("slices typed characters progressively across multiple lines", () => {
    expect(sliceTypedLines(sampleLines, 0)).toEqual(["", ""]);
    expect(sliceTypedLines(sampleLines, 4)).toEqual(["Caio", ""]);
    expect(sliceTypedLines(sampleLines, 13)).toEqual(["Caio Riquelmy", ""]);
    expect(sliceTypedLines(sampleLines, 21)).toEqual([
      "Caio Riquelmy",
      "Oliveira",
    ]);
    expect(sliceTypedLines(sampleLines, 50)).toEqual(sampleLines);
  });

  it("computes the active line index for each stage of typing", () => {
    expect(getActiveLineIndex(sampleLines, 0)).toBe(0);
    expect(getActiveLineIndex(sampleLines, 13)).toBe(0);
    expect(getActiveLineIndex(sampleLines, 14)).toBe(1);
    expect(getActiveLineIndex(sampleLines, 50)).toBe(1);
  });
});
