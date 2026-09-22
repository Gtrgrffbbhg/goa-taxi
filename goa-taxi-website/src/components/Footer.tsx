import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { siteData } from "@/data/siteData";

export default function Footer() {
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to book a taxi in Goa."
  );

  return (
    <footer className="bg-[#071f18] px-5 pb-24 pt-16 text-white lg:px-8 lg:pb-10">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight"
            >
              {siteData.businessName}
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">
              {siteData.tagline}. Comfortable rides, local expertise and easy
              booking for travellers across Goa.
            </p>

            <a
              href={`https://wa.me/${siteData.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[var(--primary)] transition hover:bg-[var(--accent)] hover:text-white"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <a className="transition hover:text-white" href="#home">
                Home
              </a>

              <a className="transition hover:text-white" href="#services">
                Services
              </a>

              <a className="transition hover:text-white" href="#fleet">
                Our Fleet
              </a>

              <a className="transition hover:text-white" href="#packages">
                Packages
              </a>

              <a className="transition hover:text-white" href="#about">
                About Us
              </a>

              <a className="transition hover:text-white" href="#faq">
                FAQ
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold">
              Our Services
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <span>Airport Transfers</span>
              <span>Goa Sightseeing</span>
              <span>Hotel Transfers</span>
              <span>Local Taxi</span>
              <span>Railway Transfers</span>
              <span>Outstation Taxi</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm">

              <a
                href={`tel:${siteData.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-3 text-white/60 transition hover:text-white"
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-[var(--accent)]"
                />
                <span>{siteData.phone}</span>
              </a>

              <a
                href={`https://wa.me/${siteData.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/60 transition hover:text-white"
              >
                <MessageCircle
                  size={17}
                  className="mt-0.5 shrink-0 text-[var(--accent)]"
                />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${siteData.email}`}
                className="flex items-start gap-3 text-white/60 transition hover:text-white"
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[var(--accent)]"
                />
                <span>{siteData.email}</span>
              </a>

              <div className="flex items-start gap-3 text-white/60">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[var(--accent)]"
                />
                <span>{siteData.location}</span>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {siteData.businessName}. All
              rights reserved.
            </p>

            <p>
              Goa Taxi Service • Airport Transfers • Sightseeing
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}