"use client";

import { useEditCar } from "@/features/cars/use-edit-car";
import { useGetCarById } from "@/features/cars/use-fetch-byId";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditCarForm() {
  const [loading, setLoding] = useState(false);
  const { data: carId } = useGetCarById();
  const editCar = useEditCar();
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    model: "",
    plateNumber: "",
    dailyRate: "",
    image: null,
  });
  const [previwe, setPreview] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (carId) {
      console.log("get car by id", carId);
      setFormData({
        name: carId.name || "",
        brand: carId.brand || "",
        model: carId.model || "",
        plateNumber: carId.plateNumber || "",
        dailyRate: carId.dailyRate || "",
        image: null,
      });
      setPreview(carId.image || null);
    }
  }, [carId]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setFormData((prev) => ({ ...prev, image: file }));
      if (file) {
        setPreview(URL.createObjectURL(file));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoding(true);

    try {
      const result = await editCar(carId.id, formData);

      if (result.success) {
        alert("edit car successfully");

        router.push("/car");
      } else {
        throw new Error(result.error || "filed to update Car");
      }
    } catch (error) {
      console.error("Submit error", error);
    } finally {
      setLoding(false);
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label>Name</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Brand</label>
              <Input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Model</label>
              <Input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Plate Numbar</label>
              <Input
                type="text"
                name="plateNumber"
                value={formData.plateNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Daily Rate</label>
              <Input
                type="text"
                name="dailyRate"
                value={formData.dailyRate}
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
                accept="image/**"
                className="mb-4"
              />
              {previwe && (
                <div>
                  <Image
                    src={previwe}
                    alt="Preview"
                    width={200}
                    height={200}
                    className="object-cover rounded-md"
                  />
                </div>
              )}
            </div>
            <div className="flex justify-end items-center">
              <Button type="submit" disabled={loading} color="secondary">
                {loading ? "Updating..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
