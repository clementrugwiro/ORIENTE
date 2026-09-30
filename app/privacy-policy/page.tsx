import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import { companyInfo } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero eyebrow="Legal" title="Privacy Policy" size="sm" />
      <section className="section">
        <Container className="prose max-w-3xl">
          <p className="text-muted">
            This page will host the full Privacy Policy for {companyInfo.name}. Content is
            pending finalization and will describe how customer information submitted through
            our inquiry and contact forms is collected, used, and protected.
          </p>
          <p className="mt-4 text-muted">
            For questions about your data in the meantime, please contact us at{" "}
            <a href={`mailto:${companyInfo.contact.emails[0]}`} className="text-accent-dark">
              {companyInfo.contact.emails[0]}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
