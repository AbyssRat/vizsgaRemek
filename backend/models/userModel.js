import db from "../config/db.js";

export const findUserByEmail = async (email) => {
    const [rows] = await db.query(
        "SELECT * FROM users WHERE email = ?",
        [email]
    );
    return rows[0];
};

export const createUser = async (username, email, passwordHash) => {
    const [result] = await db.query(
        "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)",
        [username, email, passwordHash]
    );
    return result.insertId;
};
