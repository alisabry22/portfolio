"use client";

import { useState } from "react";
import { ArrowUpRight, Apple, Globe, Play } from "lucide-react";
import { projects, categories, Category } from "@/app/data/projects";

const linkIcon = (icon: string) => {
  switch (icon) {
    case "apple":
      return Apple;
    case "play":
      return Play;
    default:
      return Globe;
  }
};

export default function Projects() {
  const [active, setActive] = useState<Category>("all");

  const list = projects.filter(
    (p) => active === "all" || p.categories.includes(active),
  );

  return (
    <section id="work" className="divider py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2
              className="mt-4 font-display leading-[1] tracking-[-0.02em] text-[var(--text)]"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
            >
              Apps in production.
            </h2>
            <p className="mt-3 max-w-xl text-[0.95rem] leading-[1.7] text-[var(--text-2)]">
              A selection of mobile, SaaS, AI and web products I&apos;ve
              designed and shipped.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`rounded-full border px-3.5 py-1.5 text-[0.82rem] font-medium transition-all ${
                  active === c.id
                    ? "border-[var(--text)] bg-[var(--text)] text-[var(--bg)]"
                    : "border-[var(--border)] text-[var(--text-2)] hover:border-[var(--border-strong)] hover:text-[var(--text)]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.id} className="card group flex flex-col p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-2)] text-2xl">
                  {p.emoji}
                </div>
                {p.featured && (
                  <span className="tag tag-accent text-[0.65rem]">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-[1.05rem] font-semibold text-[var(--text)]">
                {p.title}
              </h3>
              <p className="mt-1 text-[0.78rem] font-medium uppercase tracking-[0.08em] text-[var(--accent)]">
                {p.subtitle}
              </p>
              <p className="mt-3 text-[0.85rem] leading-[1.7] text-[var(--text-2)]">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.slice(0, 4).map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[var(--border)] pt-4">
                {p.links.map((l) => {
                  const Icon = linkIcon(l.icon);
                  return (
                    <a
                      key={l.label}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] px-2.5 py-1.5 text-[0.78rem] font-medium text-[var(--text-2)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
                    >
                      <Icon size={13} />
                      {l.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-50 group-hover:opacity-100"
                      />
                    </a>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
