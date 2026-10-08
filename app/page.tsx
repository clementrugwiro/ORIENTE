import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Users, Sparkles } from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import DestinationCard from "@/components/DestinationCard";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import TravelInquiryForm from "@/components/forms/TravelInquiryForm";
import { services } from "@/lib/data/services";
import { destinations } from "@/lib/data/destinations";
import { whyOriente, companyInfo } from "@/lib/data/company";

const iconMap = [Compass, ShieldCheck, Users, Sparkles];
const colorMap = [
  { bg: "bg-blue-100", badge: "bg-white/70", icon: "text-blue-700" },
  { bg: "bg-amber-100", badge: "bg-white/70", icon: "text-amber-700" },
  { bg: "bg-emerald-100", badge: "bg-white/70", icon: "text-emerald-700" },
  { bg: "bg-rose-100", badge: "bg-white/70", icon: "text-rose-700" },
  { bg: "bg-indigo-100", badge: "bg-white/70", icon: "text-indigo-700" },
  { bg: "bg-teal-100", badge: "bg-white/70", icon: "text-teal-700" },
];

export default function HomePage() {
  const dubai = destinations.find((d) => d.slug === "dubai")!;
  const rwanda = destinations.find((d) => d.slug === "rwanda")!;

  return (
    <>
      <Hero
        eyebrow="Rwanda → The World"
        title="Travel, Tourism & Mobility Solutions"
        subtitle="Your Journey. Our Expertise. Professional, personalized and dependable travel, tourism and mobility solutions from Rwanda to the world."
        backgroundImage="/images/airplane-taking-off-sunset.jpg"
        imageAlt="Scenic travel destination"
        animated
      >
        <Link href="/contact" className="btn-primary">
          Plan Your Journey <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link href="/services" className="btn-outline">
          Explore Our Services
        </Link>
      </Hero>

      {/* Stats strip */}
      <section className="relative -mt-12 pb-4">
        <Container>
          <StatsSection />
        </Container>
      </section>

    

      {/* Services */}
      <section className="section bg-white">
        <Container>
          <SectionHeader
            eyebrow="What We Do"
            title="Travel, Tourism & Mobility Services"
            subtitle="From airline ticketing to vehicle sales, we bring the full journey together under one trusted brand."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>
      

      {/* Why Oriente */}
      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="Why Oriente"
            title="More Than a Service Provider. A Travel Partner."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyOriente.map((item, i) => {
              const Icon = iconMap[i % iconMap.length];
              const color = colorMap[i % colorMap.length];
              return (
             <div
        key={item.title}
        className={`rounded-2xl p-6 shadow-card transition-shadow duration-200 hover:shadow-cardHover ${color.bg}`}
      >
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${color.badge}`}>
          <Icon className={`h-6 w-6 ${color.icon}`} aria-hidden="true" />
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold text-primary">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
          {item.description}
        </p>
      </div>
              );
            })}
          </div>
        </Container>
      </section>
        {/* Travel inquiry */}
      <section id="plan" className="section scroll-mt-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Start Planning"
              title="Tell us about your trip"
              subtitle="Share your travel type, destination, dates, and number of travelers — our team will follow up with tailored options."
            />
          </div>
          <div className="card">
            <TravelInquiryForm />
          </div>
        </Container>
      </section>

      {/* Featured Dubai */}
      <section className="section bg-primary text-white">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="section-eyebrow text-accent-light">Featured Destination</span>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Discover Dubai</h2>
            <p className="mt-4 max-w-lg text-white/70">
              {dubai.description} From adventure and relaxation to shopping and culture, we can help design a Dubai experience suited to your interests.
            </p>
            <Link href={`/destinations/${dubai.slug}`} className="btn-primary mt-6 inline-flex">
              Explore Dubai <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {dubai.places?.slice(0, 4).map((place) => (
              <div key={place.name} className="rounded-xl bg-white/5 p-4 backdrop-blur">
                <p className="font-display text-sm font-semibold text-accent-light">{place.name}</p>
                <p className="mt-1 text-xs text-white/60">{place.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Rwanda section */}
      <section className="section bg-white bg-gradient-to-br from-surface via-white to-surface">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            {rwanda.places?.slice(0, 4).map((place) => (
               <div
          key={place.name}
          className="group rounded-xl border-t-4 border-accent bg-white p-4 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-cardHover">
                <p className="font-display text-sm font-semibold text-primary">{place.name}</p>
                <p className="mt-1 text-xs text-muted">{place.description}</p>
              </div>
            ))}
          </div>
          <div className="order-1 lg:order-2">
            <span className="section-eyebrow">Home Base</span>
            <h2 className="section-title">Discover Rwanda</h2>
            <p className="section-subtitle">
              Experience the Land of a Thousand Hills — {rwanda.description.toLowerCase()}
            </p>
            <Link href={`/destinations/${rwanda.slug}`} className="btn-primary mt-6 inline-flex">
              Explore Rwanda <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      {/* All destinations */}
      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="Where We Travel"
            title="Explore Our Destinations"
            subtitle={`${companyInfo.philosophy} Explore Rwanda, Dubai, Africa, Europe, USA, and China with a trusted travel partner.`}
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Your Journey Starts Here"
        subtitle="Whether you're booking a flight, planning a holiday, renting a vehicle or looking for your next car, Oriente Travels and Tours is here to make every journey simple, seamless and memorable."
        primaryLabel="Plan Your Journey"
        primaryHref="/#plan"
        secondaryLabel="Contact Oriente"
        secondaryHref="/contact"
      />
    </>
  );
}
