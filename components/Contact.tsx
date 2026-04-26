"use client";

import { ChangeEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Mail, MessageCircle } from "lucide-react";
import { contactChannels, contactInfo } from "@/app/data/site";

type BriefState = {
  name: string;
  email: string;
  projectType: string;
  timeline: string;
  summary: string;
};

const initialBrief: BriefState = {
  name: "",
  email: "",
  projectType: "Mobile app",
  timeline: "",
  summary: "",
};

export default function Contact() {
  const [brief, setBrief] = useState<BriefState>(initialBrief);
  const formRef = useRef<HTMLFormElement>(null);

  const buildMessage = () => {
    const intro = brief.name.trim() ? `Hi Ali, I'm ${brief.name}.` : "Hi Ali,";
    const emailLine = brief.email.trim() ? `My email is ${brief.email}.` : "";
    const projectLine = `I'm interested in a ${brief.projectType.toLowerCase()} project.`;
    const timelineLine = brief.timeline.trim()
      ? `Ideal timeline: ${brief.timeline}.`
      : "";
    const summaryLine = brief.summary.trim()
      ? `Project brief: ${brief.summary}`
      : "";

    return [intro, emailLine, projectLine, timelineLine, summaryLine]
      .filter(Boolean)
      .join("\n\n");
  };

  const openDraft = (channel: "email" | "whatsapp") => {
    if (!formRef.current?.reportValidity()) {
      return;
    }

    const message = buildMessage();

    if (channel === "email") {
      const subject = encodeURIComponent(
        `${brief.projectType} project inquiry for Ali Sabry`,
      );
      const body = encodeURIComponent(message);
      window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
      return;
    }

    const whatsappMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/201021142545?text=${whatsappMessage}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const target = event.currentTarget;
    setBrief((current) => ({
      ...current,
      [target.name]: target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="border-t border-[var(--line)] bg-[var(--bg-soft)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Left */}
          <div className="space-y-10">
            <div className="space-y-5">
              <p className="section-label">Let&apos;s build</p>
              <h2
                className="font-display leading-[0.92] tracking-[-0.02em] text-[var(--text)]"
                style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
              >
                Make the next
                <br />
                launch land.
              </h2>
              <p className="max-w-md text-base leading-[1.9] text-[var(--muted)] sm:text-lg">
                If you know what you need, reach out directly. If the scope is
                still rough, use the brief builder and I&apos;ll get a clearer
                picture fast.
              </p>
            </div>

            <div className="space-y-3">
              {contactChannels.map((channel) => {
                const Icon =
                  channel.label === "Email"
                    ? Mail
                    : channel.label === "WhatsApp"
                      ? MessageCircle
                      : Globe;

                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={
                      channel.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      channel.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="group flex items-center justify-between rounded-xl border border-[var(--line)] bg-[var(--panel)] px-5 py-4 transition-all hover:border-[rgba(20,20,18,0.20)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-full border border-[var(--line)] p-2.5 text-[var(--text)]">
                        <Icon size={17} />
                      </div>
                      <div>
                        <div className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
                          {channel.label}
                        </div>
                        <div className="mt-0.5 text-sm font-semibold text-[var(--text)]">
                          {channel.value}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-[var(--muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--text)]"
                    />
                  </a>
                );
              })}
            </div>

            <p className="text-sm leading-[1.8] text-[var(--muted)]">
              Best fit for new product builds, premium portfolio or landing-page
              redesigns, AI feature rollouts, and products needing a faster
              release rhythm.
            </p>
          </div>

          {/* Right: Brief builder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-7 soft-shadow sm:p-8"
          >
            <div className="mb-7 space-y-1.5">
              <h3 className="text-xl font-bold text-[var(--text)]">
                Draft your message
              </h3>
              <p className="text-sm leading-[1.8] text-[var(--muted)]">
                Fill this out once and open it in email or WhatsApp with the
                details already written.
              </p>
            </div>

            <form ref={formRef} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--muted-strong)]">
                    Your name
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    value={brief.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[rgba(20,20,18,0.28)]"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--muted-strong)]">
                    Your email
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    value={brief.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[rgba(20,20,18,0.28)]"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--muted-strong)]">
                    Project type
                  </label>
                  <select
                    name="projectType"
                    value={brief.projectType}
                    onChange={handleChange}
                    className="w-full cursor-pointer rounded-xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors focus:border-[rgba(20,20,18,0.28)]"
                  >
                    <option value="Mobile app">Mobile app</option>
                    <option value="Portfolio or landing page">
                      Portfolio or landing page
                    </option>
                    <option value="SaaS platform">SaaS platform</option>
                    <option value="AI feature or integration">
                      AI feature or integration
                    </option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--muted-strong)]">
                    Ideal timeline
                  </label>
                  <input
                    name="timeline"
                    type="text"
                    value={brief.timeline}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[rgba(20,20,18,0.28)]"
                    placeholder="e.g. start this month"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--muted-strong)]">
                  Quick brief
                </label>
                <textarea
                  required
                  name="summary"
                  rows={4}
                  value={brief.summary}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-3 text-sm leading-[1.8] text-[var(--text)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[rgba(20,20,18,0.28)]"
                  placeholder="What are you building, what matters most, and what kind of help do you want from me?"
                />
              </div>

              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => openDraft("email")}
                  className="primary-button"
                >
                  <Mail size={16} />
                  Draft email
                </button>
                <button
                  type="button"
                  onClick={() => openDraft("whatsapp")}
                  className="secondary-button"
                >
                  <MessageCircle size={16} />
                  Open WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
