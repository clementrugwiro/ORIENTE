import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import VehicleInquiryForm from "@/components/forms/VehicleInquiryForm";
import { vehicleSalesProcess } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Vehicle Sales",
  description:
    "Oriente Travels & Tours helps clients identify suitable vehicles for personal or professional use, connecting them with the right options for their requirements.",
};

export default function VehicleSalesPage() {
  return (
    <>
      <Hero
        eyebrow="Mobility · Vehicle Sales"
        title="Find the Right Vehicle"
        subtitle="As part of our expanding mobility services, we help clients identify suitable vehicles for personal or professional use."
        backgroundImage="/images/car-sales.png"
        imageAlt="Scenic travel destination"
        size="sm"
      />

      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="Our Approach"
            title="Understand → Source → Select → Connect"
            subtitle="Our objective is to make the vehicle selection and purchasing experience more convenient by connecting clients with suitable vehicle options according to their requirements."
            align="center"
          />
          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
            {vehicleSalesProcess.map((step, i) => (
              <div key={step} className="card text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-accent-light">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-primary">
                  {step}
                </h3>
                {i < vehicleSalesProcess.length - 1 && (
                  <ArrowRight className="mx-auto mt-3 hidden h-4 w-4 text-accent-dark md:block" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-white">
        <Container>
          <p className="mx-auto max-w-2xl text-center text-muted">
            Our vehicle sales service is designed for individuals, businesses, organizations,
            and other clients seeking suitable vehicles for personal or professional use.
            Vehicle inventory will be available here in a future phase — for now, our team can
            guide you personally through available options.
          </p>
        </Container>
      </section>

      <section className="section">
        <Container className="mx-auto max-w-xl">
          <div className="card">
            <VehicleInquiryForm />
          </div>
        </Container>
      </section>

      <CTASection
        title="Looking for a specific vehicle?"
        subtitle="Tell us your requirements and our team will help connect you with a suitable option."
      />
    </>
  );
}
