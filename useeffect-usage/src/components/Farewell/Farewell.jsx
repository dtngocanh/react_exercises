import { useEffect } from "react";

function Farewell() {
  useEffect(() => {
    return () => {
      alert("Component removed!");
    };
  }, []);

  return (
    <button
      style={{ padding: "1rem", border: "1px solid gray", borderRadius: "8px" }}
    >
      Farewell component
    </button>
  );
}

export default Farewell;
