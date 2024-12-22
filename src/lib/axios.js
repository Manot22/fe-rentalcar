import axios from "axios";

const APP_URL = process.env.NEXT_PUBLIC_API_URL;

export const axiosInstance = axios.create({
  baseURL: APP_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
