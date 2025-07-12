import { useState } from "react";
import styles from "./ProductCard.module.css";

function ProductCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={props.image} alt="" className={styles.image} />
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.price}>{props.price}</p>
        {props.inStock ? (
          <span className={styles.inStock}>In stock</span>
        ) : (
          <span className={styles.outOfStock}>Out of stock</span>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
