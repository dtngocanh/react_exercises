import { useEffect, useState } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((pre) => pre + 1);
    }, 1000);

    // stops timer on unmount
    return () => {
      clearInterval(timerId);
      console.log("Stopwatch unmounted, timer stopped.");
    };
  }, []);
  return <h2>Timer: {seconds} s</h2>;
}

export default Stopwatch;
