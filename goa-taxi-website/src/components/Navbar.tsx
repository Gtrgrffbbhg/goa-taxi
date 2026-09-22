"use client";

import { Menu, X } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Brand */}
        <a
          href="#home"
          className="group flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)] text-white shadow-sm transition group-hover:scale-105">
            <span className="text-lg font-black">
              G
            </span>
          </div>

          <div>
            <p className="text-base font-extrabold leading-none tracking-tight text-[var(--primary)]">
              {siteData.businessName}
            </p>

            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Goa Taxi Service
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--primary)]"
            >
              {link.label}
            </a>
          ))}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[var(--primary-dark)] hover:shadow-md"
          >
            Book Taxi
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-[var(--border)] p-2.5 text-[var(--primary)] transition hover:bg-[var(--background)] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="border-t border-[var(--border)] bg-white px-5 py-5 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-lg flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[var(--muted)] transition hover:bg-[var(--background)] hover:text-[var(--primary)]"
              >
                {link.label}
              </a>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-xl bg-[var(--primary)] px-5 py-3.5 text-center text-sm font-bold text-white"
            >
              Book Taxi on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}