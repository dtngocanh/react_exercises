import { useState } from "react";
import styles from "./ProductCard.module.css";

function ProductCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src="#" alt="" className={styles.image} />
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{props.name}</h3>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={() => props.onDel(props.id)}>Delete</button>
        <button onClick={() => props.onAdd(props.id, props.name)}>
          Add Product
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
