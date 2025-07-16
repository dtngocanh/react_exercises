import { useState } from "react";
import styles from "./ToggleButton.module.css";
function ToggleButton() {
  const [on, setOn] = useState(false);
  function handleClick() {
    setOn((pre) => !pre);
  }
  return (
    <button onClick={handleClick} className={styles.button}>
      {on ? "ON" : "OFF"}
    </button>
  );
}

export default ToggleButton;
