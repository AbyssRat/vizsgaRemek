import db from "../config/db.js";

export const rentBook = async (userId, bookId, startDate, rentalDays) => {
    const [result] = await db.query(
        `INSERT INTO user_books (user_id, book_id, start_date, rental_days)
         VALUES (?, ?, ?, ?)`,
        [userId, bookId, startDate, rentalDays]
    );
    return result.insertId;
};

export const getUserRentals = async (userId) => {
    const [rows] = await db.query(
        `SELECT ub.*, b.title
         FROM user_books ub
         JOIN books b ON b.book_id = ub.book_id
         WHERE ub.user_id = ?`,
        [userId]
    );
    return rows;
};
