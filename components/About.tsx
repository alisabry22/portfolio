"use client";

import { Smartphone, Sparkles, Globe, Layers } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Flutter mobile apps",
    body: "iOS & Android apps with clean architecture, smooth animations, in-app purchases, push, analytics, and store-ready release pipelines.",
  },
  {
    icon: Sparkles,
    title: "AI-powered features",
    body: "LLM integrations, voice flows, OCR, and on-device intelligence shaped around real product use cases — not demo theatre.",
  },
  {
    icon: Globe,
    title: "Web & landing pages",
    body: "Next.js marketing sites and SaaS frontends that load fast, look sharp, and turn visitors into qualified leads.",
  },
  {
    icon: Layers,
    title: "Full product ownership",
    body: "From scoping and UX to engineering and launch — I work as a senior solo collaborator without coordination overhead.",
  },
];

export default function About() {
  return (
    <section id="about" className="divider py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div>
            <span className="eyebrow">About</span>
            <h2
              className="mt-4 font-display leading-[1] tracking-[-0.02em] text-[var(--text)]"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
            >
              Senior craft.
              <br />
              Founder pace.
            </h2>
            <p className="mt-5 max-w-md text-[0.95rem] leading-[1.75] text-[var(--text-2)]">
              I&apos;ve been writing Flutter since the early days. Today I help
              founders and product teams ship apps people actually want to keep
              on their home screen.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="card p-5 sm:p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  <s.icon size={17} />
                </div>
                <h3 className="mt-4 text-[0.98rem] font-semibold text-[var(--text)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[0.85rem] leading-[1.7] text-[var(--text-2)]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
