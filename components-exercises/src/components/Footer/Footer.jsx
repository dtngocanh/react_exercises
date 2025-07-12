import style from "./Footer.module.css";
function Footer() {
  return (
    <footer className={style.footer}>
      <p className={style.p}>© {new Date().getFullYear()} MyApp</p>
    </footer>
  );
}
export default Footer;
