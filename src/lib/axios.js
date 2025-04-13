import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://chat-app-backend-8paw.onrender.com/api/",
   withCredentials:true,
});