import type { Profile } from "~/features/profile/schemas/profile";

interface AboutSectionProps {
  profile: Profile;
}

/** Seção de apresentação principal com nome, título profissional e resumo. */
export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="sobre" aria-labelledby="sobre-heading" className="space-y-3">
      <div className="space-y-1">
        <h1
          id="sobre-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {profile.fullName}
        </h1>
        <p className="text-base font-medium text-primary">{profile.headline}</p>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
        {profile.summary}
      </p>
    </section>
  );
}
