import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`/books/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="book-details">
      <img src={book.cover} alt={book.title} />
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
      <p>{book.description}</p>
    </div>
  );
}
