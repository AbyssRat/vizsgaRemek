import db from "../config/db.js";

export const getAllBooks = async () => {
    const [rows] = await db.query("SELECT * FROM books");
    return rows;
};

export const getBookById = async (id) => {
    const [rows] = await db.query(
        "SELECT * FROM books WHERE book_id = ?",
        [id]
    );
    return rows[0];
};
