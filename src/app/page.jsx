"use client";

import Header from "@/components/Header";
import useAuth from "@/context/AuthContext";
import { redirect } from "next/navigation";

const HomePage = () => {
  const { user } = useAuth();

  if (!user) {
    redirect("/login");
  }
  return (
    <main>
      <Header />
      <div>
        <h1>Home Page</h1>
      </div>
    </main>
  );
};
export default HomePage;
