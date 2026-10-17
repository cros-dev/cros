import { useEffect, useState, type RefObject } from "react";

interface TimelineMetrics {
  lineStart: number;
  progress: number;
  activeIndex: number | null;
  scrollState: "off" | "idle" | "active";
}

function getReadingPoint(): number {
  const header = document.querySelector("header");
  const headerHeight = header ? header.getBoundingClientRect().height : 0;
  return headerHeight + window.innerHeight * 0.4;
}

/** Calcula a distância vertical do topo da linha do tempo até o centro do primeiro marcador visível. */
export function getLineStart(
  timeline: HTMLElement,
  timelineTop: number,
): number {
  const markers = timeline.querySelectorAll<HTMLElement>(
    "[data-timeline-marker]",
  );
  for (let index = 0; index < markers.length; index += 1) {
    const marker = markers[index];
    if (marker && marker.getClientRects().length > 0) {
      const rect = marker.getBoundingClientRect();
      return Math.max(0, rect.top + rect.height / 2 - timelineTop);
    }
  }
  return 0;
}

function findActiveItemIndex(
  timeline: HTMLElement,
  readingPoint: number,
): number | null {
  const items = timeline.querySelectorAll<HTMLElement>("[data-timeline-item]");
  let activeIndex: number | null = null;
  for (let index = 0; index < items.length; index += 1) {
    const item = items[index];
    if (item && item.getBoundingClientRect().top <= readingPoint) {
      activeIndex = index;
    }
  }
  return activeIndex;
}

function computeTimelineMetrics(
  timeline: HTMLElement,
  itemCount: number,
): TimelineMetrics {
  if (itemCount <= 0) {
    return {
      lineStart: 0,
      progress: 0,
      activeIndex: null,
      scrollState: "off",
    };
  }
  const readingPoint = getReadingPoint();
  const rect = timeline.getBoundingClientRect();
  const lineStart = getLineStart(timeline, rect.top);
  const maxHeight = Math.max(0, rect.height - lineStart);
  const rawProgress = readingPoint - (rect.top + lineStart);
  const progress = Math.min(Math.max(0, rawProgress), maxHeight);
  const activeIndex = findActiveItemIndex(timeline, readingPoint);
  const scrollState = progress > 0 ? "active" : "idle";

  return { lineStart, progress, activeIndex, scrollState };
}

function applyTimelineAttributes(
  timeline: HTMLElement,
  metrics: TimelineMetrics,
): void {
  timeline.style.setProperty("--timeline-line-start", `${metrics.lineStart}px`);
  timeline.style.setProperty("--timeline-progress", `${metrics.progress}px`);
  timeline.setAttribute("data-timeline-scroll", metrics.scrollState);
}

function clearTimelineAttributes(timeline: HTMLElement): void {
  timeline.style.removeProperty("--timeline-line-start");
  timeline.style.removeProperty("--timeline-progress");
  timeline.removeAttribute("data-timeline-scroll");
}

/** Calcula o progresso de leitura e o item ativo de uma linha do tempo durante a rolagem. */
export function useActiveTimeline(
  itemCount: number,
  sectionId: string,
  timelineRef: RefObject<HTMLOListElement | null>,
): number | null {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) {
      return;
    }

    let frameId = 0;
    const update = () => {
      frameId = 0;
      const metrics = computeTimelineMetrics(timeline, itemCount);
      applyTimelineAttributes(timeline, metrics);
      setActiveIndex((prev) =>
        prev === metrics.activeIndex ? prev : metrics.activeIndex,
      );
    };

    const scheduleUpdate = () => {
      if (frameId === 0) {
        frameId = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      clearTimelineAttributes(timeline);
    };
  }, [itemCount, sectionId, timelineRef]);

  return activeIndex;
}
