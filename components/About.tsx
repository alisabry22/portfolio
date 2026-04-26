"use client";

import { motion } from "framer-motion";
import { services } from "@/app/data/site";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-[var(--line)] py-16 sm:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-[60vh] w-[40vw] rounded-full bg-[var(--accent-2)] opacity-[0.04] blur-[120px]" />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid gap-8 pb-10 lg:grid-cols-2 lg:gap-12 lg:pb-12">
          <div className="space-y-4">
            <p className="section-label">Why clients call</p>
            <h2
              className="font-display leading-[0.92] tracking-[-0.02em] text-[var(--text)]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)" }}
            >
              Built for founders.
              <br />
              <span className="gradient-text">Not for portfolios.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-3 text-base leading-[1.75] text-[var(--muted)]">
            <p>
              I work across product thinking, interface polish, and engineering
              execution so the final result does not feel stitched together by
              three separate teams.
            </p>
            <p>
              From medical delivery products in Egypt to AI-powered finance and
              social publishing tools — I focus on products that perform in the
              real world, not just screenshots.
            </p>
          </div>
        </div>

        {/* Services list */}
        <div className="border-t border-[var(--line)]">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group grid gap-4 border-b border-[var(--line)] py-6 sm:py-8 md:grid-cols-[100px_1fr] md:items-start lg:grid-cols-[140px_1fr]"
            >
              <div className="font-mono text-[0.62rem] font-bold tracking-[0.22em] text-[var(--accent)] pt-1">
                0{index + 1}
              </div>
              <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-10">
                <h3 className="text-lg font-bold leading-snug text-[var(--text)] transition-colors group-hover:text-[var(--accent-strong)] sm:text-xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-[1.75] text-[var(--muted)] sm:text-base">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
