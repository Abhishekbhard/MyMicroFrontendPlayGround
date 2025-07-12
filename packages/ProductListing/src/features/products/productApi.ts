import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../../common/api/apiClient";
import type { ApiError } from "../../../common/api/apitypes";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (__dirname, { rejectWithValue }) => {
    try {
      const response = await apiClient.get("/products");
      if (!response.data.success) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    } catch (error) {
      const apiError = error as ApiError;
      return rejectWithValue(apiError.message || "Failed to fetch products");
    }
  }
);
