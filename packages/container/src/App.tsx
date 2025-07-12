import { lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
const LoginConponent = lazy(async () => import("login/LoginPage"));
const ProductListing = lazy(
  async () => import("ProductListing/ProductListing")
);
function App() {
  const [count, setCount] = useState(0);

  console.log("LoginConponent", location.pathname);

  return (
    <>
      <div>Container</div>
      <Routes>
        <Route path="/login" element={<LoginConponent />} />
        <Route path="/productListing" element={<ProductListing />} />
      </Routes>
    </>
  );
}
export * from "@testing-library/react";

export default App;
