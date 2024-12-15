"use client";

import { useState, useEffect, useContext, createContext } from "react";
import { setAuthToken } from "@/features/auth/useAuthToken";
import { axiosInstance } from "@/lib/axios";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        setAuthToken(token);
        const response = await axiosInstance.get("/api/v1/profile");
        console.log(response.data.data);
        setUser(response.data.data);
      }
    } catch (error) {
      localStorage.removeItem("token");
      setAuthToken(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const register = async (userData) => {
    const response = await axiosInstance.post("/api/v1/register", userData);
    return response;
  };

  const login = async (credentials) => {
    const response = await axiosInstance.post("/api/v1/login", credentials);
    const { token, user } = response.data.data;
    localStorage.setItem("token", token);
    setAuthToken(token);
    setUser(user);
    return response;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthToken(null);
    setUser(null);
    router.push("/login");
  };

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    checkAuth,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(" useAuth must be used within an AuthProvider");
  }
  return context;
};

export default useAuth;
