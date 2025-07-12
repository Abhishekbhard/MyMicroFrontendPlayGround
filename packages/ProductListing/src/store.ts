import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./features/products/productSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
export type AppDispatch = typeof store.dispatch;

export default store;
