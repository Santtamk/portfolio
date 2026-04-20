import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About | Santam Kumai",
  description: "About Santam Kumai and a practical product problem-solving approach.",
};

export default function AboutPage() {
  const { person, about } = siteContent;

  return (
    <main className="flex-1 py-10 md:py-14">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="About"
            title={about.title}
            description={about.description}
          />
        </Reveal>

        <div className="mt-7 grid gap-4 md:mt-9 md:gap-6 md:grid-cols-3">
          <Reveal>
            <article className="rounded-3xl border border-[0.8px] border-[var(--line)] bg-[var(--surface)] p-6">
              <h2 className="font-serif text-2xl text-[var(--ink)]">What I focus on</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--body-ink)] md:text-base">
                I solve process-heavy product problems where users need confidence,
                speed, and clarity. Most of my work centers on reducing operational noise.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="rounded-3xl border border-[0.8px] border-[var(--line)] bg-[var(--surface)] p-6">
              <h2 className="font-serif text-2xl text-[var(--ink)]">How I work</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--body-ink)] md:text-base">
                I begin with user friction mapping, then shape a minimum clear flow,
                prototype quickly, and validate with metrics that teams already track.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.16}>
            <article className="rounded-3xl border border-[0.8px] border-[var(--line)] bg-[var(--surface)] p-6">
              <h2 className="font-serif text-2xl text-[var(--ink)]">What teams get</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--body-ink)] md:text-base">
                A design partner who balances user empathy and delivery reality, helping
                teams ship cleaner experiences with less iteration waste.
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-7 rounded-3xl border border-[0.8px] border-[var(--line)] bg-[var(--panel-bg)] p-7 md:mt-9 md:p-8">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--muted-ink)]">Reach out</p>
            <h2 className="mt-2 font-serif text-3xl text-[var(--ink)] md:text-[2.05rem]">{person.name}</h2>
            <p className="mt-3 text-sm text-[var(--body-ink)] md:text-base">{person.role} • {person.location}</p>
            <a
              href={`mailto:${person.email}`}
              className="mt-5 inline-flex rounded-full bg-[var(--accent-ink)] px-5 py-3 text-sm font-semibold text-[var(--surface)] transition hover:opacity-92"
            >
              Email me
            </a>
            <Link
              href="/"
              className="ml-3 inline-flex rounded-full border border-[0.8px] border-[var(--line)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--surface)]"
            >
              Back home
            </Link>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
