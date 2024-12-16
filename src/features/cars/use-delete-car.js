import { axiosInstance } from "@/lib/axios";

export const useDeleteCar = () => {
  const deleteCar = async (id) => {
    try {
      const response = await axiosInstance.delete(`/api/v1/car/${id}`);

      if (response.data.success) {
        return { success: true };
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.log("error delete Car:", error);
      return {
        success: false,
        error: error.message || "Filed deleted Car",
      };
    }
  };
  return deleteCar;
};
