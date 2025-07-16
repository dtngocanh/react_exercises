import { useState } from "react";
import styles from "./ShoppingCart.module.css";
import ProductCard from "./ProductCard/ProductCard";

function ShoppingCart() {
  const products = [
    {
      id: 1,
      name: "Mobile Phone",
    },
    {
      id: 2,
      name: "Headphone",
    },
    {
      id: 3,
      name: "Microphone",
    },
  ];
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Mobile Phone",
    },
  ]);
  function onAddProduct(id, name) {
    setItems((preItems) => [...preItems, { id, name }]);
  }
  function onDelProduct(id) {
    setItems((preItems) => preItems.filter((item) => item.id !== id));
  }
  return (
    <div>
      <div style={{ display: "flex", gap: "30px" }}>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            onAdd={onAddProduct}
          />
        ))}
      </div>
      <div>
        <h3>My cart:</h3>
        <ul>
          {items.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              onDel={onDelProduct}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingCart;
