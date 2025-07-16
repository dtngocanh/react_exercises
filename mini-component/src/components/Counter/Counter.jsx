import { useState } from "react";
import styles from "./Counter.module.css";
function Counter() {
  const [count, setCount] = useState(0);

  function subtract() {
    setCount((pre) => pre - 1);
  }
  function add() {
    setCount((pre) => pre + 1);
  }
  return (
    <div className={styles.container}>
      <button onClick={subtract} className={styles.button}>
        -
      </button>
      <span className={styles.span}>{count}</span>
      <button onClick={add} className={styles.button}>
        +
      </button>
    </div>
  );
}

export default Counter;
