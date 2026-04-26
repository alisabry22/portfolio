"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Mail, MessageCircle } from "lucide-react";
import profilePhoto from "@/public/ali-sabry-photo.jpg";
import { contactInfo, leadMetrics } from "@/app/data/site";

const heroLinks = [
  {
    label: "Email me",
    href: `mailto:${contactInfo.email}?subject=Project%20Inquiry%20for%20Ali%20Sabry`,
    icon: Mail,
    style: "primary" as const,
  },
  {
    label: "WhatsApp",
    href: contactInfo.whatsappHref,
    icon: MessageCircle,
    style: "secondary" as const,
  },
  {
    label: "LinkedIn",
    href: contactInfo.linkedIn,
    icon: Globe,
    style: "secondary" as const,
  },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute left-[-8rem] top-20 h-64 w-64 rounded-full bg-[var(--accent-fade)] blur-[120px]" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[rgba(90,115,87,0.18)] blur-[140px]" />

      <div className="grid min-h-[100svh] items-stretch pt-20 lg:grid-cols-[minmax(0,0.85fr)_minmax(38vw,1fr)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center px-5 pb-12 pt-10 sm:px-8 lg:px-12 lg:pb-16"
        >
          <div className="mx-auto flex w-full max-w-[620px] flex-col gap-8 lg:mx-0">
            <div className="flex flex-wrap items-center gap-3">
              <span className="section-label">Available for new builds</span>
              <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">
                Mobile apps, SaaS, AI features
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-[12ch] leading-none">
                <span className="font-display block text-[4.5rem] tracking-[-0.04em] text-[var(--text)] sm:text-[5.75rem] lg:text-[7rem]">
                  Ali Sabry
                </span>
                <span className="mt-3 block max-w-[12ch] text-2xl font-semibold leading-[1.05] text-[var(--text)] sm:text-3xl lg:text-[2.65rem]">
                  Product-focused engineering for launches that need both taste
                  and speed.
                </span>
              </h1>

              <p className="max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                I design and build mobile apps, web experiences, and AI-powered
                products that look sharp, move fast, and give founders a clearer
                path to traction.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {heroLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noreferrer"
                        : undefined
                    }
                    className={
                      link.style === "primary"
                        ? "primary-button"
                        : "secondary-button"
                    }
                  >
                    <Icon size={18} />
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="accent-line max-w-xl" />

            <div className="grid gap-5 sm:grid-cols-3">
              {leadMetrics.map((metric) => (
                <div key={metric.label} className="space-y-1">
                  <div className="font-display text-4xl leading-none text-[var(--text)]">
                    {metric.value}
                  </div>
                  <div className="text-sm uppercase tracking-[0.18em] text-[var(--muted-strong)]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="max-w-lg text-sm leading-7 text-[var(--muted-strong)]">
              Best fit for founders, early teams, and businesses that need a
              premium portfolio site, an MVP, a polished app release, or a
              stronger AI feature set without dragging through months of
              hand-holding.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="relative px-5 pb-6 sm:px-8 lg:px-0 lg:pb-0"
        >
          <div className="hero-image-shell relative mx-auto h-[28rem] max-w-[36rem] lg:h-full lg:max-w-none lg:rounded-none lg:border-x-0 lg:border-b-0">
            <Image
              src={profilePhoto}
              alt="Ali Sabry standing outdoors"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-center"
            />
            <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between">
              <div className="surface soft-shadow rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                Based in Egypt
              </div>
              <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#f7efdf]">
                Shipping since day one
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8 lg:p-10">
              <div className="max-w-md space-y-3">
                <p className="section-label text-[#efe4d4]">Lead with clarity</p>
                <p className="font-display text-3xl leading-tight text-[#fff8ee] sm:text-4xl">
                  Stronger product visuals, sharper messaging, and a build pace
                  that gets to market.
                </p>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#fff8ee]"
                >
                  View selected work
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
