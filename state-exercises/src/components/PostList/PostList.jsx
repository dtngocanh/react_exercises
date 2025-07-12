import Card from "./Card";
import style from "./PostList.module.css";
import Posts from "./Posts";
function Gallery() {
  return (
    <div className={style.gallery}>
      {Posts.map((post) => {
        return (
          <Card
            key={post.id}
            title={post.title}
            content={post.content}
            thumbnail={post.thumbnail}
            author = {post.author}
          />
        );
      })}
    </div>
  );
}
export default Gallery;
