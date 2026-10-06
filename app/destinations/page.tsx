import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import DestinationCard from "@/components/DestinationCard";
import CTASection from "@/components/CTASection";
import { destinations } from "@/lib/data/destinations";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore destinations with Oriente Travels and Tours: Rwanda, Dubai, Africa, Europe, USA, and China.",
};

export default function DestinationsPage() {
  return (
    <>
      <Hero
        eyebrow="Where We Travel"
        title="Explore Our Destinations"
        subtitle="Dubai leads our destination focus, while Rwanda, East Africa, and Europe offer diverse opportunities to explore the world."
        backgroundImage="/images/slash-destinations.png"
        imageAlt="Scenic travel destination"
        size="sm"
      />
      <section className="section">
        <Container>
          <SectionHeader
            title="Popular Destination Regions"
            subtitle="Professional. Convenient. Personalized. Reliable."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Have a destination in mind?"
        subtitle="Tell us where you'd like to go and we'll help design the journey."
      />
    </>
  );
}
