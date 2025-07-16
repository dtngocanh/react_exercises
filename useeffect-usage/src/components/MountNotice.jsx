import { useEffect } from "react";

function MountNotice() {
  useEffect(() => {
    console.log("Component mounted!");
  }, []);
}

export default MountNotice;
