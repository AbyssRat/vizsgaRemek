import React, { useState, useEffect } from 'react';
import './BookSearchWithPreview.css'; // Feltételezzük, hogy van egy kis CSS-ed a modalhoz

const BookSearchWithPreview = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null); // A kiválasztott könyv adatai

  // Keresés a Google Books API-ban
  const searchBooks = async () => {
    if (!searchTerm) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&maxResults=20`
      );
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Hiba a keresés során:", error);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  // --- FUNKCIÓ AZ ELŐNÉZET MEGNYITÁSÁHOZ ---
  const openPreview = (book) => {
    setSelectedBook(book);
  };

  const closePreview = () => {
    setSelectedBook(null);
  };

  return (
    <div className="app-container">
      <h1>Könyvkereső és olvasó</h1>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Keresés cím vagy szerző alapján..."
          onKeyDown={(e) => e.key === 'Enter' && searchBooks()}
        />
        <button onClick={searchBooks}>Keresés</button>
      </div>

      {loading && <p>Keresés...</p>}

      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            {book.volumeInfo.imageLinks?.thumbnail && (
              <img src={book.volumeInfo.imageLinks.thumbnail} alt="Borító" />
            )}
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(', ')}</p>
            {/* GOMB AZ ELŐNÉZET MEGNYITÁSÁHOZ */}
            <button onClick={() => openPreview(book)}>Előnézet megtekintése</button>
          </div>
        ))}
      </div>

      {/* --- MODAL AZ ELŐNÉZET MEGJELENÍTÉSÉHEZ --- */}
      {selectedBook && (
        <div className="modal-overlay" onClick={closePreview}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closePreview}>X</button>
            <h2>{selectedBook.volumeInfo.title}</h2>
            {/* A varázslat itt történik: az API által adott előnézeti link beágyazása */}
            <iframe
              title="book-preview"
              src={selectedBook.volumeInfo.previewLink}
              width="100%"
              height="600px"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookSearchWithPreview;