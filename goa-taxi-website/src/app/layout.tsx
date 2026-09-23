import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Navya Tours & travels | Goa Taxi Service & Airport Transfers",
    template: "%s | Navya Tours & travels",
  },

  description:
    "Book reliable taxi service in Goa for airport transfers, Goa Tours, hotel transfers, local travel and customised Goa trips.",

  keywords: [
    "Goa taxi",
    "Goa taxi service",
    "Goa airport taxi",
    "Mopa airport taxi",
    "Dabolim airport taxi",
    "Goa Tours taxi",
    "North Goa taxi",
    "South Goa taxi",
  ],

authors: [{ name: "Navya Tours & travels" }],

alternates: {
  canonical: "https://cabsgoa.net",
},

robots: {
  index: true,
  follow: true,
},

  openGraph: {
    title: "Navya Tours & travels | Reliable Taxi Service in Goa",
    description:
      "Airport transfers, Goa Tours, hotel transfers and local taxi service across Goa.",
    type: "website",
    locale: "en_IN",
    siteName: "Navya Tours & travels",
  },

  twitter: {
    card: "summary_large_image",
    title: "Navya Tours & travels | Goa Taxi Service",
    description:
      "Book airport transfers, Goa Tours and local taxi service in Goa.",
  },
};



function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "Navya Tours & travels",
    url: "https://cabsgoa.net",
    description:
      "Taxi service in Goa offering airport transfers, Goa Tours, hotel transfers and local travel.",
    areaServed: {
      "@type": "Place",
      name: "Goa, India",
    },
    serviceType: [
      "Goa Taxi Service",
      "Airport Transfers",
      "Goa Tours",
      "Hotel Transfers",
      "Local Taxi Service",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}