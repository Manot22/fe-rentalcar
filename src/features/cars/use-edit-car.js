import { axiosInstance } from "@/lib/axios";

export const useEditCar = () => {
  const editCar = async (id, formData) => {
    try {
      const body = new FormData();
      body.append("name", formData.name);
      body.append("brand", formData.brand);
      body.append("model", formData.model);
      body.append("plateNumber", formData.plateNumber);
      body.append("dailyRate", formData.dailyRate);
      if (formData.image) {
        body.append("image", formData.image);
      }

      const response = await axiosInstance.put(`/api/v1/car/${id}`, body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        return { success: true, data: response.data };
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error("Error updating car:", error);
      return { success: false, error: error.message };
    }
  };
  return editCar;
};
