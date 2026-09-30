import Button from "@/components/Button";
import Container from "@/components/Container";

export default function CTASection({
  title,
  subtitle,
  primaryLabel = "Plan Your Journey",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="section bg-primary text-white">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl font-display text-3xl font-semibold md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="max-w-xl text-white/70">{subtitle}</p>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={primaryHref} variant="primary">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button href={secondaryHref} variant="outline">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
