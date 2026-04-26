"use client";

import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import profilePhoto from "@/public/ali-sabry-photo.jpg";
import { contactInfo, leadMetrics } from "@/app/data/site";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="grain" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.08] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
          {/* Copy */}
          <div className="flex flex-col gap-6 py-8 sm:py-12">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 items-center justify-center">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[0.78rem] font-medium text-[var(--text-2)]">
                Available for new mobile projects
              </span>
            </div>

            <h1
              className="font-display leading-[0.95] tracking-[-0.02em] text-[var(--text)]"
              style={{ fontSize: "clamp(2.75rem, 7vw, 5rem)" }}
            >
              Senior Flutter developer
              <br />
              shipping{" "}
              <span className="italic text-[var(--text-2)]">production-grade</span>{" "}
              mobile apps.
            </h1>

            <p className="max-w-[52ch] text-[0.98rem] leading-[1.7] text-[var(--text-2)] sm:text-[1.05rem]">
              I&apos;m Ali — I build polished iOS &amp; Android apps in Flutter for
              founders and teams who care about craft. 6+ years writing Dart,
              30+ apps shipped to the stores, and a track record of launching
              fast without cutting corners.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href={`mailto:${contactInfo.email}?subject=Flutter%20project%20inquiry`}
                className="btn btn-primary"
              >
                <Mail size={15} />
                Start a project
              </a>
              <a href="#work" className="btn btn-ghost">
                See work
                <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Metrics */}
            <div className="mt-4 grid grid-cols-3 gap-6 border-t border-[var(--border)] pt-6">
              {leadMetrics.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-[1.6rem] leading-none text-[var(--text)] sm:text-[1.9rem]">
                    {m.value}
                  </div>
                  <div className="mt-1.5 text-[0.7rem] uppercase tracking-[0.16em] text-[var(--muted)]">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="relative mx-auto w-full max-w-[300px] lg:max-w-none">
            <div className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-br from-[var(--accent)]/30 to-[var(--accent-2)]/10 blur-2xl" />
            <div className="card relative aspect-[4/5] overflow-hidden rounded-[20px] !border-[var(--border-strong)]">
              <Image
                src={profilePhoto}
                alt="Ali Sabry — Senior Flutter Developer"
                fill
                priority
                sizes="(min-width: 1024px) 360px, 80vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[rgba(10,10,12,0.95)] to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                <div>
                  <div className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--text-2)]">
                    Based in
                  </div>
                  <div className="mt-0.5 text-sm font-semibold text-[var(--text)]">
                    Egypt · Remote
                  </div>
                </div>
                <span className="tag tag-accent">Flutter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
