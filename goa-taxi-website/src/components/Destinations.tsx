import {
  ArrowUpRight,
  Castle,
  Church,
  MapPin,
  Palmtree,
  Waves,
} from "lucide-react";
import { siteData } from "@/data/siteData";

const destinations = [
  {
    name: "North Goa",
    description:
      "Explore famous beaches, forts, nightlife and popular attractions across North Goa.",
    icon: Waves,
    tag: "Beaches & Nightlife",
    image:
      "https://imgs.search.brave.com/S6H-sfJXAGTo9GVeEos9nis84fYkEOC6wltKqF0ByR8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kMjZk/cDUza3ozOTE3OC5j/bG91ZGZyb250Lm5l/dC9tZWRpYS91cGxv/YWRzL3Byb2R1Y3Rz/L2ltYWdlMl9yZXN1/bHQtMTY3NDkyMDgz/Nzg1MC53ZWJw",
  },
  {
    name: "South Goa",
    description:
      "Discover peaceful beaches, scenic locations, churches and relaxed coastal experiences.",
    icon: Palmtree,
    tag: "Peace & Beaches",
    image:
      "https://imgs.search.brave.com/zkubUPLoXWTmEgDrBRvqFbAQuEmGM-lrcRwDXHWa3uQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/dHJhdmVsdHJpYW5n/bGUuY29tL2Jsb2cv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDMvQmFnYS1CZWFj/aC0lRTIlODAlOTMt/Rm9yLUJlYWNoLUxv/dmVycy5qcGc",
  },
  {
    name: "Panaji",
    description:
      "Explore Goa's capital city, riverside areas and nearby cultural attractions.",
    icon: MapPin,
    tag: "City & Culture",
    image:
      "https://images.trvl-media.com/place/6139973/ed9ebb50-5e06-4dbe-b767-1db8e08e4cfe.jpg",
  },
  {
    name: "Old Goa",
    description:
      "Visit historic churches and heritage landmarks in one of Goa's most important historic areas.",
    icon: Church,
    tag: "Heritage",
    image:
      "https://imgs.search.brave.com/O0YrKJXTzQS0SFSJjCaNHYcEfN91_k5JPAH8LuwFM8o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tYWtl/aXRoYXBwZW4uY28u/aW4vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMTIvT2xkLUdv/YS1HMS04LmpwZw",
  },
  {
    name: "Fort Aguada",
    description:
      "Take a comfortable ride to one of Goa's most recognised historic coastal landmarks.",
    icon: Castle,
    tag: "History & Views",
    image:
      "https://imgs.search.brave.com/j46XNt5tZYCpIGH5ffY3hm54Bh6DJfebNEN6zSGEXqM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc4LzAwLzg3/LzM2MF9GXzc4MDA4/NzExX0NUVW9qa1hT/YTZaZUdmQlcySktW/YnJGbjlSN1FXRGRZ/LmpwZw",
  },
  {
    name: "Baga & Calangute",
    description:
      "Easy local travel to popular beaches, restaurants, entertainment and shopping areas.",
    icon: Waves,
    tag: "Popular Beaches",
    image:
      "https://imgs.search.brave.com/f7m2ajSPJK-0MAhe3bZsuguBR9pCOls6mmCoJg8SNw8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NTYwMjc4L3Bob3Rv/L2JlYWNoLWluLWNh/bmRvbGltLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1PQjRN/N3FMQXg4cko3eU9f/OXpmQ0t1T0VEbG1i/VXNQT1VFc2VGWExK/VlFnPQ",
  },
];

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="bg-[var(--background)] px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              Explore Goa
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Places Worth Exploring
            </h2>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              From beaches and heritage sites to popular tourist destinations,
              travel comfortably around Goa with local taxi support.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
            <MapPin size={17} />
            Local travel across Goa
          </div>
        </div>

        {/* Destination Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => {
            const Icon = destination.icon;

            const whatsappUrl = `https://wa.me/${
              siteData.whatsapp
            }?text=${encodeURIComponent(
              `Hello, I would like to book a taxi to ${destination.name}. Please share the details.`
            )}`;

            return (
              <article
                key={destination.name}
                className="group overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={`${destination.name}, Goa`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                  {/* Number */}
                  <span className="absolute right-5 top-4 text-5xl font-black leading-none text-white/20">
                    0{index + 1}
                  </span>

                  {/* Tag */}
                  <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--primary)] backdrop-blur">
                    {destination.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] transition duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    {destination.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {destination.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)]"
                  >
                    Book a Ride
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-[var(--border)] bg-white px-6 py-7 text-center sm:flex-row sm:text-left sm:px-8">
          <div>
            <p className="text-sm font-bold">
              Planning somewhere else in Goa?
            </p>

            <p className="mt-1 text-sm text-[var(--muted)]">
              Tell us your destination and we will help you plan the ride.
            </p>
          </div>

          <a
            href={`https://wa.me/${
              siteData.whatsapp
            }?text=${encodeURIComponent(
              "Hello, I would like to enquire about a taxi to a destination in Goa."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[var(--primary-dark)]"
          >
            <MapPin size={17} />
            Ask About a Route
          </a>
        </div>
      </div>
    </section>
  );
}