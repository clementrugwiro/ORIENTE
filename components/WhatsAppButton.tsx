import { MessageCircle } from "lucide-react";
import { companyInfo } from "@/lib/data/company";

export function whatsappLink(message: string = companyInfo.contact.whatsappMessage) {
  return `https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Floating WhatsApp button, rendered once in the root layout so it shows on every page. */
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Need assistance? Chat with Oriente on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] p-4 text-white shadow-cardHover transition-transform duration-200 hover:scale-105 focus-ring md:bottom-6 md:right-6 md:py-3 md:pl-4 md:pr-5"
    >
      <MessageCircle className="h-6 w-6 shrink-0" aria-hidden="true" />
      <span className="hidden flex-col text-left leading-tight md:flex">
        <span className="text-[11px] font-medium text-white/85">Need assistance?</span>
        <span className="text-sm font-semibold">Chat with Oriente on WhatsApp</span>
      </span>
    </a>
  );
}
