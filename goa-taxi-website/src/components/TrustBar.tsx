import { Clock3, MapPin, ShieldCheck, Star } from "lucide-react";

const trustItems = [
  {
    icon: Clock3,
    title: "24/7 Availability",
    description: "Book your taxi anytime",
  },
  {
    icon: MapPin,
    title: "Local Goa Drivers",
    description: "Know Goa, travel better",
  },
  {
    icon: ShieldCheck,
    title: "Comfortable Rides",
    description: "Clean & well-maintained vehicles",
  },
  {
    icon: Star,
    title: "Trusted Service",
    description: "Focused on a smooth journey",
  },
];

export default function TrustBar() {
  return (
    <section className="border-b border-[var(--border)] bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`flex items-center gap-4 px-5 py-6 ${
                index < trustItems.length - 1
                  ? "border-b border-[var(--border)] lg:border-b-0 lg:border-r"
                  : ""
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                <Icon size={21} />
              </div>

              <div>
                <h3 className="text-sm font-bold">{item.title}</h3>

                <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}