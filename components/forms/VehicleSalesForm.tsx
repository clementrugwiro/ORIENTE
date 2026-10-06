"use client";

import { useState, FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import FormField, { inputClass } from "./FormField";
import Button from "@/components/Button";
import { submitInquiry } from "@/lib/services/inquiryService";
import { vehicleTypes, fuelTypes, vehicleConditions, type FuelType } from "@/lib/data/vehicles";

interface FormState {
  name: string;
  email: string;
  phone: string;
  vehicleType: string;
  fuelType: string;
  brand: string;
  budget: string;
  condition: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  vehicleType: "",
  fuelType: "",
  brand: "",
  budget: "",
  condition: "",
  message: "",
};

export default function VehicleSalesForm({
  fuelType,
  onFuelTypeChange,
}: {
  /** Controlled fuel type, so the category cards above can pre-select it. */
  fuelType: FuelType | "";
  onFuelTypeChange: (value: FuelType | "") => void;
}) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Please tell us a little about what you're looking for.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    const details = [
      form.vehicleType && `Vehicle type: ${form.vehicleType}`,
      fuelType && `Fuel type: ${fuelType}`,
      form.brand && `Preferred brand: ${form.brand}`,
      form.budget && `Budget: ${form.budget}`,
      form.condition && `New/Used: ${form.condition}`,
    ].filter(Boolean);
    const result = await submitInquiry({
      name: form.name,
      email: form.email,
      phone: form.phone || undefined,
      service: "Vehicle Sales",
      message: [form.message, ...details].join(" \u2014 "),
    });
    setFeedback(result.message);
    setStatus(result.ok ? "success" : "error");
    if (result.ok) {
      setForm(initialState);
      onFuelTypeChange("");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <h3 className="font-display text-xl font-semibold text-charcoal">Request a Vehicle</h3>
        <p className="mt-1 text-sm text-muted">
          Tell us what you&apos;re looking for and our team will come back with suitable options.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" htmlFor="vs-name" error={errors.name}>
          <input id="vs-name" className={inputClass} value={form.name} autoComplete="name"
            onChange={(e) => update("name", e.target.value)} />
        </FormField>
        <FormField label="Email" htmlFor="vs-email" error={errors.email}>
          <input id="vs-email" type="email" className={inputClass} value={form.email} autoComplete="email"
            onChange={(e) => update("email", e.target.value)} />
        </FormField>
      </div>

      <FormField label="Phone Number" htmlFor="vs-phone">
        <input id="vs-phone" type="tel" className={inputClass} value={form.phone} autoComplete="tel"
          onChange={(e) => update("phone", e.target.value)} />
      </FormField>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Vehicle Type" htmlFor="vs-type">
          <select id="vs-type" className={inputClass} value={form.vehicleType}
            onChange={(e) => update("vehicleType", e.target.value)}>
            <option value="">Select a vehicle type</option>
            {vehicleTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </FormField>
        <FormField label="Fuel Type" htmlFor="vs-fuel">
          <select id="vs-fuel" className={inputClass} value={fuelType}
            onChange={(e) => onFuelTypeChange(e.target.value as FuelType | "")}>
            <option value="">Select a fuel type</option>
            {fuelTypes.map((f) => <option key={f.name} value={f.name}>{f.name}</option>)}
          </select>
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Preferred Brand" htmlFor="vs-brand">
          <input id="vs-brand" className={inputClass} value={form.brand} placeholder="e.g. Toyota"
            onChange={(e) => update("brand", e.target.value)} />
        </FormField>
        <FormField label="Budget" htmlFor="vs-budget">
          <input id="vs-budget" className={inputClass} value={form.budget} placeholder="e.g. USD 15,000"
            onChange={(e) => update("budget", e.target.value)} />
        </FormField>
      </div>

      <FormField label="New / Used" htmlFor="vs-condition">
        <select id="vs-condition" className={inputClass} value={form.condition}
          onChange={(e) => update("condition", e.target.value)}>
          <option value="">Select a preference</option>
          {vehicleConditions.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </FormField>

      <FormField label="Message" htmlFor="vs-message" error={errors.message}>
        <textarea id="vs-message" rows={4} className={inputClass} value={form.message}
          onChange={(e) => update("message", e.target.value)} />
      </FormField>

      <div className="flex items-center gap-4">
        <Button type="submit" variant="primary" className="disabled:opacity-70">
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            "Request a Vehicle"
          )}
        </Button>
        {status === "success" && (
          <span className="flex items-center gap-1.5 text-sm font-medium text-green-700">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Sent
          </span>
        )}
        {status === "error" && (
          <span className="flex items-center gap-1.5 text-sm font-medium text-red-600">
            <AlertCircle className="h-4 w-4" aria-hidden="true" /> Something went wrong
          </span>
        )}
      </div>
      {status === "success" && <p role="status" className="text-sm text-green-700">{feedback}</p>}
    </form>
  );
}
