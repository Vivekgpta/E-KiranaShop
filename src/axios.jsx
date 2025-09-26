import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // e.g., http://localhost:8080/api
});

// Remove default Authorization if exists
delete API.defaults.headers.common["Authorization"];

// Optional: add interceptor for logging
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default API;

