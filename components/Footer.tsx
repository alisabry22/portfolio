import { contactInfo } from "@/app/data/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--line)] py-12">
      {/* Thin gradient accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-40" />

      <div className="mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <div>
            <div
              className="font-display leading-none text-[var(--text)]"
              style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)" }}
            >
              Ali <span className="gradient-text">Sabry</span>
            </div>
            <div className="mt-1.5 text-[0.82rem]">
              Senior Flutter · SaaS · AI product engineering
            </div>
          </div>

          <a
            href={`mailto:${contactInfo.email}`}
            className="transition-colors hover:text-[var(--accent-strong)]"
          >
            {contactInfo.email}
          </a>

          <div className="flex items-center gap-6">
            {[
              { href: "#about", label: "About" },
              { href: "#projects", label: "Work" },
              { href: "#skills", label: "Skills" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="transition-colors hover:text-[var(--accent-strong)]"
              >
                {label}
              </a>
            ))}
            <span className="opacity-30">© 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
