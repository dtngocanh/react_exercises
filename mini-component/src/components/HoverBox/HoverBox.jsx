import { useState } from "react";
import styles from "./HoverBox.module.css";

function HoverBox() {
  const [mouse, setMouse] = useState(false);
  function changeText() {
    setMouse((preValue) => !preValue);
  }
  return (
    <div>
      <span
        onMouseEnter={() => {
          changeText();
        }}
        className={styles.span}
      >
        {mouse ? "You've hovered me!" : "Hover me!"}
      </span>
    </div>
  );
}

export default HoverBox;
