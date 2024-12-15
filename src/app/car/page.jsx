import CardCar from "./_components/CardCar";
import Header from "@/components/Header";

const CarPage = () => {
  return (
    <main className="container mx-auto">
      <Header />
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
