"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import profilePhoto from "@/public/ali-sabry-photo.jpg";
import { contactInfo, leadMetrics } from "@/app/data/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] border-b border-[var(--line)]"
    >
      <div className="mx-auto grid min-h-[100svh] max-w-[1280px] items-stretch px-5 sm:px-8 lg:grid-cols-[1fr_460px] lg:px-12">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex items-center py-28 pt-36 lg:py-32"
        >
          <div className="flex w-full max-w-[600px] flex-col gap-9">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              <span className="section-label">Available for new projects</span>
            </div>

            <div>
              <h1
                className="font-display leading-[0.88] tracking-[-0.02em] text-[var(--text)]"
                style={{ fontSize: "clamp(4.5rem, 12vw, 9.5rem)" }}
              >
                Ali
                <br />
                Sabry
              </h1>
              <p className="mt-6 max-w-[32ch] text-xl font-semibold leading-[1.4] text-[var(--muted-strong)] sm:text-2xl">
                Product-focused engineering for launches that need both taste
                and speed.
              </p>
            </div>

            <p className="max-w-[44ch] text-base leading-[1.9] text-[var(--muted)] sm:text-lg">
              I design and build mobile apps, web experiences, and AI-powered
              products that look sharp, move fast, and give founders a clearer
              path to traction.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${contactInfo.email}?subject=Project%20Inquiry%20for%20Ali%20Sabry`}
                className="primary-button"
              >
                <Mail size={16} />
                Email me
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
            </div>

            <div className="accent-line max-w-[380px]" />

            <div className="grid grid-cols-3 gap-6">
              {leadMetrics.map((metric) => (
                <div key={metric.label}>
                  <div className="font-display text-[2.5rem] leading-none text-[var(--text)]">
                    {metric.value}
                  </div>
                  <div className="mt-1.5 text-[0.67rem] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: photo */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: "easeOut" }}
          className="relative hidden lg:flex lg:items-center lg:py-10"
        >
          <div className="relative h-[82vh] w-full overflow-hidden rounded-2xl border border-[var(--line)] shadow-[0_8px_48px_rgba(0,0,0,0.10)]">
            <Image
              src={profilePhoto}
              alt="Ali Sabry"
              fill
              priority
              sizes="460px"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[rgba(249,247,243,0.80)] to-transparent" />

            <div className="absolute left-4 top-4 rounded-full border border-[var(--line)] bg-[rgba(249,247,243,0.88)] px-4 py-2 backdrop-blur-sm">
              <span className="text-xs font-bold tracking-wide text-[var(--text)]">
                Based in Egypt
              </span>
            </div>

            <div className="absolute bottom-6 left-4 right-4 rounded-xl border border-[var(--line)] bg-[rgba(249,247,243,0.90)] p-4 backdrop-blur-sm">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
                Shipping since day one
              </p>
              <p className="mt-1 text-sm font-bold text-[var(--text)]">
                Mobile · SaaS · AI Products
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
