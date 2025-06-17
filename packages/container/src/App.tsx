import { lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "../public/vite.svg";
import "./App.css";
const LoginConponent = lazy(async () => import("login/LoginPage"));
function App() {
  const [count, setCount] = useState(0);

  console.log("LoginConponent", location.pathname);

  return (
    <>
      <div>Container</div>
      <Routes>
        <Route path="/login" element={<LoginConponent />} />
      </Routes>
    </>
  );
}

export default App;
