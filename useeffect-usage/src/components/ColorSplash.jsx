import React, { useEffect } from "react";

function ColorSplash() {
  useEffect(() => {
    const colors = ["red", "blue", "green", "purple", "orange", "teal"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;

  }, []);

}

export default ColorSplash;
