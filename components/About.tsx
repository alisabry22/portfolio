"use client";

import { motion } from "framer-motion";
import { services } from "@/app/data/site";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-[var(--line)] py-24 sm:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-[60vh] w-[40vw] rounded-full bg-[var(--accent-2)] opacity-[0.04] blur-[120px]" />

      <div className="mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid gap-12 pb-20 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="section-label">Why clients call</p>
            <h2
              className="font-display leading-[0.9] tracking-[-0.02em] text-[var(--text)]"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              Built for founders.
              <br />
              <span className="gradient-text">Not for portfolios.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-5 text-base leading-[1.9] text-[var(--muted)] sm:text-lg">
            <p>
              I work across product thinking, interface polish, and engineering
              execution so the final result does not feel stitched together by
              three separate teams.
            </p>
            <p>
              From medical delivery products in Egypt to AI-powered finance and
              social publishing tools — I focus on products that have to perform
              in the real world, not just screenshots.
            </p>
          </div>
        </div>

        {/* Services list */}
        <div className="border-t border-[var(--line)]">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group grid gap-6 border-b border-[var(--line)] py-9 sm:py-12 md:grid-cols-[120px_1fr] md:items-start lg:grid-cols-[160px_1fr]"
            >
              <div className="font-mono text-[0.68rem] font-bold tracking-[0.22em] text-[var(--accent)] pt-1">
                0{index + 1}
              </div>
              <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-14">
                <h3 className="text-xl font-bold leading-snug text-[var(--text)] transition-colors group-hover:text-[var(--accent-strong)] sm:text-2xl">
                  {service.title}
                </h3>
                <p className="text-base leading-[1.9] text-[var(--muted)]">
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
