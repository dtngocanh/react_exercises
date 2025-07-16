import { useState } from "react";
import styles from "./ColorPicker.module.css";

function ColorPicker() {
  const colors = [
    "#BF5A76",
    "#4E2E1D",
    "#594651",
    "#897475",
    "#F5962C",
    "#BFADA6",
  ];
  const [color, setColor] = useState("#BF5A76");
  function handleClick() {
    const randColor = Math.floor(Math.random() * colors.length);
    setColor(colors[randColor]);
  }
  return (
    <button
      onClick={handleClick}
      className={styles.button}
      style={{ backgroundColor: color }}
    >
      Color Picker
    </button>
  );
}

export default ColorPicker;
