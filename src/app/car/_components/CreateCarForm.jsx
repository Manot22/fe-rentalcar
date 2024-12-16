"use client";

import { useCreateCar } from "@/features/cars/use-create-car";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateCarForm() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    model: "",
    dailyRate: "",
    plateNumber: "",
    image: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleOnComplete = () => {
    router.push("/car");
    router.refresh();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const submitData = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null) {
          submitData.append(key, formData[key]);
        }
      });

      const response = await useCreateCar(submitData, handleOnComplete());

      if (response.onSuccess) {
        setFormData({
          name: "",
          brand: "",
          model: "",
          dailyRate: "",
          plateNumber: "",
          image: null,
        });
        setPreview(null);
      }
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold  sm:text-3xl">
          Tambah Mobil Baru
        </h1>
        <br />

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
          <div>
            <label htmlFor="">Name</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="">Brand</label>
            <Input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="">Model</label>
            <Input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="">Daily Rate</label>
            <Input
              type="number"
              name="dailyRate"
              value={formData.dailyRate}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="">Plate Number</label>
            <Input
              type="text"
              name="plateNumber"
              value={formData.plateNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="">Image</label>
            <Input
              type="file"
              name="image"
              onChange={handleChange}
              accept="image/*"
            />
            {preview && (
              <Image
                src={preview}
                width={200}
                height={200}
                alt="preview"
                className="py-4"
              />
            )}
          </div>
          <div className="flex justify-end items-center">
            <Button type="submit" disabled={isLoading} color="secondary">
              {isLoading ? "Memuat" : "Create"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
