import type { Metadata } from "next";
import { Eye, Target } from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ValueCard from "@/components/ValueCard";
import TeamCard from "@/components/TeamCard";
import CTASection from "@/components/CTASection";
import { companyInfo, values, whyOriente, team } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Oriente Travels and Tours: our journey since 2022, our mission and vision, our values, and the team behind the journey.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Oriente"
        title="More Than a Service Provider. A Travel Partner."
        subtitle={companyInfo.whoWeAre}
        backgroundImage="/images/about.png"
        imageAlt="Scenic travel destination"
        size="sm"
      />

      <section className="section">
        <Container>
          <SectionHeader eyebrow="Who We Are" title="Our Journey" />
          <p className="section-subtitle mt-4 max-w-3xl">{companyInfo.journey}</p>
        </Container>
      </section>

      <section className="section bg-white">
        <Container className="grid gap-8 md:grid-cols-2">
          <div className="card">
            <Eye className="h-6 w-6 text-accent-dark" aria-hidden="true" />
            <h3 className="mt-4 font-display text-xl font-semibold text-primary">Our Vision</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{companyInfo.vision}</p>
          </div>
          <div className="card">
            <Target className="h-6 w-6 text-accent-dark" aria-hidden="true" />
            <h3 className="mt-4 font-display text-xl font-semibold text-primary">Our Mission</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{companyInfo.mission}</p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeader eyebrow="What Drives Us" title="Our Values" align="center" />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <ValueCard key={value.title} value={value} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-white">
        <Container>
          <SectionHeader
            eyebrow="Why Oriente"
            title="More Than a Service Provider. A Travel Partner."
            subtitle="Choosing Oriente means choosing a team committed to making your experience easier from beginning to end."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyOriente.map((item) => (
              <ValueCard key={item.title} value={item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="People Behind the Journey"
            title="Our Team"
            subtitle="Behind every successful journey is a team that understands the importance of preparation, coordination, and attention to detail."
            align="center"
          />
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's build your journey together."
        subtitle="Reach out and our team will design a travel or mobility solution tailored to your needs."
      />
    </>
  );
}
