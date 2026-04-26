"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, categories, Category } from "@/app/data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "all" || p.categories.includes(activeCategory),
  );

  return (
    <section
      id="projects"
      className="border-t border-[var(--line)] bg-[var(--bg-soft)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid gap-8 pb-14 lg:grid-cols-2 lg:items-end lg:pb-16">
          <div className="space-y-4">
            <p className="section-label">Selected work</p>
            <h2
              className="font-display leading-[0.92] tracking-[-0.02em] text-[var(--text)]"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              Products with
              <br />
              real users.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-[1.9] text-[var(--muted)] sm:text-lg lg:pb-2">
            Apps spanning AI finance, social publishing, health delivery,
            education, and branded commerce. Each one shipped and in the hands
            of real people.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-2.5 border-b border-[var(--line)] pb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? "border-[var(--text)] bg-[var(--text)] text-[var(--bg)]"
                  : "border-[var(--line)] bg-[var(--panel)] text-[var(--muted)] hover:border-[rgba(20,20,18,0.20)] hover:text-[var(--text)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className={`group relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:p-8 ${
                  project.featured && index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[var(--accent)] via-[rgba(194,90,26,0.4)] to-transparent" />

                {/* Emoji watermark */}
                <div className="absolute right-6 top-6 text-6xl opacity-[0.05] transition-opacity duration-300 group-hover:opacity-[0.09]">
                  {project.emoji}
                </div>

                <div className="relative flex h-full flex-col">
                  {/* Top meta */}
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {project.platforms.map((platform) => (
                        <span
                          key={platform}
                          className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-[var(--muted)]"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                    {project.featured && (
                      <span className="rounded-full bg-[var(--accent-fade)] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-[var(--accent)]">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`space-y-3 ${project.featured && index === 0 ? "max-w-2xl" : ""}`}
                  >
                    <h3 className="text-2xl font-bold tracking-tight text-[var(--text)] sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent)]">
                      {project.subtitle}
                    </p>
                    <p className="text-sm leading-[1.9] text-[var(--muted)] sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Stats */}
                  {project.stats && project.stats.length > 0 && (
                    <div className="mt-7 grid gap-4 border-y border-[var(--line)] py-5 sm:grid-cols-2">
                      {project.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
                            {stat.label}
                          </div>
                          <div className="mt-1.5 text-lg font-bold text-[var(--text)]">
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--line)] bg-[var(--bg-soft)] px-2.5 py-1 text-xs text-[var(--muted-strong)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-7 flex flex-wrap gap-5">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--muted-strong)] transition-colors hover:text-[var(--accent)]"
                      >
                        {link.label}
                        <ArrowUpRight size={14} />
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
