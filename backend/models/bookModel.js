import db from "../config/db.js";

export const getAllBooks = async () => {
  const [rows] = await db.query(
    "SELECT books.book_id, books.title, books.genre, books.language, books.publish_year, books.ISBN, books.file_name,  authors.name as author_name, authors.bio, books.rating, books.price FROM books JOIN book_authors ON books.book_id = book_authors.book_id JOIN authors ON book_authors.author_id = authors.author_id;",
  );
  return rows;
};

export const getBookById = async (id) => {
  const [rows] = await db.query(
    "SELECT books.book_id, books.title, books.genre, books.language, books.publish_year, books.ISBN, books.file_name,   authors.name as author_name, authors.bio, books.rating, books.price FROM books JOIN book_authors ON books.book_id = book_authors.book_id JOIN authors ON book_authors.author_id = authors.author_id WHERE books.book_id = ?",
    [id],
  );
  return rows[0];
};
