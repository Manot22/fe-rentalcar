"use client";

import useAuth from "@/context/AuthContext";
import { useGetCarById } from "@/features/cars/use-fetch-byId";

const CardRental = () => {
  const { data: carId } = useGetCarById();
  const { user } = useAuth();
  return (
    <section>
      <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">No Seri Mobil</dt>
            <dd className="text-gray-700 capitalize sm:col-span-2">
              {carId.id}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">{user.name}</dt>
            <dd className="text-gray-700 capitalize sm:col-span-2">
              {user.id}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Name</dt>
            <dd className="text-gray-700 capitalize sm:col-span-2">
              {carId.name}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Brand</dt>
            <dd className="text-gray-700 capitalize sm:col-span-2">
              {carId.brand}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Model</dt>
            <dd className="text-gray-700 capitalize sm:col-span-2">
              {carId.model}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Daily Rate</dt>
            <dd className="text-gray-700 capitalize sm:col-span-2">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(carId.dailyRate)}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Image</dt>
            <dd className="text-gray-700 sm:col-span-2">
              <img
                src={carId.image}
                alt="Car Image"
                className="w-[150px] h-auto"
              />
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
export default CardRental;
