-- create database
CREATE DATABASE IF NOT EXISTS library_management;
USE library_management;
 
-- ==========================================
-- TABLE: USERS
-- ==========================================
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
 
-- ==========================================
-- TABLE: AUTHORS
-- ==========================================
CREATE TABLE IF NOT EXISTS authors (
    author_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
 
-- ==========================================
-- TABLE: BOOKS
-- ==========================================
CREATE TABLE IF NOT EXISTS books (
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(50),
    publish_year YEAR,
    ISBN VARCHAR(20) UNIQUE,
    file_url VARCHAR(255) NOT NULL,
    subscription_duration_days INT NOT NULL DEFAULT 365
);
 
-- ==========================================
-- TABLE: BOOK_AUTHORS (junction table)
-- ==========================================
CREATE TABLE IF NOT EXISTS book_authors (
    book_id INT NOT NULL,
    author_id INT NOT NULL,
    PRIMARY KEY (book_id, author_id),
    FOREIGN KEY (book_id) REFERENCES books(book_id) ON DELETE CASCADE,
    FOREIGN KEY (author_id) REFERENCES authors(author_id) ON DELETE CASCADE
);
 
-- ==========================================
-- TABLE: USER_BOOKS (tracks subscriptions/access)
-- ==========================================
CREATE TABLE IF NOT EXISTS user_books (
    user_book_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    book_id INT NOT NULL,
    start_date DATE NOT NULL DEFAULT CURRENT_DATE,
    end_date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES books(book_id) ON DELETE CASCADE,
    UNIQUE KEY user_book_unique (user_id, book_id) -- prevents duplicate active subscriptions
);
