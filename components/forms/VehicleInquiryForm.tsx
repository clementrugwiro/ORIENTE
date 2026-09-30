import InquiryForm from "./InquiryForm";

export default function VehicleInquiryForm() {
  return (
    <InquiryForm
      title="Vehicle Rental / Purchase Inquiry"
      subtitle="Let us know what you need a vehicle for, and we'll match you with a suitable option."
      fields={["phone", "dates"]}
      defaultService="Car Rental"
      submitLabel="Send Vehicle Inquiry"
    />
  );
}
