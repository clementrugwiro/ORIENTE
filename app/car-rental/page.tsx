import type { Metadata } from "next";
import Link from "next/link";
import { Car, CheckCircle2, ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import BrandSlideshow from "@/components/BrandSlideshow";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import VehicleInquiryForm from "@/components/forms/VehicleInquiryForm";
import { carRentalSolutions } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Car Rental in Rwanda",
  description:
  "Car rental in Rwanda for travelers, businesses and organizations, including short-term and long-term rentals, corporate vehicles, airport transfers and chauffeur services.",
};

export default function CarRentalPage() {
  return (
    <>
      <Hero
        eyebrow="Mobility · Car Rental"
        title="Move With Freedom"
        subtitle="Travel should give you freedom to move. Our Car Rental division provides convenient vehicle solutions for travelers, businesses, organizations, and individuals."
        backgroundImage="/images/rentals.png"
        imageAlt="Scenic travel destination"
        size="sm"
      />

      <section className="section">
        <Container>
          <SectionHeader
            title="Our Car Rental Solutions"
            subtitle="Whether you need a vehicle for a short trip, business engagement, airport transfer, or longer-term requirement, we aim to provide a convenient mobility solution suited to your needs."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {carRentalSolutions.map((solution) => (
              <div key={solution} className="card flex items-center gap-3">
                <Car className="h-5 w-5 shrink-0 text-accent-dark" aria-hidden="true" />
                <span className="text-sm font-medium text-charcoal">{solution}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
          <BrandSlideshow
        eyebrow="Our Fleet"
        title="Quality Vehicles From Leading Brands"
        subtitle="Choose from reliable vehicles for trips, business and everyday travel."
      />

      <section className="section">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Reliable Transportation"
              title="Convenient Mobility, When You Need It"
            />
            <ul className="mt-6 space-y-3">
              {[
                "Reliable vehicles for short and long trips",
                "Corporate vehicle solutions for businesses",
                "Airport and destination transport",
                "Professional chauffeur services",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-charcoal">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="card h-fit">
            <VehicleInquiryForm />
          </div>
        </Container>
      </section>

      <CTASection
        title="Need a vehicle for your next trip?"
        subtitle="Tell us your requirements and we'll arrange a suitable rental solution."
      />
    </>
  );
}
