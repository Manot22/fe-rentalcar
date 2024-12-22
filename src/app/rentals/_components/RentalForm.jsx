"use client";
import { useState } from "react";
import { rentalApi } from "@/services/api";
import { useRouter } from "next/navigation";
import { Input } from "@nextui-org/input";

export default function RentalForm({ initialData }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    carId: initialData?.carId ?? "",
    pickupDate: initialData?.pickupDate?.split("T")[0] ?? "",
    returnDate: initialData?.returnDate?.split("T")[0] ?? "",
    userId: initialData?.user.Id ?? "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (new Date(formData.returnDate) <= new Date(formData.pickupDate)) {
        setError("Return date must be after pickup date");
        return;
      }
      const response = await rentalApi.createRental(formData);

      console.log("Success response:", response);

      if (!response.ok) {
        router.push("/car");
      }

      router.push("/rentals");
    } catch (error) {
      alert("Car Is not avaliable");
      console.error("Error details:", error);
      setError(error.message || "Failed to create rental");
    }
  };

  return (
    <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        <form
          onSubmit={handleSubmit}
          className="-my-3 divide-y divide-gray-100 text-sm"
        >
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <label className="block text-sm font-medium">Car ID</label>
            <Input
              type="number"
              value={formData.carId}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                setFormData({ ...formData, carId: isNaN(value) ? "" : value });
              }}
              className="mt-1 block w-full capitalize rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <label className="block text-sm font-medium">User ID</label>
            <Input
              type="number"
              value={formData.userId}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                setFormData({ ...formData, userId: isNaN(value) ? "" : value });
              }}
              className="mt-1 block w-full capitalize rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <label className="block text-sm font-medium">Pickup Date</label>
            <Input
              type="date"
              value={formData.pickupDate}
              onChange={(e) =>
                setFormData({ ...formData, pickupDate: e.target.value })
              }
              className="mt-1 block w-full capitalize rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <label className="block text-sm font-medium">Return Date</label>
            <Input
              type="date"
              value={formData.returnDate}
              onChange={(e) =>
                setFormData({ ...formData, returnDate: e.target.value })
              }
              className="mt-1 block w-full capitalize rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="flex justify-end p-4">
            <button
              type="submit"
              className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit Rental
            </button>
          </div>
        </form>
      </dl>
    </div>
  );
}
