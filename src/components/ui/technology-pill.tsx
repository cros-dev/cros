export type TechnologyPillSize = "default" | "sm";

export interface TechnologyPillProps {
  label: string;
  size?: TechnologyPillSize;
  className?: string;
}

const PILL_BASE_CLASSES =
  "inline-flex items-center justify-center border-[0.5px] border-line leading-none text-muted-foreground";

const PILL_SIZE_CLASSES: Record<TechnologyPillSize, string> = {
  default: "rounded-md px-2.5 py-1 text-caption",
  sm: "rounded-sm px-1.5 py-0.5 text-[0.6875rem]",
};

/** Etiqueta discreta para exibição de tecnologia ou ferramenta. */
export function TechnologyPill({
  label,
  size = "default",
  className,
}: TechnologyPillProps) {
  const classes = [PILL_BASE_CLASSES, PILL_SIZE_CLASSES[size], className]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{label}</span>;
}

export interface TechnologyPillListProps {
  items: readonly string[];
  size?: TechnologyPillSize;
  "aria-labelledby"?: string;
}

/** Lista de etiquetas de tecnologia que omite a marcação quando vazia. */
export function TechnologyPillList({
  items,
  size = "default",
  "aria-labelledby": ariaLabelledBy,
}: TechnologyPillListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className="flex flex-wrap gap-2" aria-labelledby={ariaLabelledBy}>
      {items.map((item) => (
        <li key={item}>
          <TechnologyPill label={item} size={size} />
        </li>
      ))}
    </ul>
  );
}
