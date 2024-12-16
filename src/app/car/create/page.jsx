import CreateCarForm from "../_components/CreateCarForm";

const CreateCar = () => {
  return (
    <main className="contianer mx-auto">
      <div className="flex justify-center items-center">
        <h2 className="text-lg font-semibold">Create Car Page</h2>
      </div>
      <div>
        <CreateCarForm />
      </div>
    </main>
  );
};
export default CreateCar;
