"use client";

import Header from "@/components/Header";
import useAuth from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/login");
  }

  return (
    <main className="container mx-auto">
      <Header />
      <h3 className="capitalize text-md font-serif py-4">
        selmat datang <span className="text-indigo-500">{user.name}</span>
      </h3>
      <div className="flex justify-center items-center">
        <h1 className="text-xl font-semibold">Home Page</h1>
      </div>
    </main>
  );
};
export default HomePage;
