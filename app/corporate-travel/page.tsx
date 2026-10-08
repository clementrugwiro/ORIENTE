import type { Metadata } from "next";
import { Plane, Hotel, FileCheck2, Car, Users, Route, Headset, ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import CorporateInquiryForm from "@/components/forms/CorporateInquiryForm";
import { corporateProcess } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Corporate Travel Management in Rwanda",
  description:
  "Corporate travel management in Rwanda for companies, executives and teams, including flight bookings, hotels, visa assistance, airport transfers, itineraries and dedicated travel support.",
};

const support = [
  { icon: Plane, label: "Flight Reservations & Ticketing" },
  { icon: Hotel, label: "Hotel Accommodation" },
  { icon: FileCheck2, label: "Visa Assistance" },
  { icon: Car, label: "Airport Transfers" },
  { icon: Route, label: "Ground Transportation" },
  { icon: Users, label: "Group Travel Coordination" },
  { icon: Route, label: "Travel Itinerary Planning" },
  { icon: Headset, label: "Dedicated Travel Support" },
];

export default function CorporateTravelPage() {
  return (
    <>
      <Hero
        eyebrow="Corporate Travel Management"
        title="Travel Management Built Around Your Business"
        subtitle="Corporate travel is more than booking a flight. It requires coordination, efficiency, flexibility, cost awareness, and reliable support."
        backgroundImage="/images/corporate-travel.png"
        imageAlt="Scenic travel destination"
        size="sm"
      />

      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="Our Approach"
            title="Understand → Plan → Coordinate → Support"
            subtitle="From the first request to the completion of the journey, our team remains focused on delivering an efficient and professional travel experience."
            align="center"
          />
          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
            {corporateProcess.map((step, i) => (
              <div key={step} className="card text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-accent-light">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-primary">
                  {step}
                </h3>
                {i < corporateProcess.length - 1 && (
                  <ArrowRight className="mx-auto mt-3 hidden h-4 w-4 text-accent-dark md:block" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-white">
        <Container>
          <SectionHeader
            title="Our Corporate Travel Support Can Include"
            subtitle="We work to understand your organization's travel requirements and provide solutions aligned with your objectives."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {support.map((item) => (
              <div key={item.label} className="card flex flex-col items-start gap-3">
                <item.icon className="h-6 w-6 text-accent-dark" aria-hidden="true" />
                <p className="text-sm font-medium text-charcoal">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Get Started"
              title="Designed for Companies, Executives & Teams"
              subtitle="Whether you manage travel for a small team or a large organization, we tailor our support to your travel policy and requirements."
            />
          </div>
          <div className="card">
            <CorporateInquiryForm />
          </div>
        </Container>
      </section>

      <CTASection
        title="Simplify travel for your organization."
        subtitle="Talk to our corporate travel team about coordination, flexibility, and reliable support."
      />
    </>
  );
}
