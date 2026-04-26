import { contactInfo } from "@/app/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-10">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-5 text-sm text-[var(--muted)] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <div>
          <div className="font-display text-2xl leading-none text-[var(--text)]">
            Ali Sabry
          </div>
          <div className="mt-1.5">
            Mobile, SaaS, and AI product engineering.
          </div>
        </div>

        <div>{contactInfo.email}</div>

        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="transition-colors hover:text-[var(--text)]"
          >
            About
          </a>
          <a
            href="#projects"
            className="transition-colors hover:text-[var(--text)]"
          >
            Work
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-[var(--text)]"
          >
            Contact
          </a>
          <span className="opacity-40">© 2025</span>
        </div>
      </div>
    </footer>
  );
}
