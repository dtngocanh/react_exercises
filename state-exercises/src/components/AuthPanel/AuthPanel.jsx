import style from "./AuthPanel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function AuthPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleClick() {
    setIsLoggedIn((preValue) => !preValue);
  }
  return (
    <div className={style.authPanel}>
      <div className={style.top}>
        <FontAwesomeIcon icon={faUser} size="lg" />
        <h3>User Authentication</h3>
      </div>
      {
        <span style={{ color: isLoggedIn && "green" }}>
          {isLoggedIn ? "You are logged in!" : "Please login to continue!"}
        </span>
      }
      <div onClick={handleClick}>
        <div
          style={{
            backgroundColor: isLoggedIn ? "#fff" : "#007bff",
            color: isLoggedIn ? "#000" : "#fff",
          }}
          className={style.bottom}
        >
          {!isLoggedIn && <FontAwesomeIcon icon={faRightToBracket} size="lg" />}
          <span>{isLoggedIn ? "Logout" : "Login"}</span>
        </div>
      </div>
    </div>
  );
}
export default AuthPanel;
