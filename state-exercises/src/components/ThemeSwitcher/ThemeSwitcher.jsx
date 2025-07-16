import { useState } from "react";

function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState("light");
  function changeTheme() {
    setCurrentTheme((prev) => (prev === "light" ? "black" : "light"));
  }
  return (
    <div
      onClick={changeTheme}
      style={{
        margin: "12px",
        height: "50px",
        width: "100%",
        cursor: "pointer",
        backgroundColor: currentTheme === "light" ? "#f5f5f5" : "#222",
        color: currentTheme === "light" ? "#000" : "#fff",
      }}
    >
      Theme Switcher
    </div>
  );
}
export default ThemeSwitcher;
