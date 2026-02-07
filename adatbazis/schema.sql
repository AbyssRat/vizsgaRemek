-- =========================
-- DATABASE
-- =========================
CREATE DATABASE IF NOT EXISTS book_rental_app
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE book_rental_app;

-- =========================
-- USERS
-- =========================
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- =========================
-- AUTHORS
-- =========================
CREATE TABLE authors (
    author_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

-- =========================
-- BOOKS
-- =========================
CREATE TABLE books (
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(50),
    publish_year YEAR,
    ISBN VARCHAR(20) UNIQUE,
    file_url VARCHAR(255) NOT NULL,
    preview_url VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

-- =========================
-- BOOK_AUTHORS (M:N)
-- =========================
CREATE TABLE book_authors (
    book_id INT NOT NULL,
    author_id INT NOT NULL,
    PRIMARY KEY (book_id, author_id),
    FOREIGN KEY (book_id) REFERENCES books(book_id)
        ON DELETE CASCADE,
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
        ON DELETE CASCADE
) ENGINE=InnoDB;

-- =========================
-- USER_BOOKS (RENTALS)
-- =========================
CREATE TABLE user_books (
    user_book_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    book_id INT NOT NULL,
    start_date DATE NOT NULL,
    rental_days INT NOT NULL CHECK (rental_days > 0),
    end_date DATE GENERATED ALWAYS AS (
        DATE_ADD(start_date, INTERVAL rental_days DAY)
    ) STORED,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
        ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES books(book_id)
        ON DELETE CASCADE
) ENGINE=InnoDB;
