import { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "airline-ticketing",
    name: "Airline Ticketing",
    image: "/images/services/airline.jpg",
    shortDescription:
      "Domestic and international flight booking solutions designed around your schedule.",
    description:
      "We handle domestic and international flight booking solutions designed around your schedule and travel requirements, helping you find dependable routing and fares without the guesswork.",
    icon: "Plane",
    highlights: [
      "Domestic and international routing",
      "Schedules built around your itinerary",
      "Support for individuals and groups",
    ],
  },
  {
    slug: "hotel-reservations",
    name: "Hotel Reservations",
    image: "/images/services/hotel-reservation.jpg",
    shortDescription:
      "Accommodation solutions for business trips, holidays, groups, and special requirements.",
    description:
      "From business trips to holidays, groups, and special travel requirements, we arrange accommodation solutions that match your budget, schedule, and expectations.",
    icon: "BedDouble",
    highlights: [
      "Business, leisure, and group stays",
      "Options matched to budget and schedule",
      "Coordinated alongside your full itinerary",
    ],
  },
  {
    slug: "visa-assistance",
    name: "Visa Assistance",
    image: "/images/services/visa.jpg",
    shortDescription:
      "Professional guidance through the visa application process for your destination.",
    description:
      "We provide professional guidance and support through the visa application process, based on the specific requirements of your destination.",
    icon: "FileCheck2",
    highlights: [
      "Guidance based on destination requirements",
      "Support throughout the application process",
      "Clear communication at every step",
    ],
  },
  {
    slug: "travel-consultation",
    name: "Travel Consultation",
    image: "/images/services/travel-consultation.jpg",
    shortDescription:
      "Travel planning and professional guidance to help you make informed decisions.",
    description:
      "Our travel consultation service offers planning and professional guidance to help clients make informed decisions about their journey, from routing to destination choice.",
    icon: "MessagesSquare",
    highlights: [
      "Personalized travel planning",
      "Informed, practical recommendations",
      "Support for individuals and organizations",
    ],
  },
  {
    slug: "tour-packages",
    name: "Tour Packages",
    image: "/images/services/tour-packages.png",
    shortDescription:
      "Tailored travel experiences designed for individuals, families, groups, and organizations.",
    description:
      "Our tour packages are tailored travel experiences designed for individuals, families, groups, and organizations, helping you discover destinations in a convenient and memorable way.",
    icon: "MapPinned",
    highlights: [
      "Tailored to individuals, families, and groups",
      "Focused on Rwanda, Dubai, East Africa, and Europe",
      "Customized to budget, period, and interests",
    ],
  },
  {
    slug: "corporate-travel-management",
    name: "Corporate Travel Management",
    image: "/images/services/corporate.jpg",
    shortDescription:
      "Travel planning and management solutions designed around the needs of businesses.",
    description:
      "We provide travel management solutions designed to meet the requirements of companies, organizations, executives, technical teams, and other business travelers — covering coordination, efficiency, flexibility, cost awareness, and reliable support.",
    icon: "Briefcase",
    highlights: [
      "Flight, hotel, and visa coordination",
      "Ground transportation and airport transfers",
      "Dedicated travel support",
    ],
  },
  {
    slug: "car-rental",
    name: "Car Rental",
    image: "/images/services/rentals.png",
    shortDescription:
      "Convenient vehicle solutions for travelers, businesses, and individuals.",
    description:
      "Our Car Rental division provides convenient vehicle solutions for travelers, businesses, organizations, and individuals looking for reliable transportation during their journey.",
    icon: "Car",
    highlights: [
      "Short-term and longer-term rental",
      "Corporate vehicle solutions",
      "Airport transfers and chauffeur services",
    ],
  },
  {
    slug: "vehicle-sales",
    name: "Vehicle Sales",
    image: "/images/services/car-sales.png",
    shortDescription:
      "Helping clients identify and connect with suitable vehicle options.",
    description:
      "As part of our expanding mobility services, we help clients identify suitable vehicles for personal or professional use, connecting them with the right options for their requirements.",
    icon: "Car",
    highlights: [
      "Guidance through vehicle selection",
      "For individuals, businesses, and organizations",
      "Convenient, requirement-based matching",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
