import { Inquiry } from "@/types";

// Submits a website form to /api/inquiry, which emails the details to Oriente via Resend.
// Every form calls this one function, so no component needs to know how delivery works.
export async function submitInquiry(
  data: Omit<Inquiry, "id" | "createdAt">
): Promise<{ ok: boolean; message: string }> {
  try {
    const res = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = (await res.json().catch(() => null)) as { ok?: boolean; message?: string } | null;
    if (res.ok && json?.ok) {
      return { ok: true, message: json.message ?? "Thank you — your request has been received." };
    }
    return {
      ok: false,
      message: json?.message ?? "Something went wrong. Please try again or contact us on WhatsApp.",
    };
  } catch {
    return { ok: false, message: "Network error. Please check your connection and try again." };
  }
}