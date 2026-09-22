import { MessageCircle, Phone } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function MobileBookingBar() {
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to book a taxi in Goa."
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border)] bg-white/95 p-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={`tel:${siteData.phone.replace(/\s/g, "")}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-[var(--background)] px-4 py-3 text-sm font-bold text-[var(--primary)]"
        >
          <Phone size={18} />
          Call Now
        </a>

        <a
          href={`https://wa.me/${siteData.whatsapp}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-3 text-sm font-bold text-white"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}