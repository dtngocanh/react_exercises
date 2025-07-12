import style from "./BookItem.module.css";

function BookItem(props) {
  return (
    <div className={style.bookCard}>
      <div className={style.bookTitle}>
        <img
          src="https://img.icons8.com/ios/24/000000/book--v1.png"
          alt="book"
        />
        <strong>{props.title}</strong>
      </div>
      <div className={style.bookDetail}>
        <img
          src="https://img.icons8.com/ios/20/000000/user--v1.png"
          alt="author"
        />
        <span>{props.author}</span>
      </div>
      <div className={style.bookDetail}>
        <img
          src="https://img.icons8.com/ios/20/000000/calendar--v1.png"
          alt="year"
        />
        <span>{props.year}</span>
      </div>
    </div>
  );
}

export default BookItem;
