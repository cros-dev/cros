import { useRef } from "react";
import { buttonVariants } from "~/components/ui/button";
import type { Profile } from "~/features/profile/schemas/profile";
import { formatPortugueseName } from "~/lib/format-portuguese-name";
import { useMultilineTypewriter } from "~/lib/use-multiline-typewriter";

export interface HeroSectionProps {
  profile: Profile;
}

/** Seção principal de abertura com título profissional, nome animado por digitação, resumo e chamadas de ação. */
export function HeroSection({ profile }: HeroSectionProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formattedName = formatPortugueseName(profile.fullName);
  const { lines, displayedLines, activeLineIndex, isComplete } =
    useMultilineTypewriter(headingRef, formattedName);

  const isTyping = lines !== null && !isComplete;

  return (
    <section
      id="sobre"
      aria-labelledby="hero-heading"
      className="scroll-mt-[var(--site-section-scroll-margin)] py-[var(--hero-section-padding-y)] pb-[var(--hero-section-padding-bottom)]"
    >
      <p className="mb-[1.75rem] text-caption font-medium tracking-[0.08em] text-primary uppercase">
        {profile.headline}
      </p>
      <h1
        ref={headingRef}
        id="hero-heading"
        aria-label={profile.fullName}
        aria-busy={isTyping || undefined}
        className="max-w-full text-[clamp(2.25rem,9vw,4.75rem)] leading-[1.02] font-medium tracking-[-0.035em] text-foreground"
      >
        {lines === null
          ? formattedName
          : lines.map((line, index) => (
              <span key={`${index}-${line}`} className="relative block">
                <span className="invisible select-none" aria-hidden="true">
                  {line}
                </span>
                <span className="absolute inset-0" aria-hidden="true">
                  {displayedLines[index]}
                  {!isComplete && activeLineIndex === index && (
                    <span
                      aria-hidden="true"
                      className="ml-[0.06em] inline-block h-[0.82em] w-[0.055em] translate-y-[0.08em] animate-pulse bg-primary"
                    />
                  )}
                </span>
              </span>
            ))}
      </h1>
      <p className="mt-8 max-w-[38.75rem] text-pretty text-[1.3125rem] leading-[1.55] text-muted-foreground">
        {profile.summary}
      </p>
      <div className="mt-12 flex flex-wrap gap-[0.875rem]">
        <a href="#projetos" className={buttonVariants({ variant: "cta" })}>
          Ver projetos
        </a>
        <a href="#contato" className={buttonVariants({ variant: "outline" })}>
          Contato
        </a>
      </div>
    </section>
  );
}
