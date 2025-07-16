import { useEffect, useState } from "react";

function KeyDisplay() {
  const [key, setKey] = useState(null);

  useEffect(() => {
    function handleKeyDown(e) {
      setKey(e.key);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      console.log("Keydown listener removed.");
    };
  }, []);
  return (
    <div>
      <h2>You pressed: {key}</h2>
    </div>
  );
}

export default KeyDisplay;
