import {
  ArrowUpRight,
  Quote,
  Star,
  ThumbsUp,
} from "lucide-react";
import { siteData } from "@/data/siteData";

const reviews = [
  {
    name: "Emma Thompson",
    location: "Goa Airport Transfer",
    text:
      "A smooth and comfortable experience from pickup to drop-off. Communication was easy and the journey was well managed.",
  },
  {
    name: "Rahul Mehta",
    location: "Goa Tours",
    text:
      "We had a great Goa Tours experience and could comfortably cover the places we wanted to visit.",
  },
  {
    name: "Sophie Laurent",
    location: "Local Taxi Service",
    text:
      "Easy booking, comfortable vehicle and helpful service throughout the trip. Would definitely consider booking again.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-[var(--surface-soft)] px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent-dark)]">
            Customer Experiences
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Trusted by Travellers Visiting Goa
          </h2>

          <p className="mt-4 leading-7 text-[var(--muted)]">
            Comfortable rides, local experience and straightforward
            communication from booking to drop-off.
          </p>
        </div>

        {/* Rating Highlight */}
        <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-[0_12px_35px_rgba(16,37,30,0.07)]">
          <div className="flex flex-col items-center justify-between gap-6 px-6 py-7 sm:flex-row sm:px-9">
            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--surface-green)]">
                <Star
                  size={30}
                  fill="currentColor"
                  className="text-[var(--accent)]"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-black tracking-tight">
                    4.9
                  </span>

                  <div className="flex gap-0.5 text-[var(--accent)]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={13}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-1 text-xs font-semibold text-[var(--muted)]">
                  Google Rating
                </p>
              </div>
            </div>

            <div className="hidden h-12 w-px bg-[var(--border)] sm:block" />

            {/* Trust */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                <ThumbsUp size={19} />
              </div>

              <div>
                <p className="text-sm font-bold">
                  Trusted Travel Service
                </p>

                <p className="mt-1 max-w-[190px] text-xs leading-5 text-[var(--muted)]">
                  Built through experience and customer feedback
                </p>
              </div>
            </div>
          </div>

          <div className="h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--vibrant)] to-[var(--accent)]" />
        </div>

        {/* Reviews */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={review.location}
              className="group relative flex flex-col rounded-[2rem] border border-[var(--border)] bg-white p-7 shadow-[0_7px_25px_rgba(16,37,30,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--primary)]/20 hover:shadow-[0_20px_45px_rgba(16,37,30,0.1)]"
            >
              {/* Quote decoration */}
              <div className="absolute right-6 top-6 text-[var(--primary)]/8 transition duration-300 group-hover:text-[var(--primary)]/15">
                <Quote size={52} />
              </div>

              {/* Number */}
              <span className="absolute right-7 bottom-6 text-5xl font-black leading-none text-[var(--foreground)]/[0.025]">
                0{index + 1}
              </span>

              {/* Stars */}
              <div className="relative flex gap-1 text-[var(--accent)]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="relative mt-6 flex-1 text-sm leading-7 text-[var(--muted)]">
                “{review.text}”
              </p>

              {/* Customer */}
              <div className="relative mt-7 flex items-center gap-3 border-t border-[var(--border)] pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-green)] text-xs font-black text-[var(--primary)]">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-bold">
                    {review.name}
                  </p>

                  <p className="mt-1 text-xs text-[var(--muted)]">
                    {review.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Google CTA */}
        <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--primary-dark)] via-[var(--primary)] to-[#0b8b72] px-6 py-8 text-white shadow-[0_18px_45px_rgba(8,116,95,0.14)] sm:px-9">
          <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full border border-white/10" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2 text-[var(--accent)]">
                <Star size={16} fill="currentColor" />

                <span className="text-xs font-bold uppercase tracking-[0.16em]">
                  Google Reviews
                </span>
              </div>

              <p className="mt-2 text-lg font-black">
                See what travellers are saying
              </p>

              <p className="mt-1 text-sm text-white/70">
                View the latest customer feedback on Google.
              </p>
            </div>

            <a
              href="#"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[var(--primary)] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--accent)] hover:text-white"
            >
              View Google Reviews
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}