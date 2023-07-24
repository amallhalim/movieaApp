import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "4c599e7d846c7cc89ac2e0f73d580ac3",
    // language: "ar",  //change lang
    // page: 1,
  },
});

export default axiosInstance;
