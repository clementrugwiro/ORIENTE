import { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    slug: "rwanda",
    name: "Rwanda",
    region: "Rwanda",
    image: "/images/destinations/rwanda.jpg",
    description:
      "The Land of a Thousand Hills — an exceptional combination of wildlife, breathtaking landscapes, culture, and modern city experiences.",
    featured: true,
    places: [
      { name: "Kigali City", description: "A clean, vibrant, and growing African capital." },
      { name: "Musanze", description: "A gateway to mountain adventures and Volcanoes National Park." },
      { name: "Lake Kivu", description: "Ideal for relaxation and beautiful lakeside experiences." },
      { name: "Volcanoes National Park", description: "Famous for mountain gorilla trekking." },
      { name: "Nyungwe National Park", description: "Known for its rainforest and primate experiences." },
      { name: "Akagera National Park", description: "A leading wildlife and safari destination." },
    ],
  },
  {
    slug: "dubai",
    name: "Dubai",
    region: "Dubai",
    image: "/images/destinations/dubai.jpg",
    description:
      "Known for modern architecture, luxury lifestyle, beautiful beaches, shopping experiences, and exciting entertainment — a major focus of our tourism portfolio.",
    featured: true,
    places: [
      { name: "Burj Khalifa", description: "One of the world's most iconic skyscrapers." },
      { name: "Dubai Mall", description: "A leading destination for shopping and entertainment." },
      { name: "Palm Jumeirah", description: "Famous for luxury hotels and beautiful coastal views." },
      { name: "Dubai Marina", description: "Known for its modern waterfront lifestyle." },
      { name: "Desert Safari", description: "An exciting experience featuring the beauty of the Arabian desert." },
      { name: "Dubai Creek", description: "A historic area offering a glimpse into Dubai's cultural heritage." },
      { name: "Global Village", description: "A popular destination celebrating cultures from around the world." },
      { name: "Jumeirah Beach", description: "A relaxing destination for beach lovers." },
      { name: "Museum of the Future", description: "A unique attraction showcasing innovation and future possibilities." },
    ],
  },
  {
    slug: "east-africa",
    name: "Africa",
    region: "Africa",
    image: "/images/destinations/africa.jpg",
    description:
      "Breathtaking wildlife safaris, mountain adventures, beautiful beaches, and vibrant cities across Kenya, Uganda, and Tanzania.",
    places: [
      { name: "Kenya — Maasai Mara, Nairobi, Diani Beach, Lake Nakuru", description: "Wildlife, beaches, and vibrant city life." },
      { name: "Tanzania — Serengeti, Kilimanjaro, Ngorongoro, Zanzibar", description: "Iconic safaris and island escapes." },
      { name: "Uganda — Bwindi, Queen Elizabeth NP, Kampala, Murchison Falls", description: "Primates, parks, and waterfalls." },
    ],
  },
  {
    slug: "europe",
    name: "Europe",
    region: "Europe",
    image: "/images/destinations/europe.jpg",
    description:
      "Historic landmarks, world-famous museums, modern cities, shopping, cuisine, and cultural events across France, the UK, Italy, the Netherlands, Spain, and Germany.",
    places: [
      { name: "France — Paris, Nice", description: "Iconic culture and coastline." },
      { name: "United Kingdom — London, Manchester", description: "History and modern city life." },
      { name: "Italy — Rome, Milan, Venice", description: "Art, history, and cuisine." },
      { name: "Netherlands — Amsterdam", description: "Canals and culture." },
      { name: "Spain — Madrid, Barcelona", description: "Vibrant cities and architecture." },
      { name: "Germany — Berlin, Frankfurt", description: "Business and history." },
    ],
  },
  {
    slug: "usa",
    name: "USA",
    region: "USA",
    image: "/images/destinations/usa.jpg",
    description:
      "From iconic skylines to national parks, the United States offers world-class cities, entertainment, and business destinations for every kind of traveler.",
    places: [
      { name: "New York City", description: "Iconic skyline, Broadway, and world-class shopping." },
      { name: "Los Angeles", description: "Hollywood, beaches, and entertainment." },
      { name: "Las Vegas", description: "Entertainment, shows, and nightlife." },
      { name: "Washington, D.C.", description: "History, monuments, and culture." },
      { name: "Miami", description: "Beaches, nightlife, and vibrant culture." },
    ],
  },
  {
    slug: "china",
    name: "China",
    region: "China",
    image: "/images/destinations/china.jpg",
    description:
      "A destination rich in history and modern innovation, offering ancient landmarks alongside dynamic, modern cities.",
    places: [
      { name: "Beijing", description: "The Great Wall, the Forbidden City, and rich history." },
      { name: "Shanghai", description: "A dynamic skyline and modern city life." },
      { name: "Guangzhou", description: "A major business and trade hub." },
      { name: "Hong Kong", description: "A vibrant blend of East and West." },
    ],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}