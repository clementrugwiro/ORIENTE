import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import ContactForm from "@/components/forms/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import { companyInfo } from "@/lib/data/company";
import { whatsappLink } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Oriente Travels and Tours. Call, email, or visit us at CHIC Building, 2nd Floor, F007.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Get in touch with us and discover more about Oriente Travels and Tours."
        backgroundImage="/images/contact-us.png"
        imageAlt="Scenic travel destination"
        size="sm"
      />

      <section className="section pb-0 md:pb-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <a
              href={`tel:${companyInfo.contact.phones[0].replace(/\s/g, "")}`}
              className="card group flex flex-col items-center py-10 text-center focus-ring"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-accent-light">
                <Phone className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-primary">Call Us</h3>
              <p className="mt-2 text-base font-medium text-charcoal group-hover:text-accent-dark">
                {companyInfo.contact.phones[0]}
              </p>
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex flex-col items-center py-10 text-center focus-ring"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white">
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-primary">WhatsApp Us</h3>
              <p className="mt-2 text-base font-medium text-charcoal group-hover:text-accent-dark">
                Chat with our team
              </p>
            </a>
            <a
              href={`mailto:${companyInfo.contact.emails[0]}`}
              className="card group flex flex-col items-center py-10 text-center focus-ring"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-accent-light">
                <Mail className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-primary">Email Us</h3>
              <p className="mt-2 break-all text-base font-medium text-charcoal group-hover:text-accent-dark">
                {companyInfo.contact.emails[0]}
              </p>
            </a>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
  <div className="card">
    <MapPin className="h-5 w-5 text-accent-dark" aria-hidden="true" />
    <h3 className="mt-4 font-display text-base font-semibold text-primary">Office</h3>
    <p className="mt-2 text-sm text-muted">{companyInfo.contact.address}</p>
    <SocialLinks variant="light" />
  </div>
</div>

          <div className="card lg:col-span-3">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
