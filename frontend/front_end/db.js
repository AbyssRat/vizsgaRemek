import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3307,
  database: "book_rental_app"
});

export default db;
