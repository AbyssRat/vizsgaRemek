import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
    return (
        <div className="book-card">
            <img src = {book.cover} alt = {book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <Link to={`/books/${book.id}`} className="details-link">View Details</Link>

        </div>
    );
}