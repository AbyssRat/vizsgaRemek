import BookCard from "./BookCard";

export default function BookList({ books }) {

  return (
    <div className="book-list">

      {books.map(book => (
        <BookCard key={book.book_id} book={book}/>
      ))}

    </div>
  );

}
