import { useState } from "react";
import styles from "./InputDisplay.module.css";

function InputDisplay() {
  const [name, setName] = useState("");
  function handleChange(event) {
    const value = event.target.value;
    setName(value);
  }
  return (
    <div>
      <p>My name is {name}</p>
      <input
        onChange={handleChange}
        name="name"
        className={styles.input}
        type="text"
        placeholder="What is your name?"
      />
    </div>
  );
}

export default InputDisplay;
