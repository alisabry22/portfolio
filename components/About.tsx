"use client";

import { motion } from "framer-motion";
import { services } from "@/app/data/site";

export default function About() {
  return (
    <section id="about" className="border-t border-[var(--line)] py-24 sm:py-28">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-5">
            <p className="section-label">Why clients call</p>
            <h2 className="font-display max-w-[10ch] text-5xl leading-[0.95] tracking-[-0.03em] text-[var(--text)] sm:text-6xl">
              Built for founders who need a sharper launch, not another vague
              dev process.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
            <p>
              I work across product thinking, interface polish, and engineering
              execution so the final result does not feel stitched together by
              three separate teams.
            </p>
            <p>
              That range matters when the goal is lead generation. The site or
              product has to look credible, explain the offer fast, and still
              ship with enough technical depth to hold up after launch.
            </p>
            <p className="text-[var(--text)]">
              From medical delivery products in Egypt to AI-powered finance and
              social publishing tools, I focus on products that have to perform
              in the real world, not just in screenshots.
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--line)]">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="grid gap-6 border-b border-[var(--line)] py-8 md:grid-cols-[180px_minmax(0,1fr)] md:items-start"
            >
              <div className="section-label pt-1">0{index + 1}</div>
              <div className="grid gap-3 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:gap-10">
                <h3 className="text-2xl font-semibold leading-tight text-[var(--text)] sm:text-[2rem]">
                  {service.title}
                </h3>
                <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
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
