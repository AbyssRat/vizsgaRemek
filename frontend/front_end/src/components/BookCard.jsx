import { Link } from "react-router-dom";

export default function BookCard({ book }) {

  return (
    <div className="book-card">

      <img src={book.cover_url} alt={book.title} />

      <h3>{book.title}</h3>

      <p>{book.authors}</p>

      <Link to={`/books/${book.book_id}`}>
        Details
      </Link>

    </div>
  );

}
