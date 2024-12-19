import { rentalApi } from "@/services/api";
import Link from "next/link";

async function getRental(id) {
  const response = await rentalApi.getRentalById(id);
  return response.data;
}

export default async function RentalDetailPage({ params }) {
  const rental = await getRental(params.id);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Rental Details</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          {rental.car.brand} {rental.car.name}
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Pickup Date</p>
            <p>{new Date(rental.pickupDate).toLocaleDateString()}</p>
          </div>

          <div>
            <p className="text-gray-600">Return Date</p>
            <p>{new Date(rental.returnDate).toLocaleDateString()}</p>
          </div>

          <div>
            <p className="text-gray-600">Status</p>
            <p>{rental.status}</p>
          </div>

          <div>
            <p className="text-gray-600">Total Cost</p>
            <p>${rental.totalCost}</p>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/rentals"
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            Back to Rentals
          </Link>
        </div>
      </div>
    </div>
  );
}
