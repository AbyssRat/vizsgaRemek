import React, {useEffect, useState} from "react";
import axios from "../api/axios";
import BookCard from "../components/BookCard";

export default function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("/books")
            .then(res => setBooks(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="books-grid">
            {books.map(book => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
}