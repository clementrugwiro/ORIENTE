import Link from "next/link";
import { Compass } from "lucide-react";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="section">
      <Container className="flex flex-col items-center gap-4 text-center">
        <Compass className="h-10 w-10 text-accent-dark" aria-hidden="true" />
        <h1 className="section-title">Page Not Found</h1>
        <p className="section-subtitle">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link href="/" className="btn-primary mt-4">
          Back to Home
        </Link>
      </Container>
    </section>
  );
}
