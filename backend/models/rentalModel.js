import db from "../config/db.js";

export const rentBook = async (userId, items) => {
  const startDate = new Date();

  // tömb → SQL values
  const values = items.map((item) => [
    userId,
    item.book_id,
    startDate,
    item.rental_days,
    item.credits_spent,
  ]);

  const [result] = await db.query(
    `INSERT INTO user_books (user_id, book_id, start_date, rental_days, credits_spent)
     VALUES ?`,
    [values],
  );

  return result.insertId;
};

export const getUserRentals = async (userId) => {
  const [rows] = await db.query(
    `SELECT * FROM rentals_view
      WHERE user_id =  ?;`,
    [userId],
  );
  return rows;
};
