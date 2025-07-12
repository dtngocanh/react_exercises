import style from "./ProfileCard.module.css";
function ProfileCard() {
  return (
    <div className={style.card}>
      <img className={style.img} src="#" alt="" />
      <div className={style.infor}>
        <h3 className={style.name}>Amy</h3>
        <p className={style.title}>Software Engineer</p>
      </div>
      <button className={style.button}>More infor</button>
    </div>
  );
}

export default ProfileCard;
