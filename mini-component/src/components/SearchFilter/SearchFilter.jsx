import { useState } from "react";
import styles from "./SearchFilter.module.css";

function SearchFilter() {
  const items = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Pineapple"];
  const [query, setQuery] = useState("");

  function handleChange(event) {
    const item = event.target.value;
    setQuery(item);
  }
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <input
        onChange={handleChange}
        name="product"
        className={styles.input}
        type="text"
        placeholder="Search your product."
      />
      {query === "" ? null : filteredItems.length === 0 ? (
        <span>No match found.</span>
      ) : (
        <ul>
          {filteredItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchFilter;
