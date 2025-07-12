import BookItem from "./BookItem";
import style from "./BookList.module.css";
import books from "./Books";
function BookList() {
  return (
    <div className={style.bookList}>
      {books.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          author={book.author}
          title={book.title}
          year={book.year}
        />
      ))}
    </div>
  );
}

export default BookList;
