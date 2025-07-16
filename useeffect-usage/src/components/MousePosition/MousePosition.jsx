import { useEffect, useState } from "react";

function MousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event) {
      setPosition({ x: event.clientX, y: event.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      console.log("Mouse listener removed.");
    };
  }, []);

  return (
    <div>
      <h2>Mouse Position</h2>
      <p>
        X: {position.x}, Y: {position.y}
      </p>
    </div>
  );
}
export default MousePosition;
