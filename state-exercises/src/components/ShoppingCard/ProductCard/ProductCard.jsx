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
        {/* {props.inStock ? (
          <span className={styles.inStock}>In stock</span>
        ) : (
          <span className={styles.outOfStock}>Out of stock</span>
        )} */}
      </div>
    </div>
  );
}

export default ProductCard;
