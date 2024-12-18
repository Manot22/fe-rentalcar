import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export const useGetCarById = () => {
  const params = useParams();
  const [carId, setCarId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchById = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/car/${params.id}`);

      if (response.data.success) {
        setCarId(response.data.data);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.log("error get car by id", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchById();
  }, []);

  return {
    data: carId,
    isLoading,
  };
};
