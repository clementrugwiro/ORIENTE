"use client";

import { useState, FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import FormField, { inputClass } from "./FormField";
import Button from "@/components/Button";
import { submitInquiry } from "@/lib/services/inquiryService";
import { services } from "@/lib/data/services";
import { destinations } from "@/lib/data/destinations";

type Field = "destination" | "dates" | "travelers" | "phone" | "service";

interface InquiryFormProps {
  title?: string;
  subtitle?: string;
  fields?: Field[];
  defaultService?: string;
  submitLabel?: string;
  onSurface?: "light" | "dark";
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  destination: string;
  dates: string;
  travelers: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  destination: "",
  dates: "",
  travelers: "",
  message: "",
};

export default function InquiryForm({
  title = "Send an Inquiry",
  subtitle,
  fields = ["destination", "dates", "travelers", "phone", "service"],
  defaultService,
  submitLabel = "Submit Inquiry",
  onSurface = "light",
}: InquiryFormProps) {
  const [form, setForm] = useState<FormState>({
    ...initialState,
    service: defaultService ?? "",
  });
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
    if (!form.message.trim()) next.message = "Please tell us a little about your request.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    const result = await submitInquiry({
      name: form.name,
      email: form.email,
      phone: form.phone || undefined,
      service: form.service || undefined,
      destination: form.destination || undefined,
      message: [form.message, form.dates && `Dates: ${form.dates}`, form.travelers && `Travelers: ${form.travelers}`]
        .filter(Boolean)
        .join(" \u2014 "),
    });
    setFeedback(result.message);
    setStatus(result.ok ? "success" : "error");
    if (result.ok) {
      setForm({ ...initialState, service: defaultService ?? "" });
    }
  }

  const labelColor = onSurface === "dark" ? "text-white" : "text-charcoal";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {(title || subtitle) && (
        <div>
          {title && <h3 className={`font-display text-xl font-semibold ${labelColor}`}>{title}</h3>}
          {subtitle && <p className="mt-1 text-sm text-muted">{subtitle}</p>}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            className={inputClass}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            autoComplete="name"
          />
        </FormField>
        <FormField label="Email" htmlFor="email" error={errors.email}>
          <input
            id="email"
            type="email"
            className={inputClass}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            autoComplete="email"
          />
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {fields.includes("phone") && (
          <FormField label="Phone Number" htmlFor="phone">
            <input
              id="phone"
              type="tel"
              className={inputClass}
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              autoComplete="tel"
            />
          </FormField>
        )}
        {fields.includes("service") && (
          <FormField label="Service of Interest" htmlFor="service">
            <select
              id="service"
              className={inputClass}
              value={form.service}
              onChange={(e) => update("service", e.target.value)}
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </FormField>
        )}
      </div>

      {fields.includes("destination") && (
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Destination" htmlFor="destination">
            <select
              id="destination"
              className={inputClass}
              value={form.destination}
              onChange={(e) => update("destination", e.target.value)}
            >
              <option value="">Select a destination</option>
              {destinations.map((d) => (
                <option key={d.slug} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
          </FormField>
          {fields.includes("travelers") && (
            <FormField label="Number of Travelers" htmlFor="travelers">
              <input
                id="travelers"
                type="number"
                min={1}
                className={inputClass}
                value={form.travelers}
                onChange={(e) => update("travelers", e.target.value)}
              />
            </FormField>
          )}
        </div>
      )}

      {fields.includes("dates") && (
        <FormField label="Preferred Travel Dates" htmlFor="dates">
          <input
            id="dates"
            type="text"
            placeholder="e.g. 12 - 20 December 2026"
            className={inputClass}
            value={form.dates}
            onChange={(e) => update("dates", e.target.value)}
          />
        </FormField>
      )}

      <FormField label="Message" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          rows={4}
          className={inputClass}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </FormField>

      <div className="flex items-center gap-4">
        <Button type="submit" variant="primary" className="disabled:opacity-70">
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            submitLabel
          )}
        </Button>
        {status === "success" && (
          <span className="flex items-center gap-1.5 text-sm font-medium text-green-700">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            Sent
          </span>
        )}
        {status === "error" && (
          <span className="flex items-center gap-1.5 text-sm font-medium text-red-600">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            Something went wrong
          </span>
        )}
      </div>
      {status === "success" && (
        <p role="status" className="text-sm text-green-700">{feedback}</p>
      )}
    </form>
  );
}
