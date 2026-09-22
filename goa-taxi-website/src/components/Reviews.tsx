import {
  ArrowUpRight,
  Quote,
  Star,
  ThumbsUp,
} from "lucide-react";
import { siteData } from "@/data/siteData";

const reviews = [
  {
    name: "Happy Traveller",
    location: "Goa Airport Transfer",
    text:
      "A smooth and comfortable experience from pickup to drop-off. Communication was easy and the journey was well managed.",
  },
  {
    name: "Satisfied Customer",
    location: "Goa Sightseeing",
    text:
      "We had a great sightseeing experience and could comfortably cover the places we wanted to visit.",
  },
  {
    name: "Goa Traveller",
    location: "Local Taxi Service",
    text:
      "Easy booking, comfortable vehicle and helpful service throughout the trip. Would definitely consider booking again.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-white px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            Customer Experiences
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Travellers Visiting Goa
          </h2>

          <p className="mt-4 leading-7 text-[var(--muted)]">
            A strong travel experience starts with dependable service,
            comfortable vehicles and easy communication.
          </p>
        </div>

        {/* Rating Highlight */}
        <div className="mx-auto mt-10 flex max-w-xl flex-col items-center justify-center gap-5 rounded-[2rem] border border-[var(--border)] bg-[var(--background)] px-6 py-7 sm:flex-row sm:gap-8">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center gap-1 sm:justify-start">
              <span className="text-4xl font-black text-[var(--foreground)]">
                4.9
              </span>

              <Star
                size={25}
                fill="currentColor"
                className="text-[var(--accent)]"
              />
            </div>

            <p className="mt-1 text-sm font-medium text-[var(--muted)]">
              Google Rating
            </p>
          </div>

          <div className="hidden h-12 w-px bg-[var(--border)] sm:block" />

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
              <ThumbsUp size={20} />
            </div>

            <div>
              <p className="text-sm font-bold">
                Trusted Travel Service
              </p>

              <p className="mt-1 text-xs text-[var(--muted)]">
                Built through experience and customer feedback
              </p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.location}
              className="group relative rounded-[2rem] border border-[var(--border)] bg-[var(--background)] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              {/* Quote */}
              <div className="absolute right-6 top-6 text-[var(--primary)]/10 transition group-hover:text-[var(--primary)]/15">
                <Quote size={46} />
              </div>

              {/* Stars */}
              <div className="relative flex gap-1 text-[var(--accent)]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="relative mt-6 text-sm leading-7 text-[var(--muted)]">
                “{review.text}”
              </p>

              {/* Customer */}
              <div className="relative mt-7 border-t border-[var(--border)] pt-5">
                <p className="text-sm font-bold">
                  {review.name}
                </p>

                <p className="mt-1 text-xs text-[var(--muted)]">
                  {review.location}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Google CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl bg-[var(--primary)] px-6 py-7 text-center text-white sm:flex-row sm:text-left sm:px-8">
          <div>
            <p className="text-lg font-bold">
              See what travellers are saying
            </p>

            <p className="mt-1 text-sm text-white/70">
              View the latest customer feedback on Google.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[var(--primary)] transition hover:bg-[var(--accent)] hover:text-white"
          >
            View Google Reviews
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}