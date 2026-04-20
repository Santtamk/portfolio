import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { AngledTechTickers } from "@/components/tech/angled-tech-tickers";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { WorkCard } from "@/components/work/work-card";
import { siteContent } from "@/lib/site-content";

export default function Home() {
  const { person, hero, marketing, works, tickerRows, contact } = siteContent;

  return (
    <main className="relative flex flex-1 flex-col gap-16 pb-16 pt-10 md:gap-24 md:pb-20 md:pt-12">
      <section>
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-[0.8px] border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_6px_20px_rgba(24,24,24,0.08)] md:p-9">
              <p className="inline-flex rounded-full border border-[0.8px] border-[var(--line)] bg-[var(--panel-bg)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted-ink)]">
                {hero.badge}
              </p>
              <h1 className="mt-4 max-w-4xl font-serif text-[2.3rem] leading-tight text-[var(--ink)] md:text-[3.5rem]">
                {hero.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--body-ink)] md:text-[1.02rem]">
                {hero.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-[var(--accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--accent-ink)]">
                  {person.role}
                </span>
                <span className="rounded-full border border-[0.8px] border-[var(--line)] bg-[var(--panel-bg)] px-4 py-2 text-sm text-[var(--body-ink)]">
                  {person.location}
                </span>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            <Reveal className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-[0.8px] border-[var(--line)] bg-[var(--surface)] p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted-ink)]">
                  {marketing.momentum.eyebrow}
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-[var(--ink)] md:text-[2.05rem]">
                  {marketing.momentum.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--body-ink)] md:text-base">
                  {marketing.momentum.description}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-[var(--body-ink)] md:text-base">
                  {marketing.momentum.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-ink)]" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={0.08} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-[0.8px] border-[var(--line)] bg-[var(--surface)] p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted-ink)]">
                  {marketing.direction.eyebrow}
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-[var(--ink)] md:text-[2.05rem]">
                  {marketing.direction.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--body-ink)] md:text-base">
                  {marketing.direction.description}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-[var(--body-ink)] md:text-base">
                  {marketing.direction.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-ink)]" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="work">
        <Container>
          <Reveal>
            <SectionTitle
              eyebrow="Selected Work"
              title="Three projects, each focused on solving one clear user problem."
              description="These are placeholder case cards now, but the structure is ready for your real stories and outcomes."
            />
          </Reveal>

          <div className="mt-7 grid gap-4 md:mt-9 md:gap-6 md:grid-cols-3">
            {works.map((work, index) => (
              <Reveal key={work.slug} delay={index * 0.08} className="h-full">
                <WorkCard work={work} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="stack">
        <Container>
          <Reveal>
            <SectionTitle
              eyebrow="Stack"
              title="Tools and methods that keep delivery fast, stable, and intentional."
              description="Angled ticker strips keep this section dynamic without overwhelming the rest of the interface."
            />
          </Reveal>

          <div className="mt-7 md:mt-9">
            <Reveal>
              <AngledTechTickers rows={tickerRows} />
            </Reveal>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-[0.8px] border-[var(--line)] bg-[var(--panel-bg)] p-7 md:p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted-ink)]">Quick intro</p>
              <h2 className="mt-2 font-serif text-3xl text-[var(--ink)] md:text-[2.05rem]">{person.name}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--body-ink)] md:text-base">
                I am not positioning myself as a web developer. My focus is solving practical
                product and workflow problems with clear structure, calm UI, and measurable
                outcomes.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={`/works/${works[0]?.slug}`}
                  className="inline-flex rounded-full bg-[var(--accent-ink)] px-5 py-3 text-sm font-semibold text-[var(--surface)] transition hover:opacity-92"
                >
                  Read first case
                </Link>
                <Link
                  href="/about"
                  className="inline-flex rounded-full border border-[0.8px] border-[var(--line)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--surface)]"
                >
                  About me
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="contact">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-[0.8px] border-[var(--line)] bg-[var(--surface)] p-7 shadow-[0_6px_20px_rgba(24,24,24,0.06)] md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-ink)]">
                Contact
              </p>
              <h2 className="mt-3 max-w-3xl font-serif text-3xl text-[var(--ink)] md:text-[2.1rem]">
                {contact.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--body-ink)] md:text-base">
                {contact.description}
              </p>
              <a
                href={`mailto:${person.email}`}
                className="mt-5 inline-flex rounded-full bg-[var(--accent-soft)] px-5 py-3 text-sm font-semibold text-[var(--accent-ink)] transition hover:brightness-110"
              >
                {contact.ctaLabel}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
