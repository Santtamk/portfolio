'use client';

import dynamic from "next/dynamic";
import { Reveal } from "@/components/animations/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { AngledTechTickers } from "@/components/tech/angled-tech-tickers";
import { Container } from "@/components/ui/container";
import { WorkCard } from "@/components/work/work-card";
import { siteContent } from "@/lib/site-content";

const Dither = dynamic(() => import("@/components/animations/dither"), {
  ssr: false
});

export default function Home() {
  const { person, hero, marketing, works, tickerRows, contact } = siteContent;

  return (
    <main className="relative flex flex-1 flex-col pb-16 pt-10 md:pb-24 md:pt-16">
      {/* Background Dither Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 h-96">
        <Dither
          waveSpeed={0.03}
          waveFrequency={2.5}
          waveAmplitude={0.25}
          waveColor={[0.57, 0.67, 0.60]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.2}
        />
      </div>

      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          
          {/* LEFT COLUMN: Sticky Intro & Philosophy */}
          <aside className="md:col-span-5 md:sticky md:top-24 md:h-[calc(100vh-8rem)] md:overflow-y-auto md:pr-4 flex flex-col justify-between">
            <Reveal>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="inline-flex rounded-full border border-[var(--line)] bg-[var(--panel-bg)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted-ink)]">
                    {hero.badge}
                  </p>
                  <h1 className="mt-5 font-serif text-[2.5rem] leading-[1.1] text-[var(--ink)] md:text-[3.2rem]">
                    {person.name}
                  </h1>
                  <p className="mt-2 text-sm font-medium text-[var(--accent-ink)] md:text-base">
                    {person.role} · {person.location}
                  </p>
                </div>

                <div className="space-y-4 text-sm leading-relaxed text-[var(--body-ink)] md:text-base">
                  <p className="font-serif text-xl italic leading-relaxed text-[var(--ink)]">
                    &ldquo;{hero.title}&rdquo;
                  </p>
                  <p>
                    {hero.description}
                  </p>
                  <p>
                    I work across product strategy, UX structure, and frontend engineering to solve operational pain points. My process stays practical: discover the user friction, prototype the cleanest path, and write clean, resilient code.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Left Column Footer Info */}
            <Reveal delay={0.12} className="hidden md:block pt-8 border-t border-[var(--line)] mt-8">
              <div className="flex flex-col gap-2 text-xs text-[var(--muted-ink)]">
                <p>© {new Date().getFullYear()} {person.name}</p>
                <p>Designed with a focus on understanding &amp; clarity.</p>
              </div>
            </Reveal>
          </aside>

          {/* RIGHT COLUMN: Showcase, Tech Stack, & Contact */}
          <div className="md:col-span-7 min-w-0 flex flex-col gap-16 md:gap-24">
            
            {/* Philosophy / Mindset cards */}
            <section className="grid gap-6 md:grid-cols-2">
              <Reveal>
                <article className="flex h-full flex-col rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_4px_12px_rgba(25,39,30,0.02)] md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted-ink)]">
                    {marketing.momentum.eyebrow}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl leading-tight text-[var(--ink)]">
                    {marketing.momentum.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--body-ink)]">
                    {marketing.momentum.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-[var(--body-ink)] md:text-sm">
                    {marketing.momentum.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-ink)]"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>

              <Reveal delay={0.08}>
                <article className="flex h-full flex-col rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_4px_12px_rgba(25,39,30,0.02)] md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted-ink)]">
                    {marketing.direction.eyebrow}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl leading-tight text-[var(--ink)]">
                    {marketing.direction.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--body-ink)]">
                    {marketing.direction.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-[var(--body-ink)] md:text-sm">
                    {marketing.direction.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-ink)]"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </section>

            {/* Selected Work List */}
            <section id="work" className="scroll-mt-24">
              <Reveal>
                <div className="mb-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-ink)]">
                    Selected Case Stories
                  </span>
                  <h2 className="mt-2 font-serif text-3xl leading-tight text-[var(--ink)] md:text-4xl">
                    Websites shaped around client context &amp; visitor psychology.
                  </h2>
                </div>
              </Reveal>

              <div className="grid gap-6">
                {works.map((work, index) => (
                  <Reveal key={work.slug} delay={index * 0.06}>
                    <WorkCard work={work} />
                  </Reveal>
                ))}
              </div>
            </section>

            {/* Technical Stack */}
            <section id="stack" className="scroll-mt-24">
              <Reveal>
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-ink)]">
                    Tech Stack
                  </span>
                  <h2 className="mt-2 font-serif text-3xl text-[var(--ink)] md:text-4xl">
                    Tools that keep web experiences fast and stable.
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <div className="overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-2">
                  <AngledTechTickers rows={tickerRows} />
                </div>
              </Reveal>
            </section>

            {/* Contact */}
            <section id="contact" className="scroll-mt-24">
              <Reveal>
                <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_6px_20px_rgba(25,39,30,0.02)] md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-ink)]">
                    Contact
                  </p>
                  <h2 className="mt-3 font-serif text-3xl text-[var(--ink)] md:text-4xl">
                    {contact.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--body-ink)] md:text-base">
                    {contact.description}
                  </p>
                  <div className="mt-6">
                    <ContactForm ctaLabel={contact.ctaLabel} />
                  </div>
                </div>
              </Reveal>
            </section>

          </div>
        </div>
      </Container>
    </main>
  );
}
