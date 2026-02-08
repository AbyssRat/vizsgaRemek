import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host:  "localhost",
    user: "root",
    password: "",
    database: "book_rental_app",
    waitForConnections: true,


});

export default pool;
