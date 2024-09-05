import axios from "axios";

// define the base url for the api
/* let isCloud = false;
const baseURL = isCloud
  ? "https://mednova-oralhealth-be.onrender.com/api/v1/"
  : `http://localhost:3333/api/v1/`; */


  const baseURL = import.meta.env.VITE_BASE_URL;

console.log(baseURL);

// define the instance
const authInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// define the protected instance
const protectedInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// define the interceptor for the protected instance
protectedInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("token");

  if (accessToken) {
    config.headers.Authorization = `bearer ${accessToken}`;
  }
  return config;
});

// export the instances
export default { authInstance, protectedInstance, baseURL };
