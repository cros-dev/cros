export type BadgeTone =
  | "primary"
  | "secondary"
  | "muted"
  | "warn"
  | "destructive";
export type BadgeSize = "default" | "lg";

export interface BadgeProps {
  label: string;
  tone?: BadgeTone;
  size?: BadgeSize;
  className?: string;
}

const BADGE_BASE_CLASSES = "inline-flex items-center rounded-full px-2 py-0.5";

const BADGE_TONE_CLASSES: Record<BadgeTone, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary font-medium text-secondary-foreground",
  muted: "border-[0.5px] border-line bg-muted font-normal text-muted-foreground",
  warn: "border-[0.5px] border-warn-line bg-warn-bg text-warn-fg",
  destructive: "bg-destructive/10 text-destructive",
};

const BADGE_SIZE_CLASSES: Record<BadgeSize, string> = {
  default: "text-[0.625rem] leading-none",
  lg: "text-[0.6875rem] leading-snug",
};

/** Selo compacto de status ou categoria com tons semânticos da marca. */
export function Badge({
  label,
  tone = "primary",
  size = "default",
  className,
}: BadgeProps) {
  const classes = [
    BADGE_BASE_CLASSES,
    BADGE_TONE_CLASSES[tone],
    BADGE_SIZE_CLASSES[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{label}</span>;
}
