import { useState } from "react";
import style from "./LikeButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
function LikeButton() {
  const [likesCount, setLikesCount] = useState(0);
  function add() {
    setLikesCount((preValue) => preValue + 1);
  }
  function reset() {
    setLikesCount(0);
  }
  return (
    <div className={style.container}>
      <FontAwesomeIcon icon={faHeart} color="red" />
      <span>Like ({likesCount})</span>
      <button onClick={add} className={style.btnLike}>
        <FontAwesomeIcon
          className={style.btnIcon}
          icon={faHeart}
          color="white"
        />
        Like
      </button>
      <button onClick={reset} className={style.btnReset}>
        Reset
      </button>
    </div>
  );
}

export default LikeButton;
