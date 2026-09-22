import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
} from "lucide-react";
import { siteData } from "@/data/siteData";

const benefits = [
  "Quick response",
  "Easy WhatsApp booking",
  "Comfortable vehicles",
  "Personal assistance",
];

export default function FinalCTA() {
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to book a taxi in Goa."
  );

  return (
    <section
      id="contact"
      className="bg-[var(--primary)] px-5 py-20 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--primary-dark)] px-6 py-12 sm:px-10 lg:px-16 lg:py-14">
          {/* Decorative Elements */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

            {/* Main CTA */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                Ready to Travel?
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Book Your Goa Taxi Today
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
                Airport pickup, sightseeing, hotel transfers or a local ride —
                tell us what you need and we will help arrange your journey.
              </p>

              {/* Benefits */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 text-sm text-white/80"
                  >
                    <CheckCircle2
                      size={17}
                      className="text-[var(--accent)]"
                    />
                    {benefit}
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${siteData.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[var(--primary)] transition hover:bg-[var(--accent)] hover:text-white"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                  <ArrowRight size={16} />
                </a>

                <a
                  href={`tel:${siteData.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  <Phone size={17} />
                  Call Now
                </a>
              </div>
            </div>

            {/* Contact Card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                Quick Contact
              </p>

              <div className="mt-5">
                <p className="text-sm text-white/50">
                  Call us
                </p>

                <a
                  href={`tel:${siteData.phone.replace(/\s/g, "")}`}
                  className="mt-1 block text-xl font-bold transition hover:text-[var(--accent)]"
                >
                  {siteData.phone}
                </a>
              </div>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-sm text-white/50">
                  WhatsApp
                </p>

                <a
                  href={`https://wa.me/${siteData.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-base font-bold transition hover:text-[var(--accent)]"
                >
                  Chat with us instantly
                </a>
              </div>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-sm text-white/50">
                  Service Area
                </p>

                <p className="mt-1 font-semibold">
                  {siteData.location}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}