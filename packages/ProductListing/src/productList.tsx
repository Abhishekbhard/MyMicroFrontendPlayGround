import React, { useState } from "react";
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
    name: "ddd",
    image:
      "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    stock: "In stock",
    stockCount: 23,
    price: "€229,00",
    brand: "Eva Solo",
    color: "Natural",
  },
  {
    id: 2,
    name: "Steelio",
    image:
      "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    stock: "In stock",
    stockCount: 12,
    price: "€119,00",
    brand: "Eva Solo",
    color: "Natural",
  },
  {
    id: 3,
    name: "Parallel Clock Minimal",
    image:
      "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    stock: "In stock",
    stockCount: null,
    price: "€229,00",
    brand: "Joseph",
    color: "Black, Green",
  },
  {
    id: 4,
    name: "Watch This",
    image:
      "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    stock: "In stock",
    stockCount: null,
    price: "€229,00 – €239,00",
    brand: "Eva Solo",
    color: "Black and Natural",
  },
  {
    id: 5,
    name: "Puzzel Mask",
    image:
      "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    stock: "In stock",
    stockCount: 8,
    price: "€27,50",
    brand: "Joseph",
    color: "Black and Yellow",
  },
];

// 3️⃣ Functional Component
const ProductList: React.FC = () => {
  const [selectedRow, setSelectedRow] = useState<number[]>([]);

  const handleRowSelected = (id: number) => {
    //[...[],1]=[1]
    setSelectedRow((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };
  const handleAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedRow(products.map((product) => product.id));
    } else {
      setSelectedRow([]);
    }
  };
  return (
    <div className="container">
      <h1>Sample Output</h1>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox"
              onChange={handleAllChange}
              />
            </th>
            <th>Image</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className={selectedRow.includes(product.id) ? "selected" : ""}
              onClick={(e) => handleRowSelected(product.id)}
            >
              <td>
                <input
                  type="checkbox"
                  checked={selectedRow.includes(product.id)}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRowSelected(product.id);
                  }}
                />
              </td>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  width={40}
                  height={40}
                  className="product-image"
                />
              </td>
              <td className="product-name">
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
