import { useEffect, useState } from "react";

function ColorFlasher() {
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++)
      color += letters[Math.floor(Math.random() * 16)];
    return color;
  }
  const [bgColor, setBgColor] = useState(getRandomColor());
  useEffect(() => {
    const colorId = setInterval(() => {
      setBgColor(getRandomColor());
    }, 1000);

    return () => {
      clearInterval(colorId);
      console.log("Color flash interval cleared.");
    };
  }, []);
  return (
    <div
      style={{ width: "300px", height: "300px", backgroundColor: bgColor }}
    ></div>
  );
}

export default ColorFlasher;
