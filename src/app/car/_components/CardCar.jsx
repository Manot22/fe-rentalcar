"use client";

import useAuth from "@/context/AuthContext";
import { useFetchCar } from "@/features/cars/useFetchCar";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Chip,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function App() {
  const { user } = useAuth();

  if (!user) {
    redirect("/login");
  }

  const { data: cars } = useFetchCar();
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 items-center justify-center gap-8">
      {cars.map((item) => (
        <Card className="" key={item.id}>
          <CardHeader className="">
            <h1 className="text-md uppercase font-bold">{item.brand}</h1>
          </CardHeader>
          <Divider />
          <CardBody className="overflow-visible py-2">
            <div className="pb-2 flex justify-end">
              <Chip color="primary">{item.status}</Chip>
            </div>
            <Image
              alt="NextUI Fruit Image with Zoom"
              src={item.image}
              width={250}
              height={2}
              className="pb-4"
            />
            <Divider />
            <h2 className="capitalize text-md font-bold py-2">{item.name}</h2>
            <div className="grid grid-cols-2 justify-center items-center gap-4">
              <p className="capitalize text-md font-semibold">{item.model}</p>
              <h1 className="uppercase">{item.plateNumber}</h1>
              <p className="text-sm">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(item.dailyRate)}
              </p>
              <Button className="text-md hover:bg-gray-800 hover:text-white">
                Sewa
              </Button>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
