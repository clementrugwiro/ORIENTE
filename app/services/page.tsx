import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Travel Services in Rwanda",
  description:
    "Explore Oriente Travels' travel services in Rwanda, including airline ticketing, hotel reservations, visa assistance, tour packages, corporate travel, car rental and vehicle solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Our Portfolio"
        title="Services Designed Around Your Journey"
        subtitle="From airline ticketing to vehicle sales, every service is built to make travel and mobility simpler."
        backgroundImage="/images/services.png"
        imageAlt="Scenic travel destination"
        size="sm"
      />
      <section className="section">
        <Container>
          <SectionHeader
            title="Our Portfolio of Services"
            subtitle="Each service is designed to work together, so your journey stays coordinated from start to finish."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Not sure which service fits your journey?"
        subtitle="Talk to our team and we'll help you find the right combination of services."
      />
    </>
  );
}
