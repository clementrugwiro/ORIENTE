import { NextResponse } from "next/server";

// Sends every website form to Oriente's inbox through Resend's REST API (no extra npm package needed).
// Env vars (set in .env.local and in Vercel → Settings → Environment Variables):
//   RESEND_API_KEY      required
//   INQUIRY_TO_EMAIL    optional, defaults to travelsoriente@gmail.com
//   RESEND_FROM_EMAIL   optional. Leave unset until your domain is verified in Resend; then use
//                       e.g. "Oriente Travels and Tours <info@yourdomain.com>"
export const runtime = "nodejs";

const DEFAULT_TO = "travelsoriente@gmail.com";
const TEST_FROM = "Oriente Website <onboarding@resend.dev>"; // Resend's shared sender, for testing only

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

// Best-effort throttle (per server instance): 5 submissions per 10 minutes per IP.
const hits = new Map<string, number[]>();
function tooMany(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

async function sendEmail(payload: Record<string, unknown>, apiKey: string) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ ok: false, message: "Email service is not configured." }, { status: 500 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (tooMany(ip)) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 60);
  const service = clean(body.service, 120);
  const destination = clean(body.destination, 120);
  const message = clean(body.message, 4000);

  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ ok: false, message: "Please check your name, email and message." }, { status: 400 });
  }

  const to = process.env.INQUIRY_TO_EMAIL || DEFAULT_TO;
  const customFrom = process.env.RESEND_FROM_EMAIL;
  const from = customFrom || TEST_FROM;

  // Forms join extra details with " — "; show each on its own line in the email.
  const lines = message.split(" \u2014 ").map((l) => l.trim()).filter(Boolean);
  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Service", service],
    ["Destination", destination],
  ];
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;color:#1F2430">
      <h2 style="color:#0B2545;margin:0 0 12px">New website inquiry${service ? ` — ${esc(service)}` : ""}</h2>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .filter(([, v]) => v)
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 12px 6px 0;color:#6B7280;vertical-align:top">${k}</td><td style="padding:6px 0"><strong>${esc(v)}</strong></td></tr>`
          )
          .join("")}
      </table>
      <h3 style="color:#0B2545;margin:20px 0 8px">Message</h3>
      <div style="background:#F7F5F0;border-radius:8px;padding:12px 16px;line-height:1.6">
        ${lines.map((l) => esc(l)).join("<br/>")}
      </div>
      <p style="color:#6B7280;font-size:12px;margin-top:16px">Hit Reply to answer ${esc(name)} directly.</p>
    </div>`;
  const text = [`New website inquiry${service ? ` - ${service}` : ""}`, ...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`), "", ...lines].join("\n");

  const res = await sendEmail(
    {
      from,
      to: [to],
      reply_to: email,
      subject: `New inquiry${service ? ` — ${service}` : ""} from ${name}`,
      html,
      text,
    },
    apiKey
  );

  if (!res.ok) {
    console.error("Resend error:", res.status, await res.text());
    return NextResponse.json(
      { ok: false, message: "We couldn't send your request. Please try again or contact us on WhatsApp." },
      { status: 502 }
    );
  }

  // Confirmation to the customer, only once a verified sender domain is configured
  // (Resend's shared test sender can only deliver to the account owner).
  if (customFrom) {
    const conf = await sendEmail(
      {
        from: customFrom,
        to: [email],
        subject: "We've received your request — Oriente Travels and Tours",
        html: `<div style="font-family:Arial,sans-serif;max-width:560px;color:#1F2430">
          <h2 style="color:#0B2545">Thank you, ${esc(name)}!</h2>
          <p>We've received your request and our team will get back to you shortly.</p>
          <p>Need a faster reply? Message us on WhatsApp or call our office.</p>
          <p style="color:#6B7280">— Oriente Travels and Tours</p></div>`,
      },
      apiKey
    );
    if (!conf.ok) console.error("Confirmation email failed:", conf.status, await conf.text());
  }

  return NextResponse.json({
    ok: true,
    message: "Thank you — your request has been received. Our team will get back to you shortly.",
  });
}