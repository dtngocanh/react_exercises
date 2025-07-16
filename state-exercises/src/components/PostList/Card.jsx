import { useState } from "react";
import style from "./Card.module.css";
function Card(props) {
  const [showContent, setShowContent] = useState(false);

  function handleClick() {
    setShowContent((pre) => !pre);
  }
  return (
    <div className={style.card}>
      <img
        className={style.img}
        src={props.thumbnail}
        alt=""
        width="600"
        height="400"
      />
      <h3 className={style.title}>{props.title}</h3>
      <button onClick={handleClick}>View Details</button>

      {showContent && <p className={style.content}>{props.content} </p>}
      <p>Author: {props.author}</p>
      <button className="primary">Read More</button>
    </div>
  );
}
export default Card;
