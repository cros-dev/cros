import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "default" | "cta" | "outline" | "ghost";
export type ButtonSize = "default" | "sm" | "icon" | "icon-sm";

export interface ButtonVariantsOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const BUTTON_BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50";

const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  default:
    "bg-primary text-primary-foreground hover:bg-[color-mix(in_oklch,var(--primary),black_8%)]",
  cta: "bg-cta text-cta-foreground hover:bg-[color-mix(in_oklch,var(--cta),black_8%)]",
  outline:
    "border-[0.5px] border-primary/40 text-primary hover:border-primary/55 hover:bg-primary/[0.07]",
  ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
};

const BUTTON_SIZE_CLASSES: Record<ButtonSize, string> = {
  default: "h-9 rounded-lg px-[1.625rem] text-ui-sm",
  sm: "rounded-md px-2.5 py-1.5 text-caption",
  icon: "size-9 rounded-full",
  "icon-sm": "size-8 rounded-full",
};

/** Retorna as classes utilitárias de estilo para botões e links com aparência de botão. */
export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: ButtonVariantsOptions = {}): string {
  return [
    BUTTON_BASE_CLASSES,
    BUTTON_VARIANT_CLASSES[variant],
    BUTTON_SIZE_CLASSES[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantsOptions {}

/** Botão de interface com variantes visuais e tamanhos padronizados da marca. */
export function Button({
  variant = "default",
  size = "default",
  type = "button",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
