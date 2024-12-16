import { axiosInstance } from "@/lib/axios";

export const useCreateCar = async (body, onComplete) => {
  try {
    const response = await axiosInstance.post("/api/v1/car", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.data.success) {
      console.log("Create new car success");
      onComplete?.();
      return { onSuccess: true };
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.log("Error Create new Car", error);
    return { onSuccess: false };
  }
};
