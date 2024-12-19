"use client";

import useAuth from "@/context/AuthContext";
import { validationRegister } from "@/services/authValidation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState("");
  const { register } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validationRegister(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await register(formData);
      router.push("/login");
    } catch (error) {
      setErrors("Email sudah digunakan");
    }
  };

  const handleClick = () => {
    router.back();
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <div className="flex justify-start items-center">
          <button
            type="button"
            onClick={() => {
              handleClick();
            }}
          >
            <IoArrowBackCircleOutline
              size={"40px"}
              className="text-black hover:text-gray-400"
            />
          </button>
        </div>
        <h1 className="text-center text-2xl font-bold  sm:text-3xl">
          Register
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          {errors && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-sm">
              {errors}
            </div>
          )}
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Masukan Nama Anda"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block mb-2">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-2">No Phone</label>
            <input
              type="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your phone"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full  text-white bg-black py-2 rounded hover:bg-slate-700"
          >
            Register
          </button>
          <div className="flex items-center justify-center ">
            <p className="text-gray-400 text-sm">
              sudah punya akun?
              <Link className=" hover:underline" href="/login">
                Masuk
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegisterForm;
