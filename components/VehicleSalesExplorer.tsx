"use client";

import { useState } from "react";
import Container from "@/components/Container";
import VehicleSalesForm from "@/components/forms/VehicleSalesForm";
import { fuelTypes, type FuelType } from "@/lib/data/vehicles";
import { cn } from "@/lib/utils/cn";

/** Fuel category cards + request form. Choosing a card pre-selects the fuel type in the form. */
export default function VehicleSalesExplorer() {
  const [fuelType, setFuelType] = useState<FuelType | "">("");

  function choose(name: FuelType) {
    setFuelType(name);
    document.getElementById("request")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <section id="categories" className="section scroll-mt-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {fuelTypes.map((f) => (
              <button
                key={f.name}
                type="button"
                onClick={() => choose(f.name)}
                aria-pressed={fuelType === f.name}
                className={cn(
                  "card flex flex-col items-center py-10 text-center focus-ring",
                  fuelType === f.name && "ring-2 ring-accent"
                )}
              >
                <span className="text-4xl" aria-hidden="true">{f.emoji}</span>
                <h3 className="mt-4 font-display text-xl font-semibold text-primary">{f.name}</h3>
                <p className="mt-2 text-sm text-muted">{f.description}</p>
                <span className="mt-4 text-sm font-semibold text-accent-dark">
                  Request a {f.name.toLowerCase()} vehicle →
                </span>
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section id="request" className="section scroll-mt-24 bg-white">
        <Container className="mx-auto max-w-xl">
          <div className="card">
            <VehicleSalesForm fuelType={fuelType} onFuelTypeChange={setFuelType} />
          </div>
        </Container>
      </section>
    </>
  );
}
