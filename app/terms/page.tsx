import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import { companyInfo } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <>
      <Hero eyebrow="Legal" title="Terms & Conditions" size="sm" />
      <section className="section">
        <Container className="prose max-w-3xl">
          <p className="text-muted">
            This page will host the full Terms &amp; Conditions for {companyInfo.name}. Content
            is pending finalization and will describe the terms under which our travel, tourism,
            and mobility services are provided.
          </p>
        </Container>
      </section>
    </>
  );
}
