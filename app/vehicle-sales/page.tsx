import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import VehicleSalesExplorer from "@/components/VehicleSalesExplorer";
import { vehicleSalesProcess } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Vehicle Sales",
  description:
    "Discover a diverse selection of quality vehicles for personal, family and business needs. Choose from Petrol, Diesel, Hybrid and Electric vehicles, with professional assistance throughout your purchase journey.",
};

export default function VehicleSalesPage() {
  return (
    <>
      <Hero
        eyebrow="Mobility · Vehicle Sales"
        title="Find Your Next Vehicle with Oriente"
        subtitle="Discover a diverse selection of quality vehicles for personal, family and business needs. Choose from Petrol, Diesel, Hybrid and Electric vehicles, with professional assistance throughout your purchase journey."
        backgroundImage="/images/car-sales.png"
        imageAlt="Scenic travel destination"
        size="sm"
      >
        <Link href="#categories" className="btn-primary">
          Explore Vehicles <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link href="#request" className="btn-outline">
          Request a Vehicle
        </Link>
      </Hero>

      <VehicleSalesExplorer />

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

      <CTASection
        title="Looking for a specific vehicle?"
        subtitle="Tell us your requirements and our team will help connect you with a suitable option."
        primaryLabel="Request a Vehicle"
        primaryHref="#request"
      />
    </>
  );
}
