import InquiryForm from "./InquiryForm";

// Used on the Car Rental page. Vehicle *sales* has its own form: VehicleSalesForm.
export default function VehicleInquiryForm() {
  return (
    <InquiryForm
      title="Car Rental Inquiry"
      subtitle="Let us know what you need a vehicle for, and we'll match you with a suitable option."
      fields={["phone", "dates"]}
      defaultService="Car Rental"
      submitLabel="Send Rental Inquiry"
    />
  );
}
