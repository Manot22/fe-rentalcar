import RentalForm from "@/app/rentals/_components/RentalForm";

export default function CreateRentalPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create New Rental</h1>
      <RentalForm />
    </div>
  );
}
