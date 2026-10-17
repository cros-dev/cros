import {
  useEffect,
  useLayoutEffect,
  useState,
  type RefObject,
} from "react";

export interface UseMultilineTypewriterOptions {
  speedMs?: number;
  startDelayMs?: number;
}

export interface UseMultilineTypewriterResult {
  lines: string[] | null;
  displayedLines: string[];
  activeLineIndex: number;
  isComplete: boolean;
}

/** Recorta as linhas medidas de acordo com a quantidade de caracteres já digitados. */
export function sliceTypedLines(
  lines: readonly string[],
  typedCount: number,
): string[] {
  let remaining = Math.max(0, typedCount);
  return lines.map((line) => {
    if (remaining <= 0) {
      return "";
    }
    const visible = line.slice(0, remaining);
    remaining -= line.length;
    return visible;
  });
}

/** Determina o índice da linha atualmente ativa durante a digitação. */
export function getActiveLineIndex(
  lines: readonly string[],
  typedCount: number,
): number {
  if (lines.length <= 1) {
    return 0;
  }
  let remaining = Math.max(0, typedCount);
  for (let index = 0; index < lines.length - 1; index += 1) {
    const lineLength = lines[index]?.length ?? 0;
    if (remaining <= lineLength) {
      return index;
    }
    remaining -= lineLength;
  }
  return lines.length - 1;
}

function createMeasurementProbe(target: HTMLElement, width: number): HTMLDivElement {
  const computed = window.getComputedStyle(target);
  const probe = document.createElement("div");
  probe.style.position = "fixed";
  probe.style.top = "0";
  probe.style.left = "-9999px";
  probe.style.visibility = "hidden";
  probe.style.pointerEvents = "none";
  probe.style.whiteSpace = "normal";
  probe.style.width = `${width}px`;
  probe.style.font = computed.font;
  probe.style.fontFamily = computed.fontFamily;
  probe.style.fontSize = computed.fontSize;
  probe.style.fontWeight = computed.fontWeight;
  probe.style.letterSpacing = computed.letterSpacing;
  probe.style.lineHeight = computed.lineHeight;
  return probe;
}

function extractLinesFromTextNode(textNode: Text, fullText: string): string[] {
  const range = document.createRange();
  const rawLines: string[] = [];
  let currentTop: number | null = null;
  let currentLine = "";

  for (let index = 0; index < fullText.length; index += 1) {
    range.setStart(textNode, index);
    range.setEnd(textNode, index + 1);
    const rect = range.getClientRects()[0];
    const ch = fullText[index] ?? "";

    if (rect && currentTop !== null && Math.abs(rect.top - currentTop) > 2) {
      rawLines.push(currentLine.replace(/^ +| +$/g, ""));
      currentLine = ch;
      currentTop = rect.top;
    } else {
      currentLine += ch;
      if (rect && currentTop === null) {
        currentTop = rect.top;
      }
    }
  }

  if (currentLine.length > 0) {
    rawLines.push(currentLine.replace(/^ +| +$/g, ""));
  }

  const filtered = rawLines.filter((line) => line.length > 0);
  return filtered.length > 0 ? filtered : [fullText];
}

function measureWrappedLines(target: HTMLElement, text: string): string[] {
  const width = target.clientWidth || target.getBoundingClientRect().width;
  if (!width || typeof document.createRange !== "function") {
    return [text];
  }

  const probe = createMeasurementProbe(target, width);
  const textNode = document.createTextNode(text);
  probe.appendChild(textNode);
  document.body.appendChild(probe);

  try {
    return extractLinesFromTextNode(textNode, text);
  } finally {
    probe.remove();
  }
}

function areLinesEqual(prev: string[] | null, next: string[]): boolean {
  if (!prev || prev.length !== next.length) {
    return false;
  }
  return prev.every((line, index) => line === next[index]);
}

/** Controla o efeito de digitação multilinha preservando o layout e respeitando movimento reduzido. */
export function useMultilineTypewriter(
  ref: RefObject<HTMLElement | null>,
  text: string,
  { speedMs = 55, startDelayMs = 350 }: UseMultilineTypewriterOptions = {},
): UseMultilineTypewriterResult {
  const [lines, setLines] = useState<string[] | null>(null);
  const [typedCount, setTypedCount] = useState(0);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const updateLines = () => {
      const measured = measureWrappedLines(element, text);
      setLines((prev) => (areLinesEqual(prev, measured) ? prev : measured));
    };

    updateLines();

    if (typeof ResizeObserver === "undefined") {
      return;
    }

    const observer = new ResizeObserver(updateLines);
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, text]);

  const resolvedLines = lines ?? [text];
  const totalChars = resolvedLines.reduce((sum, line) => sum + line.length, 0);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let intervalId: number | undefined;
    const delay = prefersReducedMotion ? 0 : startDelayMs;
    const timeoutId = window.setTimeout(() => {
      if (prefersReducedMotion) {
        setTypedCount(totalChars);
        return;
      }
      setTypedCount(0);
      intervalId = window.setInterval(() => {
        setTypedCount((current) => {
          if (current >= totalChars) {
            window.clearInterval(intervalId);
            return current;
          }
          return current + 1;
        });
      }, speedMs);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, [totalChars, speedMs, startDelayMs]);

  return {
    lines,
    displayedLines: sliceTypedLines(resolvedLines, typedCount),
    activeLineIndex: getActiveLineIndex(resolvedLines, typedCount),
    isComplete: lines !== null && typedCount >= totalChars,
  };
}
