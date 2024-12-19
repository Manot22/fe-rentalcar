"use client";
import { useState, useEffect } from "react";
import { rentalApi } from "@/services/api";
import RentalCard from "@/app/rentals/_components/RentalCard";

export default function RentalList() {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRentals();
  }, []);

  const loadRentals = async () => {
    try {
      const response = await rentalApi.getAllRentals();
      setRentals(response.data);
    } catch (error) {
      console.error("Error loading rentals:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {rentals.map((rental) => (
        <RentalCard key={rental.id} rental={rental} onUpdate={loadRentals} />
      ))}
    </div>
  );
}
