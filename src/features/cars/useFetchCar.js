import { axiosInstance } from "@/lib/axios";
import { useState, useEffect } from "react";

export const useFetchCar = () => {
  const [cars, setCars] = useState([]);
  const fetchCar = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/car");

      console.log(response.data.data);
      setCars(response.data.data);
    } catch (error) {
      console.log("error fetching cars data:", error);
    }
  };

  useEffect(() => {
    fetchCar();
  }, []);

  return {
    data: cars,
  };
};
