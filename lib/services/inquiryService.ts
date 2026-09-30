import { Inquiry } from "@/types";

// Placeholder service layer for inquiry submission.
// Phase 1: no backend exists yet, so this mocks a submission.
// Future phases can swap the body of this function to call
// POST /api/contact (or a booking/inquiry API) without changing
// any component that calls submitInquiry().
export async function submitInquiry(
  data: Omit<Inquiry, "id" | "createdAt">
): Promise<{ ok: boolean; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 700));
  // eslint-disable-next-line no-console
  console.log("Inquiry submitted (mock):", data);
  return {
    ok: true,
    message:
      "Thank you — your request has been received. Our team will get back to you shortly.",
  };
}
