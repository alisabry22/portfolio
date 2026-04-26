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
    const intro = brief.name.trim()
      ? `Hi Ali, I'm ${brief.name}.`
      : "Hi Ali,";
    const emailLine = brief.email.trim()
      ? `My email is ${brief.email}.`
      : "";
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
        `${brief.projectType} project inquiry for Ali Sabry`
      );
      const body = encodeURIComponent(message);
      window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
      return;
    }

    const whatsappMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/201021142545?text=${whatsappMessage}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = event.currentTarget;
    setBrief((current) => ({
      ...current,
      [target.name]: target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="surface soft-shadow relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <div className="absolute left-[-5rem] top-[-4rem] h-48 w-48 rounded-full bg-[var(--accent-fade)] blur-[100px]" />
          <div className="absolute bottom-[-5rem] right-[-4rem] h-56 w-56 rounded-full bg-[rgba(90,115,87,0.16)] blur-[120px]" />

          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1fr)]">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="section-label">Let&apos;s build</p>
                <h2 className="font-display max-w-[10ch] text-5xl leading-[0.95] tracking-[-0.03em] text-[var(--text)] sm:text-6xl">
                  Make the next launch look sharper and convert harder.
                </h2>
                <p className="max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                  If you already know what you need, reach out directly. If the
                  scope is still rough, use the brief builder and I&apos;ll get a
                  better picture fast.
                </p>
              </div>

              <div className="grid gap-4">
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
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        channel.href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      className="group flex items-center justify-between rounded-[1.4rem] border border-[var(--line)] bg-black/10 px-5 py-4 transition-colors hover:bg-white/[0.04]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-full border border-[rgba(245,236,221,0.08)] p-3 text-[var(--text)]">
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted-strong)]">
                            {channel.label}
                          </div>
                          <div className="mt-1 text-base font-semibold text-[var(--text)]">
                            {channel.value}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="text-[var(--muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--text)]"
                      />
                    </a>
                  );
                })}
              </div>

              <p className="text-sm leading-7 text-[var(--muted-strong)]">
                Best for new product builds, premium portfolio or landing-page
                redesigns, AI feature rollouts, and products that need a faster
                release rhythm.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="rounded-[1.6rem] border border-[rgba(245,236,221,0.09)] bg-[rgba(9,10,9,0.26)] p-6 sm:p-7"
            >
              <div className="mb-6 space-y-2">
                <h3 className="text-2xl font-semibold text-[var(--text)]">
                  Draft your message
                </h3>
                <p className="text-sm leading-7 text-[var(--muted)]">
                  Fill this out once and open it in email or WhatsApp with the
                  details already written.
                </p>
              </div>

              <form ref={formRef} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-strong)]">
                      Your name
                    </label>
                    <input
                      required
                      name="name"
                      type="text"
                      value={brief.name}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-[var(--line)] bg-white/[0.03] px-4 py-3.5 text-sm text-[var(--text)] outline-none transition-colors placeholder:text-[var(--muted-strong)] focus:border-[rgba(245,236,221,0.24)]"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-strong)]">
                      Your email
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      value={brief.email}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-[var(--line)] bg-white/[0.03] px-4 py-3.5 text-sm text-[var(--text)] outline-none transition-colors placeholder:text-[var(--muted-strong)] focus:border-[rgba(245,236,221,0.24)]"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-strong)]">
                      Project type
                    </label>
                    <select
                      name="projectType"
                      value={brief.projectType}
                      onChange={handleChange}
                      className="w-full cursor-pointer rounded-2xl border border-[var(--line)] bg-white/[0.03] px-4 py-3.5 text-sm text-[var(--text)] outline-none transition-colors focus:border-[rgba(245,236,221,0.24)]"
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
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-strong)]">
                      Ideal timeline
                    </label>
                    <input
                      name="timeline"
                      type="text"
                      value={brief.timeline}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-[var(--line)] bg-white/[0.03] px-4 py-3.5 text-sm text-[var(--text)] outline-none transition-colors placeholder:text-[var(--muted-strong)] focus:border-[rgba(245,236,221,0.24)]"
                      placeholder="Example: start this month"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-strong)]">
                    Quick brief
                  </label>
                  <textarea
                    required
                    name="summary"
                    rows={5}
                    value={brief.summary}
                    onChange={handleChange}
                    className="w-full resize-none rounded-[1.4rem] border border-[var(--line)] bg-white/[0.03] px-4 py-3.5 text-sm leading-7 text-[var(--text)] outline-none transition-colors placeholder:text-[var(--muted-strong)] focus:border-[rgba(245,236,221,0.24)]"
                    placeholder="What are you building, what matters most, and what kind of help do you want from me?"
                  />
                </div>

                <div className="grid gap-3 pt-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => openDraft("email")}
                    className="primary-button"
                  >
                    <Mail size={18} />
                    Draft email
                  </button>
                  <button
                    type="button"
                    onClick={() => openDraft("whatsapp")}
                    className="secondary-button"
                  >
                    <MessageCircle size={18} />
                    Open WhatsApp
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
