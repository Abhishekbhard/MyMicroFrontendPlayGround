import axios from "axios";
import type {
  AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

import type { ApiError } from "./apitypes";
const apiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:3030",
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // const token = (store.getState() as RootState).auth.token;
  // if (token) {
  //   config.headers = config.headers || {};
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError): Promise<ApiError> => {
    const apiError: ApiError = {
      message:
        (error.response?.data as { message?: string })?.message ||
        "Network Error",
      status: error.response?.status || 500,
      code: error.code || "NETWORK_ERROR",
      data: error.response?.data,
    };
    return Promise.reject(apiError);
  }
);

export default apiClient;
