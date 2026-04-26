"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, categories, Category } from "@/app/data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "all" || p.categories.includes(activeCategory)
  );

  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-end">
          <div className="space-y-4">
            <p className="section-label">Selected work</p>
            <h2 className="font-display max-w-[10ch] text-5xl leading-[0.95] tracking-[-0.03em] text-[var(--text)] sm:text-6xl">
              Products with real users and real stakes.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            These projects span AI finance, social publishing, health delivery,
            education, and branded commerce. The common thread is a shipped
            product with enough polish to earn trust quickly.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 border-b border-[var(--line)] pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "border-[rgba(245,236,221,0.22)] bg-[var(--text)] text-[#151612]"
                  : "border-[var(--line)] bg-white/[0.02] text-[var(--muted)] hover:bg-white/[0.05] hover:text-[var(--text)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.35 }}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[rgba(20,23,19,0.72)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(245,236,221,0.22)] hover:bg-[rgba(24,28,23,0.86)] sm:p-7 ${
                  project.featured && index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[var(--accent)] via-[rgba(245,236,221,0.6)] to-transparent" />
                <div className="absolute right-4 top-4 text-7xl opacity-[0.08] transition-transform duration-300 group-hover:scale-110">
                  {project.emoji}
                </div>

                <div className="relative flex h-full flex-col">
                  <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-3">
                      <div className="section-label">
                        {project.categories.filter((cat) => cat !== "all").join(" / ")}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.platforms.map((platform) => (
                          <span
                            key={platform}
                            className="rounded-full border border-[rgba(245,236,221,0.08)] px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--muted)]"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.featured && (
                      <span className="rounded-full bg-[var(--accent-fade)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="max-w-2xl space-y-4">
                    <h3 className="text-3xl font-semibold tracking-tight text-[var(--text)]">
                      {project.title}
                    </h3>
                    <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted-strong)]">
                      {project.subtitle}
                    </p>
                    <p className="text-base leading-8 text-[var(--muted)]">
                      {project.description}
                    </p>
                  </div>

                  {project.stats && project.stats.length > 0 && (
                    <div className="mt-8 grid gap-4 border-y border-[rgba(245,236,221,0.08)] py-6 sm:grid-cols-2">
                      {project.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="text-sm uppercase tracking-[0.2em] text-[var(--muted-strong)]">
                            {stat.label}
                          </div>
                          <div className="mt-2 text-xl font-semibold text-[var(--text)]">
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[rgba(245,236,221,0.08)] px-3 py-1 text-sm text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--text)] transition-colors hover:text-[var(--accent-strong)]"
                      >
                        {link.label}
                        <ArrowUpRight size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
