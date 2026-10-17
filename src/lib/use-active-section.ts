import { useEffect, useState } from "react";

function findCurrentSectionId(sectionIds: readonly string[]): string | null {
  const header = document.querySelector("header");
  const headerHeight = header ? header.getBoundingClientRect().height : 0;
  const threshold = window.scrollY + headerHeight + 1;

  let activeId: string | null = null;
  for (const id of sectionIds) {
    const element = document.getElementById(id);
    if (element && element.offsetTop <= threshold) {
      activeId = id;
    }
  }
  return activeId;
}

/** Identifica a última seção cujo topo ultrapassou a linha inferior do cabeçalho fixo. */
export function useActiveSection(sectionIds: readonly string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const next = findCurrentSectionId(sectionIds);
      setActiveId((prev) => (prev === next ? prev : next));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionIds]);

  return activeId;
}
