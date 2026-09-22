import { siteData } from "@/data/siteData";
import {
  ArrowRight,
  CheckCircle2,
  Plane,
  ShieldCheck,
} from "lucide-react";

const airports = [
  {
    name: "Mopa International Airport",
    code: "GOX",
    location: "North Goa",
    description:
      "Convenient airport transfers from Mopa International Airport to hotels, resorts and destinations across Goa.",
    destinations: ["Calangute", "Baga", "Candolim", "Anjuna", "Vagator"],
  },
  {
    name: "Dabolim Airport",
    code: "GOI",
    location: "South Goa",
    description:
      "Comfortable taxi transfers from Dabolim Airport to popular destinations across Goa.",
    destinations: ["Panjim", "Calangute", "Baga", "Margao", "Colva"],
  },
];

export default function AirportTaxi() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            Airport Transfers
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Reliable Goa Airport Taxi Service
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">
            Arriving in Goa? Pre-book a comfortable taxi from the airport to
            your hotel, resort or destination. Share your travel details and
            we will help arrange your transfer.
          </p>
        </div>

        {/* AIRPORT CARDS */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {airports.map((airport) => (
            <div
              key={airport.code}
              className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--background)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* TOP */}
              <div className="relative overflow-hidden bg-[var(--primary-dark)] p-7 text-white sm:p-8">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5" />
                <div className="absolute -bottom-12 -right-2 h-40 w-40 rounded-full bg-[var(--accent)]/10" />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                      <Plane size={24} />
                    </div>

                    <h3 className="text-2xl font-bold">
                      {airport.name}
                    </h3>

                    <p className="mt-1 text-sm text-white/60">
                      {airport.code} • {airport.location}
                    </p>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold">
                    Airport Taxi
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-7 sm:p-8">
                <p className="leading-7 text-[var(--muted)]">
                  {airport.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {airport.destinations.map((destination) => (
                    <div
                      key={destination}
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-[var(--primary)]"
                      />

                      {destination}
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-[var(--border)] pt-6">
                  <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                    <ShieldCheck
                      size={17}
                      className="text-[var(--primary)]"
                    />
                    Easy advance booking
                  </div>

                  <a
                    href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(
                      "Hello, I would like to book a taxi from Mopa Airport. Please share the details."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
                  >
                    Book Transfer
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-8 rounded-2xl bg-[var(--primary)] px-6 py-7 text-center text-white sm:px-8">
          <h3 className="text-xl font-bold">
            Need an airport pickup in Goa?
          </h3>

          <p className="mt-2 text-sm text-white/70">
            Send your airport, destination and travel time through WhatsApp.
          </p>

          <a
            href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(
              "Hello, I would like to book a taxi from Dabolim Airport. Please share the details."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 font-bold text-black transition hover:opacity-90"
          >
            Book Airport Taxi
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}