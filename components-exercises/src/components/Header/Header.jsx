import style from "./Header.module.css";
function Header() {
  return (
    <header>
      <div className={style.logo}>🔥</div>
      <h1 className={style.h1}>My Awesome App</h1>
    </header>
  );
}
export default Header;
