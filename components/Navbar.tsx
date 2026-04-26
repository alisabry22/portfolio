"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { contactInfo } from "@/app/data/site";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Capabilities" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--line)] bg-[rgba(17,19,17,0.84)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <span className="section-label hidden sm:block">Portfolio</span>
          <div>
            <div className="text-sm text-[var(--muted)]">Ali Sabry</div>
            <div className="font-display text-2xl leading-none text-[var(--text)]">
              Product Engineer
            </div>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide text-[var(--muted)] transition-colors duration-200 hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${contactInfo.email}`}
          className="hidden rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold text-[var(--text)] transition-all duration-200 hover:border-[rgba(245,236,221,0.24)] hover:bg-white/5 md:inline-flex"
        >
          Start a project
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-1 text-[var(--muted)] transition-colors hover:text-[var(--text)] md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-b border-[var(--line)] bg-[rgba(17,19,17,0.96)] px-5 py-5 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-1 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${contactInfo.email}`}
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[var(--text)] px-5 py-3 text-sm font-semibold text-[#151612]"
              >
                Start a project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
