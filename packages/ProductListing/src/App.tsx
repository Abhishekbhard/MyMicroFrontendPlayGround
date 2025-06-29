import React from "react";
import "./App.css";
import ProductList from "./productList.tsx";



// 2️⃣ Define Products Array


// 3️⃣ Functional Component
const App: React.FC = () => {
  return (
    <div className="container">
     <ProductList/>
    </div>
  );
};

export default App;
