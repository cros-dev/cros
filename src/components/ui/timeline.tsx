import {
  forwardRef,
  type CSSProperties,
  type HTMLAttributes,
  type LiHTMLAttributes,
  type OlHTMLAttributes,
  type ReactNode,
} from "react";

export type TimelinePosition = "left" | "alternate";
export type TimelineLineAlign = "center" | "left";
export type TimelineItemAlign = "left" | "right";

export interface TimelineProps extends OlHTMLAttributes<HTMLOListElement> {
  position?: TimelinePosition;
}

/** Lista ordenada raiz da linha do tempo com variáveis CSS de progresso. */
export const Timeline = forwardRef<HTMLOListElement, TimelineProps>(
  function Timeline(
    { position = "alternate", className, style, children, ...props },
    ref,
  ) {
    const timelineStyle = {
      "--timeline-line-start": "0px",
      "--timeline-progress": "0px",
      ...style,
    } as CSSProperties;

    const classes = ["group/timeline relative list-none", className]
      .filter(Boolean)
      .join(" ");

    return (
      <ol
        ref={ref}
        data-position={position}
        style={timelineStyle}
        className={classes}
        {...props}
      >
        {children}
      </ol>
    );
  },
);

export interface TimelineLineProps extends HTMLAttributes<HTMLDivElement> {
  align?: TimelineLineAlign;
}

const TIMELINE_LINE_ALIGN_CLASSES: Record<TimelineLineAlign, string> = {
  center: "left-[1.125rem] md:left-1/2 md:-translate-x-1/2",
  left: "left-[1.125rem]",
};

/** Eixo vertical da linha do tempo com trilho estático e barra de progresso. */
export function TimelineLine({
  align = "center",
  className,
  ...props
}: TimelineLineProps) {
  const classes = [
    "pointer-events-none absolute bottom-0 top-[var(--timeline-line-start,0px)] w-px",
    TIMELINE_LINE_ALIGN_CLASSES[align],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div aria-hidden="true" className={classes} {...props}>
      <div className="absolute inset-0 w-px bg-line group-data-[timeline-scroll=active]/timeline:bg-timeline-track group-data-[timeline-scroll=idle]/timeline:bg-timeline-track" />
      <div className="absolute top-0 z-[1] h-[var(--timeline-progress,0px)] w-px origin-top bg-foreground" />
    </div>
  );
}

export interface TimelineItemProps extends LiHTMLAttributes<HTMLLIElement> {
  align?: TimelineItemAlign;
  itemId?: string;
}

/** Item individual da linha do tempo com alinhamento e identificador de ancoragem. */
export function TimelineItem({
  align = "left",
  itemId,
  className,
  children,
  ...props
}: TimelineItemProps) {
  const classes = ["relative pb-10 last:pb-0 md:pb-14", className]
    .filter(Boolean)
    .join(" ");

  return (
    <li
      data-align={align}
      data-timeline-item={itemId}
      className={classes}
      {...props}
    >
      {children}
    </li>
  );
}

export interface TimelineDateProps {
  label: string;
  isActive?: boolean;
  className?: string;
}

/** Etiqueta de período da linha do tempo com destaque para o estado ativo. */
export function TimelineDate({
  label,
  isActive = false,
  className,
}: TimelineDateProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-md px-2.5 py-1 text-[0.6875rem] leading-none font-semibold whitespace-nowrap transition-colors duration-300",
    isActive
      ? "bg-foreground text-background"
      : "bg-timeline-pill text-foreground",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span data-active={isActive ? "true" : undefined} className={classes}>
      {label}
    </span>
  );
}

export interface TimelineMarkerProps {
  isActive?: boolean;
  className?: string;
}

/** Marcador circular do eixo da linha do tempo com halo e ponto central. */
export function TimelineMarker({
  isActive = false,
  className,
}: TimelineMarkerProps) {
  const classes = [
    "relative z-20 flex size-5 shrink-0 items-center justify-center",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div aria-hidden="true" data-timeline-marker="" className={classes}>
      <span
        className={`absolute inset-0 rounded-full ${
          isActive ? "bg-foreground/12" : "bg-timeline-track"
        }`}
      />
      <span
        className={`relative size-2 rounded-full ${
          isActive ? "bg-foreground" : "bg-muted-foreground"
        }`}
      />
    </div>
  );
}

export interface TimelineContentProps {
  align?: TimelineItemAlign;
  dateLabel: string;
  isActive?: boolean;
  children: ReactNode;
}

/** Layout responsivo de item da linha do tempo com marcador, data e conteúdo. */
export function TimelineContent({
  align = "left",
  dateLabel,
  isActive = false,
  children,
}: TimelineContentProps) {
  return (
    <>
      <div className="md:hidden">
        <div className="flex items-center">
          <div className="flex w-[2.25rem] shrink-0 justify-center">
            <TimelineMarker isActive={isActive} />
          </div>
          <div className="pl-3">
            <TimelineDate label={dateLabel} isActive={isActive} />
          </div>
        </div>
        <div className="mt-5 min-w-0 pl-[2.25rem]">{children}</div>
      </div>
      <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_1.25rem_minmax(0,1fr)] md:items-start">
        {align === "left" ? (
          <>
            <div className="min-w-0 self-start pt-6 pr-10">{children}</div>
            <div className="flex justify-center self-start pt-6">
              <TimelineMarker isActive={isActive} />
            </div>
            <div className="flex justify-start self-start pt-6 pl-4">
              <TimelineDate label={dateLabel} isActive={isActive} />
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-end self-start pt-6 pr-4">
              <TimelineDate label={dateLabel} isActive={isActive} />
            </div>
            <div className="flex justify-center self-start pt-6">
              <TimelineMarker isActive={isActive} />
            </div>
            <div className="min-w-0 self-start pt-6 pl-10">{children}</div>
          </>
        )}
      </div>
    </>
  );
}
