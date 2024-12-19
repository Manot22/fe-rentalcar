"use client";
import { rentalApi } from "@/services/api";
import Link from "next/link";

export default function RentalCard({ rental, onUpdate }) {
  const handleCancel = async () => {
    if (window.confirm("Are you sure you want to cancel this rental?")) {
      try {
        await rentalApi.cancelRental(rental.id);
        onUpdate();
      } catch (error) {
        console.error("Error canceling rental:", error);
      }
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-semibold capitalize">{rental.car.name}</h3>
      <p>Pickup: {new Date(rental.pickupDate).toLocaleDateString()}</p>
      <p>Return: {new Date(rental.returnDate).toLocaleDateString()}</p>
      <p>Status: {rental.status}</p>
      <p>Total Cost: ${rental.totalCost}</p>

      <div className="mt-4 space-x-2">
        <Link
          href={`/rentals/${rental.id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          View Details
        </Link>
        {rental.status === "PENDING" && (
          <button
            onClick={handleCancel}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
