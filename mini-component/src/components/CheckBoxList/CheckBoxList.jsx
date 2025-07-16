import { useState } from "react";
import styles from "./CheckBoxList.module.css";

function CheckBoxList() {
  const items = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
  const [selectedItems, setSelectedItems] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedItems((prev) => [...prev, value]);
    } else {
      setSelectedItems((prev) => prev.filter((item) => item !== value));
    }
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Select Your Skills:</h3>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item} className={styles.item}>
            <label>
              <input
                type="checkbox"
                value={item}
                onChange={handleChange}
                checked={selectedItems.includes(item)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
      <div className={styles.result}>
        <strong>Selected:</strong> {selectedItems.join(", ") || "None"}
      </div>
    </div>
  );
}

export default CheckBoxList;
