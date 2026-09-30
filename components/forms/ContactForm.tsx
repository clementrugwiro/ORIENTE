import InquiryForm from "./InquiryForm";

export default function ContactForm() {
  return (
    <InquiryForm
      title="Send Us a Message"
      subtitle="Share a few details and our team will respond as soon as possible."
      fields={["phone", "service", "destination"]}
      submitLabel="Send Message"
      onSurface="light"
    />
  );
}
