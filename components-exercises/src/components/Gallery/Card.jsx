import style from "./Card.module.css";
function Card() {
  return (
    <div className={style.card}>
      <img  className={style.img}src="/images/img_5terre.jpg" alt="" width="600" height="400" />
      <div className={style.title}>The title of the image here.</div>
    </div>
  );
}
export default Card;
