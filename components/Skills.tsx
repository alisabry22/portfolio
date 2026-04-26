"use client";

import { motion } from "framer-motion";
import { deliveryPoints } from "@/app/data/site";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-[var(--line)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid gap-8 pb-16 lg:grid-cols-2 lg:pb-20">
          <div className="space-y-4">
            <p className="section-label">Capabilities</p>
            <h2
              className="font-display leading-[0.92] tracking-[-0.02em] text-[var(--text)]"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              What I take
              <br />
              off your plate.
            </h2>
          </div>
          <p className="flex items-end pb-1 max-w-xl text-base leading-[1.9] text-[var(--muted)] sm:text-lg">
            I can step in at strategy, build, or polish level — helping products
            gain momentum fast without heavy coordination overhead.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 xl:grid-cols-4">
          {deliveryPoints.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.09 }}
              className="bg-[var(--bg)] p-7 sm:p-8"
            >
              <div className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.26em] text-[var(--accent)]">
                0{index + 1}
              </div>
              <h3 className="mb-6 text-xl font-bold leading-snug text-[var(--text)]">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-[var(--muted)]"
                  >
                    <span className="h-px w-3 flex-shrink-0 bg-[var(--accent)] opacity-50" />
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
