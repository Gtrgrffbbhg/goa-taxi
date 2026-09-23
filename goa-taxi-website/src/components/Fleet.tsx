import {
  ArrowRight,
  CheckCircle2,
  Snowflake,
  Users,
} from "lucide-react";
import { siteData } from "@/data/siteData";

const fleetImages = [
  "/etiosfinal.png",
  "/final.png",
  "/innova.png",
];

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="bg-[var(--background)] px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent-dark)]">
              Our Fleet
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              The Right Ride for Your Goa Trip
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">
              From comfortable sedans to spacious family vehicles, choose
              the ride that fits your journey.
            </p>
          </div>

          <div className="hidden rounded-full border border-[var(--border)] bg-white px-4 py-2 text-xs font-bold text-[var(--primary)] shadow-sm sm:block">
            AC • Comfortable • Private
          </div>
        </div>

        {/* Fleet */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {siteData.fleet.map((vehicle, index) => (
            <article
              key={vehicle.name}
              className="group overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-[0_8px_25px_rgba(16,37,30,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--primary)]/20 hover:shadow-[0_22px_50px_rgba(16,37,30,0.13)]"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src={fleetImages[index]}
                  alt={`${vehicle.name} taxi vehicle`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                {/* Number */}
                <span className="absolute right-5 top-4 text-5xl font-black leading-none text-white/20">
                  0{index + 1}
                </span>

                {/* Vehicle name */}
                <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/90 px-3.5 py-1.5 text-xs font-bold text-[var(--primary)] shadow-sm backdrop-blur">
                  {vehicle.name}
                </div>

                {/* Seats */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-black/35 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  <Users size={15} />
                  {vehicle.seats} passengers
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--accent-dark)]">
                      {vehicle.name}
                    </p>

                    <h3 className="mt-2 text-2xl font-black tracking-tight">
                      {vehicle.type || "Comfort Vehicle"}
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-green)] text-[var(--primary)] transition duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Snowflake size={19} />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {vehicle.description}
                </p>

                {/* Features */}
                <div className="mt-5 grid gap-2">
                  {[
                    "Air-conditioned",
                    "Comfortable for travel",
                    "Suitable for Goa trips",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm font-semibold"
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-[var(--vibrant)]"
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/${
                    siteData.whatsapp
                  }?text=${encodeURIComponent(
                    `Hello, I would like to book the ${vehicle.name} for my Goa trip. Please share the availability and details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white shadow-[0_7px_18px_rgba(8,116,95,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-dark)] hover:shadow-[0_10px_25px_rgba(8,116,95,0.23)]"
                >
                  Book This Vehicle
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover/button:translate-x-1"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <div className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-2 text-center text-xs text-[var(--muted)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          Vehicle availability may vary depending on travel date, group size
          and booking requirements.
        </div>
      </div>
    </section>
  );
}