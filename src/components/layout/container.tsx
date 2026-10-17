import type { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const CONTAINER_BASE_CLASSES =
  "mx-auto w-full max-w-[var(--site-content-max-width)] px-5 sm:px-10";

/** Contêiner centralizado com largura máxima e espaçamento horizontal padronizados do site. */
export function Container({ children, className }: ContainerProps) {
  const classes = [CONTAINER_BASE_CLASSES, className].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
}
