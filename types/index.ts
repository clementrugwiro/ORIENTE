// Shared domain types for Oriente Travels & Tours.
// These types are consumed by static data files now, and are designed
// so a future database/API can populate the same shapes without
// requiring changes to the UI components.

export interface Service {
  slug: string;
  name: string;
  image: string;
  shortDescription: string;
  description: string;
  icon: string; // lucide-react icon name
  highlights: string[];
}

export interface Destination {
  slug: string;
  name: string;
  region:  "Rwanda" | "Africa" | "Dubai" | "Europe" | "USA" | "China";
  image: string; // Path under /public (e.g. "/images/destinations/rwanda.jpg") or a remote URL allowed in next.config.js
  country?: string;
  description: string;
  featured?: boolean;
  places?: { name: string; description: string }[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface Partner {
  name: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  category: string;
  transmission: "Automatic" | "Manual";
  fuelType: "Petrol" | "Diesel" | "Hybrid" | "Electric";
  seats: number;
  price?: number;
  images: string[];
  availability: boolean;
}

export interface Tour {
  slug: string;
  name: string;
  destinationSlug: string;
  summary: string;
}

export interface Booking {
  id: string;
  userId: string;
  serviceSlug: string;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  destination?: string;
  message: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "customer" | "admin";
}

export type ClientCategory =
  | "Corporate Clients"
  | "Groups"
  | "Families & Leisure Travelers"
  | "Executives & Professionals"
  | "Individual Travelers";
