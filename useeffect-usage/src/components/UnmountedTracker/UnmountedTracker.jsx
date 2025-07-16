import { useEffect } from "react";

function UnmountTracker() {
  useEffect(() => {
    return () => {
      console.log("Component unmounted!");
    };
  }, []);

  return (
    <button
      style={{
        marginLeft: "8px",
        padding: "1rem",
        border: "1px solid #999",
        borderRadius: "8px",
      }}
    >
      UnmountTracker
    </button>
  );
}

export default UnmountTracker;
