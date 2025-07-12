import { useState } from "react";
import styles from "./ShoppingCard.module.css";
import ProductCard from "./ProductCard/ProductCard";

function ShoppingCard() {
  const [items, setItems] = useState([
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
  ]);
  return (
    <div style={{display:"flex", gap:"20px"}}>
      {items.map((item) => (
        <ProductCard key={item.id} id={item.id} name={item.name} />
      ))}
    </div>
  );
}

export default ShoppingCard;
