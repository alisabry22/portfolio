"use client";

import { ChangeEvent, useRef, useState } from "react";
import { ArrowUpRight, Globe, Mail, MessageCircle } from "lucide-react";
import { contactChannels, contactInfo } from "@/app/data/site";

type Brief = {
  name: string;
  email: string;
  projectType: string;
  timeline: string;
  summary: string;
};

const initial: Brief = {
  name: "",
  email: "",
  projectType: "Mobile app (Flutter)",
  timeline: "",
  summary: "",
};

export default function Contact() {
  const [b, setB] = useState<Brief>(initial);
  const formRef = useRef<HTMLFormElement>(null);

  const buildMessage = () => {
    const lines = [
      b.name.trim() ? `Hi Ali, I'm ${b.name}.` : "Hi Ali,",
      b.email.trim() ? `Email: ${b.email}` : "",
      `Project: ${b.projectType}`,
      b.timeline.trim() ? `Timeline: ${b.timeline}` : "",
      b.summary.trim() ? `Brief: ${b.summary}` : "",
    ];
    return lines.filter(Boolean).join("\n\n");
  };

  const send = (channel: "email" | "whatsapp") => {
    if (!formRef.current?.reportValidity()) return;
    const message = buildMessage();
    if (channel === "email") {
      const subject = encodeURIComponent(`${b.projectType} — inquiry for Ali Sabry`);
      const body = encodeURIComponent(message);
      window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
      return;
    }
    window.open(
      `https://wa.me/201021142545?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setB((prev) => ({ ...prev, [e.currentTarget.name]: e.currentTarget.value }));

  const channelIcon = (label: string) =>
    label === "Email" ? Mail : label === "WhatsApp" ? MessageCircle : Globe;

  return (
    <section id="contact" className="divider py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Left */}
          <div>
            <span className="eyebrow">Contact</span>
            <h2
              className="mt-4 font-display leading-[1] tracking-[-0.02em] text-[var(--text)]"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
            >
              Let&apos;s build
              <br />
              your next app.
            </h2>
            <p className="mt-5 max-w-md text-[0.95rem] leading-[1.75] text-[var(--text-2)]">
              Send a quick brief and I&apos;ll reply within a day. If you prefer
              to skip the form, reach out directly:
            </p>

            <div className="mt-6 flex flex-col gap-2">
              {contactChannels.map((c) => {
                const Icon = channelIcon(c.label);
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                    className="card group flex items-center justify-between gap-3 px-4 py-3.5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                        <Icon size={15} />
                      </div>
                      <div>
                        <div className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                          {c.label}
                        </div>
                        <div className="text-sm font-medium text-[var(--text)]">
                          {c.value}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-[var(--muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--text)]"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={(e) => e.preventDefault()}
            className="card p-6 sm:p-7"
          >
            <h3 className="text-[0.98rem] font-semibold text-[var(--text)]">
              Project brief
            </h3>
            <p className="mt-1 text-[0.82rem] text-[var(--text-2)]">
              Fill once — open it in email or WhatsApp.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-[var(--text-2)]">
                  Your name
                </span>
                <input
                  required
                  name="name"
                  value={b.name}
                  onChange={onChange}
                  placeholder="Jane Founder"
                  className="field mt-1.5"
                />
              </label>
              <label className="block">
                <span className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-[var(--text-2)]">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  value={b.email}
                  onChange={onChange}
                  placeholder="jane@company.com"
                  className="field mt-1.5"
                />
              </label>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-[var(--text-2)]">
                  Project type
                </span>
                <select
                  name="projectType"
                  value={b.projectType}
                  onChange={onChange}
                  className="field mt-1.5 cursor-pointer"
                >
                  <option>Mobile app (Flutter)</option>
                  <option>Mobile + web product</option>
                  <option>SaaS platform</option>
                  <option>AI feature / integration</option>
                  <option>Landing page / portfolio</option>
                </select>
              </label>
              <label className="block">
                <span className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-[var(--text-2)]">
                  Timeline
                </span>
                <input
                  name="timeline"
                  value={b.timeline}
                  onChange={onChange}
                  placeholder="e.g. starting next month"
                  className="field mt-1.5"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-[var(--text-2)]">
                Brief
              </span>
              <textarea
                required
                name="summary"
                rows={4}
                value={b.summary}
                onChange={onChange}
                placeholder="What are you building, what matters most, and how can I help?"
                className="field mt-1.5 resize-none"
              />
            </label>

            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => send("email")}
                className="btn btn-primary"
              >
                <Mail size={15} />
                Email
              </button>
              <button
                type="button"
                onClick={() => send("whatsapp")}
                className="btn btn-ghost"
              >
                <MessageCircle size={15} />
                WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
