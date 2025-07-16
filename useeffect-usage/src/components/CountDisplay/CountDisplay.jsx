import { useEffect, useState } from "react";
import styles from "./CountDisplay.module.css";
function CountDisplay() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert(`Count is now ${count} `);
  }, [count]);
  return (
    <div className={styles.container}>
      <span className={styles.span}>{count}</span>
      <button onClick={() => setCount(count + 1)} className={styles.button}>
        Increment
      </button>
    </div>
  );
}

export default CountDisplay;
