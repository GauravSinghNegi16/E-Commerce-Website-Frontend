import axios from "axios";

// Create Axios instance
const API = axios.create({
  baseURL: "http://localhost:3000/api", // backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token automatically if it exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Optional: handle response errors globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default API; // ✅ default export
