import { useEffect } from "react";

function WelcomeMessage() {
  useEffect(() => {
    alert("Welcome to the app!");
  }, []);
}
export default WelcomeMessage;
