import { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { destinations } from "@/lib/data/destinations";

const baseUrl = "https://www.orientetravels.co.rw";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/destinations",
    "/corporate-travel",
    "/car-rental",
    "/vehicle-sales",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const destinationRoutes = destinations.map((d) => ({
    url: `${baseUrl}/destinations/${d.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...destinationRoutes];
}
