import {
  BadgeCheck,
  Clock3,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Local Goa Knowledge",
    description:
      "Travel with drivers who understand Goa's popular destinations, routes and local travel needs.",
  },
  {
    icon: Clock3,
    title: "Flexible Travel",
    description:
      "From airport pickups to full-day sightseeing, plan your journey around your schedule.",
  },
  {
    icon: ShieldCheck,
    title: "Comfortable Rides",
    description:
      "Enjoy air-conditioned vehicles designed to make your journey comfortable and convenient.",
  },
  {
    icon: MessageCircle,
    title: "Easy Booking",
    description:
      "No complicated booking process. Send your trip details and confirm your ride through WhatsApp.",
  },
  {
    icon: BadgeCheck,
    title: "Personal Service",
    description:
      "Get direct assistance with your travel requirements instead of dealing with complicated booking systems.",
  },
  {
    icon: Sparkles,
    title: "Made for Goa Trips",
    description:
      "Airport transfers, local rides and sightseeing — everything you need for travelling around Goa.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="bg-[var(--background)] px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            More Than Just a Taxi Ride
          </h2>

          <p className="mt-4 text-[var(--muted)]">
            Simple booking, comfortable travel and local assistance to make
            getting around Goa easier.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-3xl border border-[var(--border)] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)]">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {reason.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}