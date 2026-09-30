import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import ContactForm from "@/components/forms/ContactForm";
import { companyInfo } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Oriente Travels & Tours. Call, email, or visit us at CHIC Building, 2nd Floor, F007.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Get in touch with us and discover more about Oriente Travels & Tours."
        backgroundImage="/images/contact-us.png"
        imageAlt="Scenic travel destination"
        size="sm"
      />

      <section className="section">
        <Container className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <div className="card">
              <Phone className="h-5 w-5 text-accent-dark" aria-hidden="true" />
              <h3 className="mt-4 font-display text-base font-semibold text-primary">Phone</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted">
                {companyInfo.contact.phones.map((phone) => (
                  <li key={phone}>
                    <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-accent-dark">
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <Mail className="h-5 w-5 text-accent-dark" aria-hidden="true" />
              <h3 className="mt-4 font-display text-base font-semibold text-primary">Email</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted">
                {companyInfo.contact.emails.map((email) => (
                  <li key={email}>
                    <a href={`mailto:${email}`} className="hover:text-accent-dark break-all">
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <MapPin className="h-5 w-5 text-accent-dark" aria-hidden="true" />
              <h3 className="mt-4 font-display text-base font-semibold text-primary">Office</h3>
              <p className="mt-2 text-sm text-muted">{companyInfo.contact.address}</p>
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
