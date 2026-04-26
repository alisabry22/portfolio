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
          ? "border-b border-[var(--line)] bg-[rgba(9,9,15,0.88)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-[1300px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-7 w-7 rounded-lg bg-[var(--accent)] flex items-center justify-center shadow-[0_0_16px_var(--accent-glow)] transition-transform group-hover:scale-110">
            <span className="text-[0.6rem] font-black text-white">AS</span>
          </div>
          <span className="text-sm font-bold tracking-tight text-[var(--text)]">
            Ali Sabry
          </span>
          <span className="hidden h-4 w-px bg-[var(--line-strong)] sm:block" />
          <span className="hidden text-xs text-[var(--muted)] sm:block">
            Product Engineer
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[var(--muted)] transition-colors duration-200 hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${contactInfo.email}`}
          className="hidden rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_var(--accent-glow)] transition-all duration-200 hover:bg-[var(--accent-strong)] hover:shadow-[0_0_28px_var(--accent-glow)] md:inline-flex"
        >
          Hire me
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-1 text-[var(--muted)] transition-colors hover:text-[var(--text)] md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-t border-[var(--line)] bg-[rgba(9,9,15,0.97)] backdrop-blur-2xl md:hidden"
          >
            <div className="mx-auto flex max-w-[1300px] flex-col px-5 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[var(--line)] py-4 text-base font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)] last:border-b-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${contactInfo.email}`}
                onClick={() => setMenuOpen(false)}
                className="mt-4 rounded-full bg-[var(--accent)] py-3 text-center text-sm font-bold text-white"
              >
                Hire me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
