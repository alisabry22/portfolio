"use client";

import { motion } from "framer-motion";
import { services } from "@/app/data/site";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-[var(--line)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid gap-10 pb-16 lg:grid-cols-2 lg:pb-20">
          <div className="space-y-4">
            <p className="section-label">Why clients call</p>
            <h2
              className="font-display leading-[0.92] tracking-[-0.02em] text-[var(--text)]"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              Built for founders.
              <br />
              Not for portfolios.
            </h2>
          </div>
          <div className="flex flex-col justify-end space-y-5 text-base leading-[1.9] text-[var(--muted)] sm:text-lg">
            <p>
              I work across product thinking, interface polish, and engineering
              execution so the final result does not feel stitched together by
              three separate teams.
            </p>
            <p>
              From medical delivery products in Egypt to AI-powered finance and
              social publishing tools, I focus on products that have to perform
              in the real world — not just in screenshots.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="border-t border-[var(--line)]">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="grid gap-6 border-b border-[var(--line)] py-9 sm:py-11 md:grid-cols-[100px_1fr] md:items-start lg:grid-cols-[140px_1fr]"
            >
              <div className="section-label pt-1 text-[var(--accent)]">
                0{index + 1}
              </div>
              <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-12">
                <h3 className="text-xl font-bold leading-snug text-[var(--text)] sm:text-2xl">
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
