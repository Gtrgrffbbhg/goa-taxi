"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { siteData } from "@/data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(
    "Hello, I would like to book a taxi in Goa."
  )}`;

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Fleet", href: "#fleet" },
    { label: "Packages", href: "#packages" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/85 shadow-[0_4px_20px_rgba(16,37,30,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Brand */}
        <a
          href="#home"
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white shadow-[0_6px_16px_rgba(8,116,95,0.2)] transition duration-300 group-hover:-rotate-2 group-hover:scale-105">
            <span className="text-lg font-black">G</span>

            <span className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-[var(--accent)] opacity-90" />
          </div>

          <div>
            <p className="text-[15px] font-black leading-none tracking-tight text-[var(--primary)]">
              {siteData.businessName}
            </p>

            <p className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
              Goa Taxi Service
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-[13px] font-semibold text-[var(--muted)] transition-all duration-200 hover:bg-[var(--surface-green)] hover:text-[var(--primary)]"
            >
              {link.label}
            </a>
          ))}

          <div className="ml-3 h-6 w-px bg-[var(--border)]" />

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group ml-3 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_7px_18px_rgba(8,116,95,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-dark)] hover:shadow-[0_10px_24px_rgba(8,116,95,0.25)]"
          >
            Book Taxi
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-[var(--border)] bg-white p-2.5 text-[var(--primary)] shadow-sm transition-all hover:border-[var(--primary)]/20 hover:bg-[var(--surface-green)] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="border-t border-[var(--border)] bg-white/95 px-5 py-5 shadow-[0_15px_30px_rgba(16,37,30,0.08)] backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-lg flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[var(--muted)] transition hover:bg-[var(--surface-green)] hover:text-[var(--primary)]"
              >
                {link.label}
              </a>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(8,116,95,0.18)]"
            >
              Book Taxi on WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}