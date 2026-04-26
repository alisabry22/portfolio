"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects, categories, Category } from "@/app/data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "all" || p.categories.includes(activeCategory),
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-[var(--line)] py-24 sm:py-32"
    >
      {/* bg glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[50vh] w-[40vw] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[120px]" />

      <div className="mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid gap-10 pb-16 lg:grid-cols-2 lg:items-end lg:pb-20">
          <div className="space-y-4">
            <p className="section-label">Selected work</p>
            <h2
              className="font-display leading-[0.9] tracking-[-0.02em] text-[var(--text)]"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              Products with
              <br />
              <span className="gradient-text">real users.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-[1.9] text-[var(--muted)] sm:text-lg lg:pb-1">
            Apps spanning AI finance, social publishing, health delivery,
            education, and branded commerce — each shipped and in the hands of
            real people.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-2 border-b border-[var(--line)] pb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? "border-[var(--accent)] bg-[var(--accent)] text-white shadow-[0_0_16px_var(--accent-glow)]"
                  : "border-[var(--line)] bg-transparent text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className={`glass-card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(124,92,252,0.3)] hover:shadow-[0_8px_40px_rgba(124,92,252,0.1)] sm:p-7 ${
                  project.featured && index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                {/* Top accent glow line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-60" />

                {/* Large emoji watermark */}
                <div className="pointer-events-none absolute right-5 top-5 select-none text-7xl opacity-[0.07] transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.12]">
                  {project.emoji}
                </div>

                <div className="relative flex h-full flex-col">
                  {/* Badges row */}
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-2">
                      {project.platforms.map((platform) => (
                        <span key={platform} className="tag-pill">
                          {platform}
                        </span>
                      ))}
                    </div>
                    {project.featured && (
                      <span className="rounded-full border border-[rgba(124,92,252,0.3)] bg-[rgba(124,92,252,0.12)] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title block */}
                  <div className={`space-y-2.5 ${project.featured && index === 0 ? "max-w-2xl" : ""}`}>
                    <h3 className="text-2xl font-bold tracking-tight text-[var(--text)] transition-colors group-hover:text-[var(--accent-strong)] sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[var(--accent)]">
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
                          <div className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[var(--muted)]">
                            {stat.label}
                          </div>
                          <div className="mt-1 text-lg font-bold text-[var(--text)]">
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-7 flex flex-wrap items-center gap-5">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--muted)] transition-all hover:text-[var(--accent-strong)] hover:gap-2"
                      >
                        {link.label}
                        <ExternalLink size={13} />
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
