import {
  ArrowUpRight,
  Car,
  Hotel,
  Map,
  Plane,
  Route,
  Train,
} from "lucide-react";
import { siteData } from "@/data/siteData";

const iconMap = {
  Plane,
  Map,
  Hotel,
  Car,
  Train,
  Route,
};

const serviceImages = [
  "https://imgs.search.brave.com/tPHCJsRGyZ74i3GkF2lndt06o-OA9QN-qLSIyUbcTQo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgz/Nzk4NzgwL3Bob3Rv/L2dlcm1hbi10YXhp/LWxpbmUtdXAtYXQt/YWlycG9ydC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9a3VZ/al9uTDBqR2dGajNa/RHpnQ2NoV011Y1Fs/c19YQWVvSWZKcnQx/LXItcz0",
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1200&q=85",
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything You Need to Travel Around Goa
            </h2>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              From airport pickups to Goa Tours and local travel, choose
              the service that fits your journey.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)]"
          >
            Book a Taxi
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Service Grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {siteData.services.map((service, index) => {
            const Icon =
              iconMap[service.icon as keyof typeof iconMap];

            return (
              <article
                key={service.title}
                className="group relative min-h-[330px] overflow-hidden rounded-3xl border border-[var(--border)] bg-slate-900 p-7 text-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Background Image */}
                <img
                  src={serviceImages[index]}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/20 transition duration-500 group-hover:from-black/90 group-hover:via-black/60" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-end">

                  {/* Number */}
                  <span className="absolute right-0 top-0 text-5xl font-black text-white/15">
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-md transition duration-300 group-hover:bg-[var(--accent)] group-hover:text-[var(--foreground)]">
                    <Icon size={23} />
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-7 text-white/75">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(
                      `Hello, I am interested in your ${service.title} service. Please share the details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white"
                  >
                    Enquire Now
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}