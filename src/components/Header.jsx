import Navbar from "@/components/Navbar";

const Header = () => {
  return (
    <section className="container mx-auto py-2">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">
            Rental<span className="text-indigo-500">Yuk</span>
          </h1>
        </div>
        <div className="hidden md:flex">
          <Navbar />
        </div>
      </div>
    </section>
  );
};
export default Header;
