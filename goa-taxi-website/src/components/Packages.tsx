import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Map,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { siteData } from "@/data/siteData";

const packageStyles = [
  {
    label: "Beach & Heritage",
    icon: Map,
  },
  {
    label: "Peaceful Goa",
    icon: Sparkles,
  },
  {
    label: "Adventure",
    icon: Map,
  },
  {
    label: "Custom Trip",
    icon: Sparkles,
  },
];

const packageImages = [
  "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85",
  "https://imgs.search.brave.com/o4dn8xZ2lfXOAby5NxuJjp2Nt_Fey7a0G5p-xVBArXA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMyLnRyaXBvdG8u/Y29tL21lZGlhL2Zp/bHRlci9ubC9pbWcv/MzM4MzM2L1RyaXBE/b2N1bWVudC8xNTE1/MDkyNDM3X3dwXzIw/MTYxMTA2XzE0XzM2/XzI5X3Byby5qcGcu/d2VicA",
  "https://imgs.search.brave.com/zTCKrSMoV4rxo-KEPetiupkZAIzxl9JjgLbwgUS1mdk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dHJhdmVsLWdvYS5p/bi93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8xMi9EdWRoc2Fn/YXItRmFtaWx5LUZ1/bi1hdC1EdWRoc2Fn/YXItV2F0ZXJmYWxs/cy53ZWJw",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
];

export default function Packages() {
  return (
    <section
      id="packages"
      className="bg-white px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              Goa Tours & Packages
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Discover More of Goa
            </h2>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              Explore Goa comfortably with private taxi tours designed for
              beaches, heritage sites, sightseeing and customised travel.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
            <Clock3 size={17} />
            Flexible trip durations
          </div>
        </div>

        {/* Packages */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {siteData.packages.map((pkg, index) => {
            const Icon = packageStyles[index]?.icon ?? Map;
            const label =
              packageStyles[index]?.label ?? "Goa Tour";

            const whatsappUrl = `https://wa.me/${
              siteData.whatsapp
            }?text=${encodeURIComponent(
              `Hello, I am interested in the ${pkg.title} package. Please share the itinerary, pricing and availability.`
            )}`;

            return (
              <article
                key={pkg.title}
                className="group overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--background)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={packageImages[index]}
                    alt={`${pkg.title} in Goa`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  {/* Number */}
                  <div className="absolute right-5 top-4 text-5xl font-black leading-none text-white/20">
                    0{index + 1}
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--primary)] backdrop-blur">
                    <Icon size={13} />
                    {label}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">

                  {/* Title */}
                  <h3 className="text-xl font-bold leading-tight">
                    {pkg.title}
                  </h3>

                  {/* Duration */}
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[var(--muted)] shadow-sm">
                    <Clock3 size={14} />
                    {pkg.duration}
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {pkg.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <CheckCircle2
                        size={15}
                        className="text-[var(--primary)]"
                      />
                      Private taxi journey
                    </div>

                    <div className="flex items-center gap-2 text-xs font-medium">
                      <CheckCircle2
                        size={15}
                        className="text-[var(--primary)]"
                      />
                      Flexible travel plan
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)]"
                  >
                    Enquire About This Trip
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Custom Trip CTA */}
        <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-[var(--primary)] px-6 py-9 text-white sm:px-10">
          <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full border border-white/10" />

          <div className="absolute -bottom-28 -left-16 h-64 w-64 rounded-full border border-white/10" />

          <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[var(--accent)]">
                <MessageCircle size={18} />

                <span className="text-xs font-bold uppercase tracking-[0.16em]">
                  Custom Goa Trip
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                Have your own Goa itinerary?
              </h3>

              <p className="mt-2 text-sm leading-7 text-white/70">
                Tell us the places you want to visit, your travel dates and
                group size. We'll help you arrange a suitable taxi for your
                journey.
              </p>
            </div>

            <a
              href={`https://wa.me/${
                siteData.whatsapp
              }?text=${encodeURIComponent(
                "Hello, I would like to plan a custom Goa sightseeing trip. Please help me with the options."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[var(--primary)] transition hover:bg-[var(--accent)] hover:text-white"
            >
              <MessageCircle size={17} />
              Plan My Trip
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}