import RentalList from "@/app/rentals/_components/RentalList";
import Link from "next/link";

export default function RentalsPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Rentals</h1>
        <Link
          href="/rentals/create"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Create New Rental
        </Link>
      </div>
      <RentalList />
    </div>
  );
}
