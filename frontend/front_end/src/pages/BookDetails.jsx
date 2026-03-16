import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

export default function BookDetails() {

  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    api.get(`/books/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>

      <img src={book.cover_url} />

      <h1>{book.title}</h1>

      <p>{book.authors}</p>

      <p>{book.genre}</p>

      <p>{book.language}</p>

      <p>{book.publish_year}</p>

    </div>
  );
}

const rentBook = async () => {

  await api.post("/rent", {
    book_id: book.book_id,
    rental_days: 7
  });

  alert("Book rented!");
};
<button onClick={rentBook}>
Rent Book
</button>
