import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import TravelInquiryForm from "@/components/forms/TravelInquiryForm";
import { destinations, getDestinationBySlug } from "@/lib/data/destinations";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const destination = getDestinationBySlug(params.slug);
  if (!destination) return {};
  return {
  title: `${destination.name} Travel Packages`,
  description:
    `Explore ${destination.name} with Oriente Travels. Discover destinations, experiences, travel packages and personalized journey planning from Rwanda.`,
  alternates: {
    canonical: `https://orientetravels.co.rw/destinations/${destination.slug}`,
  },
};
}

export default function DestinationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const destination = getDestinationBySlug(params.slug);
  if (!destination) notFound();

  return (
    <>
      <Hero
        eyebrow={destination.region}
        title={destination.name}
        subtitle={destination.description}
        backgroundImage={destination.image}
        size="sm"
      />

      <section className="section">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {destination.places && destination.places.length > 0 && (
              <>
                <h2 className="section-title">Places &amp; Experiences</h2>
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {destination.places.map((place) => (
                    <div key={place.name} className="card">
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" aria-hidden="true" />
                        <div>
                          <h3 className="font-display text-base font-semibold text-primary">
                            {place.name}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted">
                            {place.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            <p className="mt-10 text-sm leading-relaxed text-muted">
              Packages for {destination.name} can be customized according to your budget,
              travel period, interests, and preferred experiences. Depending on the package,
              arrangements may include flights, hotel accommodation, visa assistance, airport
              transfers, guided tours, and selected activities.
            </p>
          </div>
          <div className="card h-fit">
            <TravelInquiryForm />
          </div>
        </Container>
      </section>

      <CTASection
        title={`Ready to explore ${destination.name}?`}
        subtitle="Share your travel dates and preferences — our team will design an itinerary around them."
      />
    </>
  );
}
