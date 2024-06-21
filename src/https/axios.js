import axios from "axios";
import config from "./config";

import router from '@/router'

import store from "@/store";

const $request = axios.create({
  baseURL: config.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

$request.interceptors.request.use(function (config) {
  const token = store.getters["auth/token"];
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

$request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const status = error.response.status;
    const message = error.response.data.message;
    if (status === 401 && message === "Unauthenticated.") {
      const presentRoute = router.currentRoute.name;
      if (presentRoute !== "login") {
        store.login("auth/logout");
        router.push("/login?redirect=" + presentRoute);
      }
    }
    return Promise.reject(error);
  }
);

export default $request;
