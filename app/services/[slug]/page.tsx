import type { Metadata } from "next";
import { notFound } from "next/navigation";
import * as Icons from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";

import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import TravelInquiryForm from "@/components/forms/TravelInquiryForm";
import { services, getServiceBySlug } from "@/lib/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Compass;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Hero eyebrow="Our Services"
       title={service.name}
       subtitle={service.shortDescription}
       backgroundImage={service.image}
       size="sm" 
      />

      <section className="section">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </div>
            <p className="mt-6 text-base leading-relaxed text-muted">
              {service.description}
            </p>
            <h2 className="mt-10 font-display text-xl font-semibold text-primary">
              What this service covers
            </h2>
            <ul className="mt-4 space-y-3">
              {service.highlights.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-charcoal">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="card h-fit">
            <TravelInquiryForm />
          </div>
        </Container>
      </section>

      <section className="section bg-white">
        <Container>
          <h2 className="section-title">Related Services</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's plan the details."
        subtitle="Share your requirements and our team will follow up with tailored options."
      />
    </>
  );
}
