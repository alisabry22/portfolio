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

      <div className="mx-auto grid min-h-[100svh] max-w-[1300px] items-center px-5 sm:px-8 lg:grid-cols-[1fr_480px] lg:gap-12 lg:px-12">
        {/* Left */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-8 py-28 pt-36 lg:py-32"
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
              className="font-display leading-[0.86] tracking-[-0.02em]"
              style={{ fontSize: "clamp(5rem, 13vw, 10.5rem)" }}
            >
              <span className="gradient-text">Ali</span>
              <br />
              <span className="text-[var(--text)]">Sabry</span>
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="max-w-[34ch] text-lg font-semibold leading-[1.5] text-[var(--muted-strong)] sm:text-xl"
          >
            Product-focused engineering for launches that need{" "}
            <em className="not-italic text-[var(--text)]">taste</em> and{" "}
            <em className="not-italic text-[var(--text)]">speed.</em>
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="max-w-[44ch] text-base leading-[1.9] text-[var(--muted)]"
          >
            I design and build mobile apps, web experiences, and AI-powered
            products that look sharp, move fast, and give founders a clearer
            path to traction.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
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

          <motion.div variants={fadeUp} className="accent-line max-w-[420px]" />

          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6">
            {leadMetrics.map((metric) => (
              <div key={metric.label}>
                <div
                  className="font-display leading-none text-[var(--text)]"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                  {metric.value}
                </div>
                <div className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
            <Sparkles size={12} className="text-[var(--accent)]" />
            {["Flutter", "Next.js", "Firebase", "AI / LLM", "RevenueCat"].map((t) => (
              <span key={t} className="tag-pill">{t}</span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:flex lg:items-center lg:py-12"
        >
          <div className="absolute inset-0 scale-[0.85] rounded-3xl bg-[var(--accent)] opacity-20 blur-[60px]" />

          <div className="glass-card glow-accent relative h-[80vh] w-full overflow-hidden">
            <Image
              src={profilePhoto}
              alt="Ali Sabry — Product Engineer"
              fill
              priority
              sizes="480px"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[rgba(9,9,15,0.92)] via-[rgba(9,9,15,0.40)] to-transparent" />

            <div className="absolute left-4 top-4">
              <div className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.6)]" />
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--muted-strong)]">
                  Based in Egypt
                </span>
              </div>
            </div>

            <div className="absolute bottom-5 left-4 right-4">
              <div className="glass-card p-4">
                <p className="section-label mb-1">Shipping since day one</p>
                <p className="text-sm font-bold text-[var(--text)]">
                  Mobile · SaaS · AI Products
                </p>
                <a
                  href="#projects"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[var(--accent-strong)] transition-opacity hover:opacity-75"
                >
                  View selected work
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
