"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { deliveryPoints } from "@/app/data/site";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--bg-soft)] py-16 sm:py-20"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-[-10vw] top-[-5vh] h-[60vh] w-[40vw] rounded-full bg-[var(--accent-2)] opacity-[0.05] blur-[130px]" />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid gap-6 pb-10 lg:grid-cols-2 lg:gap-10 lg:pb-12">
          <div className="space-y-3">
            <p className="section-label">Capabilities</p>
            <h2
              className="font-display leading-[0.92] tracking-[-0.02em] text-[var(--text)]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)" }}
            >
              What I take{" "}
              <span className="gradient-text">off your plate.</span>
            </h2>
          </div>
          <p className="flex items-end pb-1 max-w-xl text-sm leading-[1.75] text-[var(--muted)] sm:text-base">
            I step in at strategy, build, or polish level — helping products
            gain momentum fast without the coordination overhead.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {deliveryPoints.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card group p-6 transition-all duration-300 hover:border-[rgba(124,92,252,0.28)] hover:-translate-y-0.5"
            >
              <div className="mb-2 font-mono text-[0.62rem] font-bold tracking-[0.28em] text-[var(--accent)]">
                0{index + 1}
              </div>
              <h3 className="mb-5 text-lg font-bold leading-snug text-[var(--text)] transition-colors group-hover:text-[var(--accent-strong)]">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--muted)]">
                    <Check
                      size={13}
                      className="mt-0.5 flex-shrink-0 text-[var(--accent)] opacity-70"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
