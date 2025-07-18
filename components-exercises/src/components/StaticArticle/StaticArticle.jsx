import style from "./StaticArticle.module.css";

function StaticArticle() {
  return (
    <div className={style.article}>
      <img
        className={style.img}
        src="https://images.unsplash.com/photo-1481487196290-c152efe083f5"
        alt=""
      />
      <h2 className={style.h2}>Why do we use it?</h2>
      <p className={style.p}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
    </div>
  );
}

export default StaticArticle;
