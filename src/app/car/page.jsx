import { Button } from "@nextui-org/button";
import CardCar from "./_components/CardCar";
import Header from "@/components/Header";
import Link from "next/link";

const CarPage = () => {
  return (
    <main className="container mx-auto">
      <Header />
      <div>
        <Link href="/car/create">
          <Button color="secondary">Add Car</Button>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-xl font-semibold">Daftar Mobil</h1>
      </div>
      <div className="py-4">Kategori Mobil</div>
      <div>
        <CardCar />
      </div>
    </main>
  );
};
export default CarPage;
