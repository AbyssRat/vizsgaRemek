import { useEffect, useState } from "react";
import api from "../api/axios";
import BookList from "../components/BookList";

export default function Books() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get("/books")
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Books</h1>

      <BookList books={books}/>
    </div>
  );
}
