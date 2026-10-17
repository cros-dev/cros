import { describe, expect, it, vi } from "vitest";
import { getLineStart } from "./use-active-timeline";

describe("getLineStart", () => {
  it("returns the vertical center distance of the first visible marker relative to timeline top", () => {
    const timeline = document.createElement("ol");
    const hiddenMarker = document.createElement("div");
    hiddenMarker.setAttribute("data-timeline-marker", "");
    vi.spyOn(hiddenMarker, "getClientRects").mockReturnValue(
      [] as unknown as DOMRectList,
    );

    const visibleMarker = document.createElement("div");
    visibleMarker.setAttribute("data-timeline-marker", "");
    vi.spyOn(visibleMarker, "getClientRects").mockReturnValue(
      [new DOMRect(0, 170, 20, 20)] as unknown as DOMRectList,
    );
    vi.spyOn(visibleMarker, "getBoundingClientRect").mockReturnValue(
      new DOMRect(0, 170, 20, 20),
    );

    timeline.append(hiddenMarker, visibleMarker);

    expect(getLineStart(timeline, 100)).toBe(80);
  });

  it("returns 0 when there are no markers", () => {
    const timeline = document.createElement("ol");

    expect(getLineStart(timeline, 100)).toBe(0);
  });
});
