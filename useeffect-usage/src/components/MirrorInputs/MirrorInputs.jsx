import { useEffect, useState } from "react";
import styles from "./MirrorInputs.module.css";
function MirrorInputs() {
  const [inputAB, setInputAB] = useState({
    inputA: "",
    inputB: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setInputAB((pre) => ({ ...pre, [name]: value }));
  }
  useEffect(() => {
    if (inputAB.inputA !== inputAB.inputB) {
      setInputAB((prev) => ({
        ...prev,
        inputB: prev.inputA,
      }));
    }
  }, [inputAB.inputA]);

  useEffect(() => {
    if (inputAB.inputB !== inputAB.inputA) {
      setInputAB((prev) => ({
        ...prev,
        inputA: prev.inputB,
      }));
    }
  }, [inputAB.inputB]);

  return (
    <div>
      <input
        value={inputAB.inputA}
        onChange={handleChange}
        name="inputA"
        className={styles.input}
        type="text"
      />
      <input
        value={inputAB.inputB}
        onChange={handleChange}
        name="inputB"
        className={styles.input}
        type="text"
      />
    </div>
  );
}

export default MirrorInputs;
