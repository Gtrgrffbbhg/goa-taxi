"use client";

import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Car,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { siteData } from "@/data/siteData";

type TripType = "Airport Transfer" | "One Way" | "Sightseeing";

export default function Hero() {
  const [tripType, setTripType] =
    useState<TripType>("Airport Transfer");

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [vehicle, setVehicle] = useState("Sedan");

  const handleBooking = () => {
    if (!pickup.trim() || !destination.trim()) {
      alert("Please enter your pickup and destination.");
      return;
    }

    const message = `
Hello, I would like to book a taxi in Goa.

Trip Type: ${tripType}
Pickup: ${pickup}
Destination: ${destination}
Date: ${date || "Not specified"}
Time: ${time || "Not specified"}
Vehicle: ${vehicle}
    `.trim();

    const whatsappUrl = `https://wa.me/${
      siteData.whatsapp
    }?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  const whatsappUrl = `https://wa.me/${
    siteData.whatsapp
  }?text=${encodeURIComponent(
    "Hello, I would like to book a taxi in Goa."
  )}`;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[var(--background)]"
    >
      {/* Premium background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-[var(--vibrant)]/10 blur-3xl" />
        <div className="absolute -bottom-48 -left-32 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          {/* LEFT */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/15 bg-white/80 px-4 py-2 text-xs font-bold text-[var(--primary)] shadow-sm backdrop-blur">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent)]/20">
                <Sparkles
                  size={12}
                  className="text-[var(--accent-dark)]"
                />
              </span>
              Trusted Goa Taxi Service
            </div>

            {/* Heading */}
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl lg:text-[4.4rem]">
              Explore Goa.
              <span className="mt-1 block bg-gradient-to-r from-[var(--primary)] via-[var(--vibrant)] to-[var(--primary)] bg-clip-text text-transparent">
                Travel With Confidence.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
              Comfortable taxi service for airport transfers, sightseeing,
              hotel pickups and everyday travel across Goa — backed by local
              experience and easy booking.
            </p>

            {/* Trust metrics */}
            <div className="mt-7 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-[var(--border)] bg-white/80 shadow-sm backdrop-blur">
              <div className="px-3 py-4 text-center sm:px-5">
                <p className="text-lg font-black text-[var(--primary)]">
                  12+
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--muted)]">
                  Years
                </p>
              </div>

              <div className="border-x border-[var(--border)] px-3 py-4 text-center sm:px-5">
                <p className="text-lg font-black text-[var(--primary)]">
                  4.9★
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--muted)]">
                  Google
                </p>
              </div>

              <div className="px-3 py-4 text-center sm:px-5">
                <p className="text-lg font-black text-[var(--primary)]">
                  2K+
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--muted)]">
                  Customers
                </p>
              </div>
            </div>

            {/* Trust points */}
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <CheckCircle2
                  size={16}
                  className="text-[var(--vibrant)]"
                />
                Local Goa Drivers
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold">
                <ShieldCheck
                  size={16}
                  className="text-[var(--vibrant)]"
                />
                Comfortable Rides
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold">
                <MapPin
                  size={16}
                  className="text-[var(--vibrant)]"
                />
                Easy Booking
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(8,127,104,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--primary-dark)] hover:shadow-[0_16px_35px_rgba(8,127,104,0.28)]"
              >
                <MessageCircle size={18} />
                WhatsApp Now
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href={`tel:${siteData.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-6 py-3.5 text-sm font-bold text-[var(--foreground)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-md"
              >
                <Phone size={17} />
                Call Now
              </a>
            </div>

            {/* Service chips */}
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Mopa Airport",
                "Dabolim Airport",
                "Goa Sightseeing",
                "Hotel Transfers",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3.5 py-1.5 text-xs font-semibold text-[var(--muted)] transition hover:border-[var(--primary)]/20 hover:bg-[var(--surface-green)] hover:text-[var(--primary)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — BOOKING CARD */}
          <div className="relative">
            {/* Floating label */}
            <div className="absolute -top-4 left-6 z-20 flex items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-bold text-white shadow-[0_10px_25px_rgba(8,127,104,0.25)]">
              <Navigation size={14} />
              Quick Booking
            </div>

            {/* Glow */}
            <div className="absolute -inset-3 -z-10 rounded-[2.3rem] bg-gradient-to-br from-[var(--vibrant)]/10 via-transparent to-[var(--accent)]/15 blur-2xl" />

            <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/95 p-5 shadow-[0_25px_70px_rgba(20,35,29,0.14)] backdrop-blur-xl sm:p-7">
              {/* Header */}
              <div className="border-b border-[var(--border)] pb-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-dark)]">
                      Book Your Ride
                    </p>

                    <h2 className="mt-2 text-2xl font-black tracking-tight">
                      Where are you going?
                    </h2>

                    <p className="mt-1.5 text-xs text-[var(--muted)]">
                      Send your trip details directly on WhatsApp.
                    </p>
                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] sm:flex">
                    <Car size={22} />
                  </div>
                </div>
              </div>

              {/* Trip Type */}
              <div className="mt-5 grid grid-cols-3 rounded-xl bg-[var(--surface-soft)] p-1">
                {(
                  [
                    "Airport Transfer",
                    "One Way",
                    "Sightseeing",
                  ] as TripType[]
                ).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setTripType(type)}
                    className={`rounded-lg px-2 py-2.5 text-xs font-bold transition-all duration-200 ${
                      tripType === type
                        ? "bg-[var(--primary)] text-white shadow-md"
                        : "text-[var(--muted)] hover:text-[var(--primary)]"
                    }`}
                  >
                    {type === "Airport Transfer"
                      ? "Airport"
                      : type}
                  </button>
                ))}
              </div>

              {/* Form */}
              <div className="mt-5 space-y-4">
                {/* Pickup */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-[var(--foreground)]">
                    Pickup Location
                  </label>

                  <div className="relative">
                    <MapPin
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--primary)]"
                    />

                    <input
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="Airport, hotel or location"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] py-3.5 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[var(--primary)]/8"
                    />
                  </div>
                </div>

                {/* Destination */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-[var(--foreground)]">
                    Destination
                  </label>

                  <div className="relative">
                    <Navigation
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--primary)]"
                    />

                    <input
                      value={destination}
                      onChange={(e) =>
                        setDestination(e.target.value)
                      }
                      placeholder={
                        tripType === "Sightseeing"
                          ? "North Goa, South Goa, Dudhsagar..."
                          : "Where do you want to go?"
                      }
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] py-3.5 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[var(--primary)]/8"
                    />
                  </div>
                </div>

                {/* Date + Time */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-[var(--foreground)]">
                      Travel Date
                    </label>

                    <div className="relative">
                      <CalendarDays
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--primary)]"
                      />

                      <input
                        type="date"
                        value={date}
                        onChange={(e) =>
                          setDate(e.target.value)
                        }
                        className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] py-3.5 pl-10 pr-3 text-sm outline-none transition-all focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[var(--primary)]/8"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-[var(--foreground)]">
                      Pickup Time
                    </label>

                    <div className="relative">
                      <Clock3
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--primary)]"
                      />

                      <input
                        type="time"
                        value={time}
                        onChange={(e) =>
                          setTime(e.target.value)
                        }
                        className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] py-3.5 pl-10 pr-3 text-sm outline-none transition-all focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[var(--primary)]/8"
                      />
                    </div>
                  </div>
                </div>

                {/* Vehicle */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-[var(--foreground)]">
                    Vehicle Preference
                  </label>

                  <select
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3.5 text-sm outline-none transition-all focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[var(--primary)]/8"
                  >
                    <option>Sedan</option>
                    <option>SUV</option>
                    <option>Toyota Innova</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="button"
                  onClick={handleBooking}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] px-5 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(8,127,104,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(8,127,104,0.28)]"
                >
                  <MessageCircle size={18} />
                  Continue on WhatsApp
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-[11px] text-[var(--muted)]">
                  No payment required • Quick response on WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}