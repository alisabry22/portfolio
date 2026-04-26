"use client";

import { motion } from "framer-motion";
import { deliveryPoints } from "@/app/data/site";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-[var(--line)] bg-[rgba(14,16,13,0.78)] py-24 sm:py-28"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <p className="section-label">Capabilities</p>
            <h2 className="font-display max-w-[10ch] text-5xl leading-[0.95] tracking-[-0.03em] text-[var(--text)] sm:text-6xl">
              What I can take off your plate.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            I can step in at strategy level, build level, or polish level. That
            range helps when a product needs momentum fast and there is no time
            for heavy coordination overhead.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {deliveryPoints.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t border-[var(--line)] pt-6"
            >
              <div className="mb-4 text-xs uppercase tracking-[0.24em] text-[var(--muted-strong)]">
                0{index + 1}
              </div>
              <h3 className="mb-5 text-2xl font-semibold leading-tight text-[var(--text)]">
                {group.title}
              </h3>
              <ul className="space-y-3 text-sm leading-7 text-[var(--muted)] sm:text-[0.95rem]">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-[rgba(245,236,221,0.06)] pb-3 last:border-b-0 last:pb-0"
                  >
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
