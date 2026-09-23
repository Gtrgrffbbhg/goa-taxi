"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
} from "lucide-react";
import { siteData } from "@/data/siteData";

const faqs = [
  {
    question: "Do you provide taxi service from Mopa Airport?",
    answer:
      "Yes. Airport pickup and drop services can be arranged from Mopa International Airport to hotels, resorts and destinations across Goa.",
  },
  {
    question: "Do you provide taxi service from Dabolim Airport?",
    answer:
      "Yes. We provide airport transfers from Dabolim Airport to destinations across Goa. Share your pickup details and destination to arrange your ride.",
  },
  {
    question: "Can I book a taxi for Goa Tours?",
    answer:
      "Yes. You can book a taxi for North Goa, South Goa, Dudhsagar trips and customised Goa Tours plans based on your travel requirements.",
  },
  {
    question: "How can I book a taxi?",
    answer:
      "Booking is simple. Fill in your trip details and contact us through WhatsApp or phone. We will discuss your requirements and help arrange your ride.",
  },
  {
    question: "Which vehicles are available?",
    answer:
      "Vehicle options can include comfortable sedans, SUVs and larger vehicles depending on availability, group size and your travel requirements.",
  },
  {
    question: "Can I book a taxi for the entire day?",
    answer:
      "Yes. Full-day taxi bookings can be arranged for Goa Tours and customised Goa trips. Share your itinerary and we can discuss the suitable vehicle and plan.",
  },
  {
    question: "Do you provide hotel and railway station transfers?",
    answer:
      "Yes. Pickup and drop services can be arranged between hotels, resorts, railway stations, airports and other destinations across Goa.",
  },
  {
    question: "Can I create a custom Goa Tours plan?",
    answer:
      "Absolutely. Tell us the places you want to visit, your preferred timing and the number of travellers, and we can help you plan a suitable taxi trip.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const whatsappUrl = `https://wa.me/${
    siteData.whatsapp
  }?text=${encodeURIComponent(
    "Hello, I have a question about your Goa taxi service."
  )}`;

  return (
    <section
      id="faq"
      className="bg-[var(--background)] px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)]">
            <HelpCircle size={23} />
          </div>

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to Know
          </h2>

          <p className="mt-4 leading-7 text-[var(--muted)]">
            Quick answers about airport transfers, Goa Tours, vehicles and
            booking your taxi in Goa.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[var(--primary)]/25 shadow-md"
                    : "border-[var(--border)] hover:border-[var(--primary)]/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold leading-6 sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[var(--primary)] text-white"
                        : "bg-[var(--background)] text-[var(--primary)]"
                    }`}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 text-sm leading-7 text-[var(--muted)] sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-[var(--primary)] px-6 py-8 text-white sm:px-9">
          <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full border border-white/10" />

          <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-bold">
                Still have a question?
              </p>

              <p className="mt-1 text-sm leading-6 text-white/70">
                Speak directly with us about your Goa travel plans.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[var(--primary)] transition hover:bg-[var(--accent)] hover:text-white"
            >
              <MessageCircle size={17} />
              Ask Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}