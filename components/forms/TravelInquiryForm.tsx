import InquiryForm from "./InquiryForm";

export default function TravelInquiryForm() {
  return (
    <InquiryForm
      title="Plan Your Journey"
      subtitle="Tell us about your travel type, destination, dates, and travelers — we'll take it from there."
      fields={["destination", "dates", "travelers", "phone", "service"]}
      submitLabel="Send Travel Inquiry"
    />
  );
}
