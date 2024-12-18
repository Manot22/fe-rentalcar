import EditCarForm from "../../_components/EditCarForm";

const EditCar = () => {
  return (
    <main className="mx-auto container">
      <div className="flex justify-center items-center py-4">
        <h1 className="text-xl font-semibold">Edit Car by id</h1>
      </div>
      <div>
        <EditCarForm />
      </div>
    </main>
  );
};

export default EditCar;
