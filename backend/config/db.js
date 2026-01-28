import mysql from 'mysql2/promise';

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'library_management',
    port : 3307,
};

const pool = mysql.createPool(dbConfig);

export default pool;