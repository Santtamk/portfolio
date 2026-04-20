type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <header className="max-w-2xl space-y-2.5">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-ink)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl leading-tight text-[var(--ink)] md:text-[2.1rem]">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-[var(--body-ink)] md:text-[1.02rem]">
          {description}
        </p>
      ) : null}
    </header>
  );
}
