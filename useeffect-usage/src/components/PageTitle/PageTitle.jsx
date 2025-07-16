import { useEffect, useState } from "react";
import styles from "./PageTitle.module.css";

function PageTitle() {
  const [title, setTitle] = useState("");
  function handleChange(event) {
    const value = event.target.value;
    setTitle(value);
  }
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      <input
        onChange={handleChange}
        name="title"
        classtitle={styles.input}
        type="text"
        placeholder="What is your page title?"
      />
    </div>
  );
}

export default PageTitle;
