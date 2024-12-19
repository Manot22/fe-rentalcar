// src/components/rentals/RentalForm.js
"use client";
import { useState } from "react";
import { rentalApi } from "@/services/api";
import { useRouter } from "next/navigation";

export default function RentalForm({ initialData }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    carId: initialData?.carId || "",
    pickupDate: initialData?.pickupDate?.split("T")[0] || "",
    returnDate: initialData?.returnDate?.split("T")[0] || "",
    userId: "1", // Tambahkan userId jika diperlukan
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Validasi dasar
      if (new Date(formData.returnDate) <= new Date(formData.pickupDate)) {
        setError("Return date must be after pickup date");
        return;
      }

      // Log data sebelum dikirim
      console.log("Sending data:", formData);

      const response = await rentalApi.createRental(formData);
      console.log("Success response:", response);
      router.push("/rentals");
    } catch (error) {
      console.error("Error details:", error);
      setError(error.message || "Failed to create rental");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium">Car ID</label>
        <input
          type="number"
          value={formData.carId}
          onChange={(e) =>
            setFormData({ ...formData, carId: parseInt(e.target.value) })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">User ID</label>
        <input
          type="number"
          value={formData.userId}
          onChange={(e) =>
            setFormData({ ...formData, userId: parseInt(e.target.value) })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Pickup Date</label>
        <input
          type="date"
          value={formData.pickupDate}
          onChange={(e) =>
            setFormData({ ...formData, pickupDate: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Return Date</label>
        <input
          type="date"
          value={formData.returnDate}
          onChange={(e) =>
            setFormData({ ...formData, returnDate: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit Rental
      </button>
    </form>
  );
}
