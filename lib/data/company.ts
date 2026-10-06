import { TeamMember, ValueItem, Partner, ClientCategory } from "@/types";

export const companyInfo = {
  name: "Oriente Travels and Tours",
  brandName: "ORIENTE",
  brandSub: "Travels and Tours",
  founded: 2022,
  philosophy: "Listen. Simplify. Deliver.",
  tagline: "Your Journey. Our Expertise.",
  vision:
    "To become a leading and trusted travel, tourism, and mobility solutions company in Rwanda and beyond, recognized for exceptional service, innovation, reliability, and memorable experiences.",
  mission:
    "To make travel and mobility easier by providing professional, personalized, and dependable solutions that meet the unique needs of our clients while building long-lasting relationships with our customers and partners.",
  whoWeAre:
    "Oriente Travels and Tours is a Rwanda-based travel management and tourism company established in 2022, dedicated to providing reliable, professional, and personalized solutions for individuals, businesses, organizations, and groups. From airline ticketing and hotel reservations to visa assistance, tours, corporate travel, transportation, and vehicle solutions, we are committed to making every journey simpler, smoother, and more enjoyable.",
  journey:
    "Since our establishment in 2022, we have continued to develop our services and build relationships within the travel and tourism industry. Today, Oriente is evolving beyond traditional travel services into a broader travel, tourism, and mobility solutions company, expanding our offering to include car rental and vehicle sales.",
  contact: {
    phones: ["+250 788 611 795"],
    emails: ["travelsoriente@gmail.com", "rosine.gaby@gmail.com"],
    address: "CHIC Building, 2nd Floor, F007",
    // WhatsApp uses the main office line (international format, digits only)
    whatsapp: "250788611795",
    whatsappMessage: "Hello Oriente, I would like some assistance.",
  },
};

export const values: ValueItem[] = [
  { title: "Excellence", description: "We pursue high standards in every service and interaction." },
  { title: "Integrity", description: "We conduct our business with honesty, transparency, and professionalism." },
  { title: "Customer Focus", description: "Our clients are at the heart of every solution we provide." },
  { title: "Reliability", description: "We strive to be a dependable partner our clients can count on." },
  { title: "Professionalism", description: "We approach every journey, request, and partnership with responsibility and attention to detail." },
  { title: "Innovation", description: "We continuously look for better and smarter ways to make travel and mobility easier." },
  { title: "Relationships", description: "We believe strong, lasting relationships are the foundation of successful business." },
];

export const whyOriente: ValueItem[] = [
  { title: "Personalized Service", description: "We take time to understand individual and corporate requirements and develop solutions around them." },
  { title: "Professional Expertise", description: "Our team brings practical knowledge and experience to help clients make informed travel decisions." },
  { title: "End-to-End Solutions", description: "From booking and accommodation to visa assistance, transportation, and destination experiences, we bring multiple solutions together." },
  { title: "Corporate-Focused", description: "We understand that business travel requires efficiency, flexibility, coordination, and reliability." },
  { title: "Convenience", description: "Our objective is to reduce the complexity of travel and give our clients one trusted point of contact." },
  { title: "Trusted Partnerships", description: "We work with industry partners and service providers to deliver dependable travel solutions." },
];

export const team: TeamMember[] = [
  { name: "Rosine Umubyeyi", role: "Chief Executive Officer", image: "/images/team/Rosine.JPG" },
  { name: "Parfait Rwabuhungu", role: "Chief Operation Officer", image: "/images/team/Parfait.png" },
  { name: "Lea Umutoni", role: "Sales/Airticketing Officer", image: "/images/team/Lea.jpeg" }, 
  { name: "Jean Yves Nshimiye Rugira", role: "Tour/Marketing Officer", image: "/images/team/rugira.jpeg" },
  { name: "Tresor Simbi", role: "Car Rental/Sale Officer", image: "/images/team/Tresor.jpeg" },
  { name: "Phoibe Rwibutso", role: "Accountant", image: "/images/team/Phoibe.jpeg" },
];

export const clientCategories: ClientCategory[] = [
  "Corporate Clients",
  "Groups",
  "Families & Leisure Travelers",
  "Executives & Professionals",
  "Individual Travelers",
];

// No real partner names or logos were provided — kept empty so the UI
// renders neutral placeholders instead of inventing partners.
export const partners: Partner[] = [];

export const corporateProcess = ["Understand", "Plan", "Coordinate", "Support"];
export const vehicleSalesProcess = ["Understand", "Source", "Select", "Connect"];

export const carRentalSolutions = [
  "Short-Term Rental",
  "Longer-Term Rental",
  "Corporate Vehicle Solutions",
  "Airport & Destination Transport",
  "Chauffeur Services",
];
