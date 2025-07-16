import { useState, useEffect } from "react";
import styles from "./ThemeBox.module.css";

function ThemeBox() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "#fff" : "#121212";
    document.body.style.color = theme === "light" ? "#000" : "#fff";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [theme]);

  return (
    <div className={styles.themeBox}>
      <p>
        🎨 Current mode: <strong>{theme}</strong>
      </p>
      <button onClick={toggleTheme}>
        Change {theme === "light" ? "dark" : "light"} mode
      </button>
    </div>
  );
}

export default ThemeBox;
