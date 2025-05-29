import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.BACKEND_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// interceptor acts as middleware that checks or modifies in Request or Reponse
apiClient.interceptors.request.use(
  // Interceptor works before sends Request
  (config) => {
    // get token from localstorage
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  // Interceptor works after comes Response
  (response) => response,
  (error) => {
    console.error("Api Error:", error.message);
    if (error.response) {
      console.error("Response data:", error.response.data);
    }
    return Promise.reject(error);
  }
);

export default apiClient;