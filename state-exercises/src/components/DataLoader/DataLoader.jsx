import { useState } from "react";
import style from "./DataLoader.module.css";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
function DataLoader() {
  const [isLoading, setIsLoading] = useState(true);
  function handleClick() {
    setIsLoading((preLoading) => !preLoading);
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }

  return (
    <div className={style.dataLoader}>
      <div>
        {isLoading ? (
          <img src="/images/checkmark-circle-outline.svg" width="30px" />
        ) : (
          <LoadingSpinner />
        )}
      </div>
      <p>{isLoading ? "Data loaded successfully!" : "Loading data..."}</p>
      <button
        style={{
          backgroundColor: !isLoading && "#000",
          color: !isLoading && "white",
        }}
        className={style.btn}
        onClick={handleClick}
      >
        {isLoading ? "Reload" : "Complete loading"}
      </button>
    </div>
  );
}
export default DataLoader;
