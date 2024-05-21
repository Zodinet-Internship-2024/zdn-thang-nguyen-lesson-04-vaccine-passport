import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://vapi.vnappmob.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
