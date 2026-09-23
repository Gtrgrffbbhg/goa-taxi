import {
  Award,
  CheckCircle2,
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
  "Comfortable AC vehicles for local and Goa Tours trips",
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
    label: "Goa Tours Trips",
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
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--primary-dark)] via-[var(--primary)] to-[#0b8b72] p-1 shadow-[0_25px_60px_rgba(8,116,95,0.18)]">
              <div className="relative flex min-h-[510px] overflow-hidden rounded-[1.75rem] p-8 text-white sm:p-10">
                {/* Background atmosphere */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(244,185,66,0.16),transparent_28%),radial-gradient(circle_at_15%_90%,rgba(20,184,166,0.14),transparent_30%)]" />

                {/* Decorative circles */}
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
                <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full border border-white/10" />

                {/* Rating badge */}
                <div className="absolute right-7 top-7 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-3.5 py-3 backdrop-blur-md">
                  <Star
                    size={18}
                    fill="currentColor"
                    className="text-[var(--accent)]"
                  />

                  <div>
                    <p className="text-sm font-black">4.9</p>
                    <p className="text-[9px] uppercase tracking-wider text-white/55">
                      Google
                    </p>
                  </div>
                </div>

                {/* Main content */}
                <div className="relative z-10 mt-auto max-w-md">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md">
                    <MapPin
                      size={27}
                      className="text-[var(--accent)]"
                    />
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-white/50">
                    Goa Local Taxi Service
                  </p>

                  <h3 className="mt-3 text-3xl font-black leading-[1.08] tracking-tight sm:text-4xl">
                    Local Experience.
                    <br />
                    Reliable Journeys.
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/70">
                    A locally experienced taxi service focused on comfortable
                    journeys, dependable communication and personalised travel
                    assistance.
                  </p>

                  {/* Experience pill */}
                  <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2.5 backdrop-blur-md">
                    <ShieldCheck
                      size={17}
                      className="text-[var(--accent)]"
                    />

                    <span className="text-xs font-bold">
                      12+ Years on Goa Roads
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-7 left-5 right-5 rounded-2xl border border-[var(--border)] bg-white p-4 shadow-[0_18px_40px_rgba(16,37,30,0.12)] sm:left-8 sm:right-auto sm:min-w-[330px]">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--surface-green)] text-[var(--primary)]">
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
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent-dark)]">
              About Us
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              More Than a Taxi.
              <span className="block text-[var(--primary)]">
                Your Local Goa Travel Partner.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[var(--muted)]">
              With more than a decade of experience serving travellers in Goa,
              we understand that a good taxi service is about more than simply
              getting from one place to another.
            </p>

            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              From airport pickups and hotel transfers to full-day Goa Tours
              and customised trips, the focus is on making every journey
              comfortable, convenient and stress-free.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="group flex items-start gap-3 rounded-2xl border border-transparent p-3 transition hover:border-[var(--border)] hover:bg-[var(--surface-soft)]"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[var(--vibrant)]"
                  />

                  <span className="text-sm font-semibold leading-6">
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
                className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(8,116,95,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-dark)] hover:shadow-lg"
              >
                <MessageCircle size={17} />
                Talk to Us
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-sm"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface-soft)] shadow-sm">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`group flex items-center gap-4 p-6 transition hover:bg-white sm:p-7 ${
                    index < stats.length - 1
                      ? "border-b border-[var(--border)] lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[var(--primary)] shadow-sm transition duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <div>
                    <p className="text-xl font-black tracking-tight">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-xs font-semibold text-[var(--muted)]">
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