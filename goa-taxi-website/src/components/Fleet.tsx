import {
  ArrowRight,
  CheckCircle2,
  Snowflake,
  Users,
} from "lucide-react";
import { siteData } from "@/data/siteData";

const fleetImages = [
"https://imgs.search.brave.com/biXnrrEKdK0MzOoGj1HFP7jvyEOR5zoZx58fO-iK2oM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDkzMzI0/MjcuanBn",

"https://wallpapercave.com/wp/wp9777827.jpg",

"https://imgs.search.brave.com/Ma4yhWiNOFLDTzItfk8Kvl4ls4I-kB3H7feNGHC9nR4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDk5MjQx/MzkuanBn"
];

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="bg-[var(--background)] px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            Our Fleet
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Comfortable Vehicles for Every Journey
          </h2>

          <p className="mt-4 leading-7 text-[var(--muted)]">
            Choose a vehicle that matches your group size, comfort needs and
            travel plans across Goa.
          </p>
        </div>

        {/* Fleet */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {siteData.fleet.map((vehicle, index) => (
            <article
              key={vehicle.name}
              className="group overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src={fleetImages[index]}
                  alt={`${vehicle.name} taxi vehicle`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                {/* Vehicle Type */}
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold text-[var(--primary)] backdrop-blur">
                  {vehicle.name}
                </div>

                {/* Seats */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 text-sm font-semibold text-white">
                  <Users size={17} />
                  {vehicle.seats} passengers
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent)]">
                      {vehicle.name}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      {vehicle.type || "Comfort Vehicle"}
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                    <Snowflake size={19} />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {vehicle.description}
                </p>

                {/* Features */}
                <div className="mt-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2
                      size={16}
                      className="text-[var(--primary)]"
                    />
                    Air-conditioned
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2
                      size={16}
                      className="text-[var(--primary)]"
                    />
                    Comfortable for travel
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2
                      size={16}
                      className="text-[var(--primary)]"
                    />
                    Suitable for Goa trips
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(
                    `Hello, I would like to book the ${vehicle.name} for my Goa trip. Please share the availability and details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--primary-dark)]"
                >
                  Book This Vehicle
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-xs text-[var(--muted)]">
          Vehicle availability may vary depending on travel date, group size
          and booking requirements.
        </p>
      </div>
    </section>
  );
}