const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const rentalApi = {
  // Mengambil semua rental
  getAllRentals: async () => {
    const res = await fetch(`${API_URL}/api/v1/rentals`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch rentals");
    return res.json();
  },

  // Mengambil rental berdasarkan ID
  getRentalById: async (id) => {
    const res = await fetch(`${API_URL}/api/v1/rentals/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch rental");
    return res.json();
  },

  // Membuat rental baru
  createRental: async (data) => {
    try {
      // Format data sebelum dikirim
      const formattedData = {
        ...data,
        userId: parseInt(data.userId),
        carId: parseInt(data.carId),
        pickupDate: new Date(data.pickupDate).toISOString(),
        returnDate: new Date(data.returnDate).toISOString(),
      };

      const res = await fetch(`${API_URL}/api/v1/rentals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
        credentials: "include", // Jika menggunakan cookies
      });

      if (!res.ok) {
        console.log("Car not avaliable");
      }

      return res;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  },

  // Mengupdate status rental
  updateRentalStatus: async (id, status) => {
    const res = await fetch(`${API_URL}/api/v1/rentals/${id}/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });
    if (!res.ok) throw new Error("Failed to update rental status");
    return res.json();
  },

  // Membatalkan rental
  cancelRental: async (id) => {
    const res = await fetch(`${API_URL}/api/v1/rentals/${id}/cancel`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error("Failed to cancel rental");
    return res.json();
  },
};
