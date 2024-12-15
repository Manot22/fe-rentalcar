import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3033",
  headers: {
    "Content-Type": "application/json",
  },
});
