"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle, Sparkles } from "lucide-react";
import profilePhoto from "@/public/ali-sabry-photo.jpg";
import { contactInfo, leadMetrics } from "@/app/data/site";

const stagger = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-[-15vw] top-[-10vh] h-[70vh] w-[70vw] rounded-full bg-[var(--accent)] opacity-[0.07] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-10vw] h-[50vh] w-[50vw] rounded-full bg-[var(--accent-2)] opacity-[0.05] blur-[120px]" />

      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-28 lg:grid-cols-[1.1fr_440px] lg:gap-12 lg:px-12 lg:pb-20">
        {/* Left */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-5"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(124,92,252,0.25)] bg-[rgba(124,92,252,0.1)] px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[var(--accent-strong)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              </span>
              Available for new projects
            </span>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h1
              className="font-display leading-[0.88] tracking-[-0.025em]"
              style={{ fontSize: "clamp(3.75rem, 9vw, 7.5rem)" }}
            >
              <span className="gradient-text">Ali</span>{" "}
              <span className="text-[var(--text)]">Sabry</span>
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="max-w-[40ch] text-base leading-[1.7] text-[var(--muted-strong)] sm:text-lg"
          >
            Product-focused engineering for launches that need{" "}
            <em className="not-italic text-[var(--text)]">taste</em> and{" "}
            <em className="not-italic text-[var(--text)]">speed.</em> I design
            and build mobile apps, web experiences, and AI-powered products
            that move fast and give founders a clearer path to traction.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5 pt-1">
            <a
              href={`mailto:${contactInfo.email}?subject=Project%20Inquiry%20for%20Ali%20Sabry`}
              className="primary-button"
            >
              <Mail size={16} />
              Start a project
            </a>
            <a
              href={contactInfo.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a href="#projects" className="secondary-button">
              View work
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-2 grid grid-cols-3 gap-5 border-t border-[var(--line)] pt-5">
            {leadMetrics.map((metric) => (
              <div key={metric.label}>
                <div
                  className="font-display leading-none text-[var(--text)]"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
                >
                  {metric.value}
                </div>
                <div className="mt-1.5 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-1.5">
            <Sparkles size={12} className="text-[var(--accent)]" />
            {["Flutter", "Next.js", "Firebase", "AI / LLM", "RevenueCat"].map((t) => (
              <span key={t} className="tag-pill">{t}</span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-4 rounded-3xl bg-[var(--accent)] opacity-20 blur-[80px]" />

          <div className="glass-card glow-accent relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={profilePhoto}
              alt="Ali Sabry — Product Engineer"
              fill
              priority
              sizes="460px"
              className="object-cover object-top"
            />
            {/* Bottom gradient mask */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[rgba(9,9,15,0.96)] via-[rgba(9,9,15,0.55)] to-transparent" />

            {/* Top-right Egypt badge */}
            <div className="absolute right-4 top-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[rgba(9,9,15,0.7)] px-3 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.6)]" />
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[var(--muted-strong)]">
                  Egypt
                </span>
              </div>
            </div>

            {/* Bottom info card — inside gradient zone, doesn’t cover face */}
            <div className="absolute inset-x-4 bottom-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                    Shipping since day one
                  </p>
                  <p className="mt-1 text-sm font-bold text-[var(--text)]">
                    Mobile · SaaS · AI
                  </p>
                </div>
                <a
                  href="#projects"
                  aria-label="View selected work"
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--accent)] text-white transition-all hover:scale-105 hover:shadow-[0_0_24px_var(--accent-glow)]"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
