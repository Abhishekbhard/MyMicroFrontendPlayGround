import React from "react";
import "./App.css";

// 1️⃣ Define Product Type
interface Product {
  id: number;
  name: string;
  image: string;
  stock: string;
  stockCount: number | null;
  price: string;
  brand: string;
  color: string;
}

// 2️⃣ Define Products Array
const products: Product[] = [
  {
    id: 1,
    name: "Dignissim",
    image: "https://picsum.photos/id/1/200/300",
    stock: "In stock",
    stockCount: 23,
    price: "€229,00",
    brand: "Eva Solo",
    color: "Natural"
  },
  {
    id: 2,
    name: "Steelio",
    image: "https://via.placeholder.com/40",
    stock: "In stock",
    stockCount: 12,
    price: "€119,00",
    brand: "Eva Solo",
    color: "Natural"
  },
  {
    id: 3,
    name: "Parallel Clock Minimal",
    image: "https://via.placeholder.com/40",
    stock: "In stock",
    stockCount: null,
    price: "€229,00",
    brand: "Joseph",
    color: "Black, Green"
  },
  {
    id: 4,
    name: "Watch This",
    image: "https://via.placeholder.com/40",
    stock: "In stock",
    stockCount: null,
    price: "€229,00 – €239,00",
    brand: "Eva Solo",
    color: "Black and Natural"
  },
  {
    id: 5,
    name: "Puzzel Mask",
    image: "https://via.placeholder.com/40",
    stock: "In stock",
    stockCount: 8,
    price: "€27,50",
    brand: "Joseph",
    color: "Black and Yellow"
  }
];

// 3️⃣ Functional Component
const ProductList: React.FC = () => {
  return (
    <div className="container">
      <h1>Sample Output</h1>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td className="product-name">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />{" "}
                <a href="#">{product.name}</a>
              </td>
              <td>
                <span className="stock-in">{product.stock}</span>
                {product.stockCount !== null && ` (${product.stockCount})`}
              </td>
              <td>{product.price}</td>
              <td>
                <a href="#" className="brand-link">
                  {product.brand}
                </a>
              </td>
              <td>{product.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
