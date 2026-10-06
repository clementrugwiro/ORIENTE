export type FuelType = "Petrol" | "Diesel" | "Hybrid" | "Electric";

export const fuelTypes: { name: FuelType; emoji: string; description: string }[] = [
  { name: "Petrol", emoji: "⛽", description: "Familiar, widely serviced and easy to refuel." },
  { name: "Diesel", emoji: "🛢️", description: "Strong torque and range for work and long journeys." },
  { name: "Hybrid", emoji: "♻️", description: "Petrol and electric power working together for efficiency." },
  { name: "Electric", emoji: "⚡", description: "Zero tailpipe emissions with low running costs." },
];

export const vehicleTypes = [
  "Sedan",
  "Hatchback",
  "SUV / Crossover",
  "Pickup / Double Cab",
  "Van / Minibus",
  "Truck",
  "Other",
];

export const vehicleConditions = ["New", "Used", "No preference"];
