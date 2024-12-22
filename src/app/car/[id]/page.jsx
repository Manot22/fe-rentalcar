import RentalForm from "@/app/rentals/_components/RentalForm";
import CardRental from "../_components/CardRental";

const CarPageById = () => {
  return (
    <main className="container mx-auto">
      <div className="flex justify-center items-center">
        <h1 className="text-xl font-semibold">Rental mobil by id</h1>
      </div>
      <div className="py-4">
        <CardRental />
      </div>
      <div className="py-2">
        <RentalForm />
      </div>
    </main>
  );
};
export default CarPageById;
