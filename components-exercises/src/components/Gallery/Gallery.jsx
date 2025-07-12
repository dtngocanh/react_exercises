import Card from "./Card";
import style from "./Gallery.module.css";
function Gallery() {
  return (
    <div className={style.gallery}>
      <Card />
      <Card />
      <Card />
    </div>
  );
}
export default Gallery;
