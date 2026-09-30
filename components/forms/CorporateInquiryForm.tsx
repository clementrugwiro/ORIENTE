import InquiryForm from "./InquiryForm";

export default function CorporateInquiryForm() {
  return (
    <InquiryForm
      title="Request Corporate Travel Support"
      subtitle="Tell us about your organization's travel needs — coordination, frequency, and destinations."
      fields={["phone", "destination"]}
      defaultService="Corporate Travel Management"
      submitLabel="Request Consultation"
    />
  );
}
