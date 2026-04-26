import { contactInfo } from "@/app/data/site";

export default function Footer() {
  return (
    <footer className="divider py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--text)] text-[var(--bg)] text-[0.65rem] font-black">
            AS
          </div>
          <div className="text-sm">
            <span className="font-semibold text-[var(--text)]">Ali Sabry</span>
            <span className="ml-2 text-[var(--muted)]">
              Senior Flutter Developer
            </span>
          </div>
        </div>

        <a
          href={`mailto:${contactInfo.email}`}
          className="text-sm text-[var(--text-2)] transition-colors hover:text-[var(--text)]"
        >
          {contactInfo.email}
        </a>

        <div className="flex items-center gap-5 text-sm text-[var(--text-2)]">
          <a href="#work" className="hover:text-[var(--text)]">
            Work
          </a>
          <a href="#about" className="hover:text-[var(--text)]">
            About
          </a>
          <a href="#stack" className="hover:text-[var(--text)]">
            Stack
          </a>
          <span className="text-[var(--muted)]">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
