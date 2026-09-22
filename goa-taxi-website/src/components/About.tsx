import {
  Award,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import { siteData } from "@/data/siteData";

const highlights = [
  "12+ years of experience serving travellers in Goa",
  "Strong knowledge of Goa routes and destinations",
  "Comfortable AC vehicles for local and sightseeing trips",
  "Airport, hotel, railway and customised travel support",
];

const stats = [
  {
    icon: Award,
    value: "12+ Years",
    label: "Experience",
  },
  {
    icon: Star,
    value: "4.9★",
    label: "Google Rating",
  },
  {
    icon: Users,
    value: "2,000+",
    label: "Customers Served",
  },
  {
    icon: MapPin,
    value: "500+",
    label: "Sightseeing Trips",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          {/* Left Visual */}
          <div className="relative">

            <div className="overflow-hidden rounded-[2rem] bg-[var(--primary)] p-2 shadow-2xl">
              <div className="relative flex min-h-[500px] items-end overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[#061b15] p-8 text-white sm:p-10">

                {/* Decorative elements */}
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
                <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full border border-white/10" />

                <div className="absolute right-8 top-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                  <Star
                    size={25}
                    fill="currentColor"
                    className="text-[var(--accent)]"
                  />
                </div>

                <div className="relative z-10 max-w-md">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                    <MapPin
                      size={27}
                      className="text-[var(--accent)]"
                    />
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-white/50">
                    Goa Local Taxi Service
                  </p>

                  <h3 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                    12+ Years of
                    <br />
                    Experience on Goa Roads
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/70">
                    A locally experienced taxi service focused on comfortable
                    journeys, dependable communication and personalised travel
                    assistance.
                  </p>

                  {/* Rating */}
                  <div className="mt-7 flex items-center gap-3">
                    <div className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-2 backdrop-blur">
                      <Star
                        size={15}
                        fill="currentColor"
                        className="text-[var(--accent)]"
                      />

                      <span className="text-sm font-bold">
                        4.9
                      </span>
                    </div>

                    <span className="text-xs text-white/50">
                      Google customer rating
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* Floating Experience Card */}
            <div className="absolute -bottom-7 left-5 right-5 rounded-2xl border border-[var(--border)] bg-white p-4 shadow-xl sm:left-8 sm:right-auto sm:min-w-[330px]">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                  <ShieldCheck size={21} />
                </div>

                <div>
                  <p className="text-sm font-bold">
                    Experienced Local Service
                  </p>

                  <p className="mt-1 text-xs text-[var(--muted)]">
                    Trusted by travellers visiting Goa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:pl-4">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              About Us
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Experience, Local Knowledge & Personal Service
            </h2>

            <p className="mt-6 text-base leading-8 text-[var(--muted)]">
              With more than a decade of experience serving travellers in Goa,
              we understand that a good taxi service is about more than simply
              getting from one place to another.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              From airport pickups and hotel transfers to full-day sightseeing
              and customised trips, the focus is on making every journey
              comfortable, convenient and stress-free.
            </p>

            {/* Highlights */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-[var(--primary)]"
                  />

                  <span className="text-sm font-medium leading-6">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${
                  siteData.whatsapp
                }?text=${encodeURIComponent(
                  "Hello, I would like to know more about your Goa taxi services."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[var(--primary-dark)]"
              >
                <MessageCircle size={17} />
                Talk to Us
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-6 py-3.5 text-sm font-bold transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                Contact Us
              </a>
            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--background)]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`flex items-center gap-4 p-6 sm:p-7 ${
                    index < stats.length - 1
                      ? "border-b border-[var(--border)] lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[var(--primary)] shadow-sm">
                    <Icon size={21} />
                  </div>

                  <div>
                    <p className="text-xl font-black">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-xs font-medium text-[var(--muted)]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}