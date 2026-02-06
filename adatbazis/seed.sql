-- ==========================================
-- DATABASE SEED FOR library_management
-- ==========================================
 
USE library_management;
 
-- ===============================
-- USERS
-- ===============================
INSERT INTO users (username, email, password_hash, is_admin, created_at) VALUES
('alice', 'alice@example.com', 'hashedpassword1', FALSE, '2026-02-01 10:00:00'),
('bob', 'bob@example.com', 'hashedpassword2', FALSE, '2026-02-02 11:30:00'),
('charlie', 'charlie@example.com', 'hashedpassword3', FALSE, '2026-02-03 09:15:00'),
('admin', 'admin@example.com', 'hashedadminpass', TRUE, '2026-02-01 08:00:00');
 
-- ===============================
-- AUTHORS
-- ===============================
INSERT INTO authors (name) VALUES
('J.K. Rowling'),
('George R.R. Martin'),
('Isaac Asimov'),
('Brandon Sanderson'),
('Agatha Christie');
 
-- ===============================
-- BOOKS
-- ===============================
INSERT INTO books (title, genre, publish_year, ISBN, file_url, subscription_duration_days) VALUES
('Harry Potter and the Sorcerer''s Stone', 'Fantasy', 1997, '9780439708180', '/ebooks/harry_potter_1.pdf', 365),
('Harry Potter and the Chamber of Secrets', 'Fantasy', 1998, '9780439064873', '/ebooks/harry_potter_2.pdf', 365),
('A Game of Thrones', 'Fantasy', 1996, '9780553103540', '/ebooks/game_of_thrones_1.pdf', 365),
('Foundation', 'Science Fiction', 1951, '9780553293357', '/ebooks/foundation.pdf', 365),
('Mistborn: The Final Empire', 'Fantasy', 2006, '9780765311788', '/ebooks/mistborn.pdf', 365),
('Murder on the Orient Express', 'Mystery', 1934, '9780007119318', '/ebooks/orient_express.pdf', 365);
 
-- ===============================
-- BOOK_AUTHORS (junction)
-- ===============================
INSERT INTO book_authors (book_id, author_id) VALUES
(1, 1),  -- Harry Potter 1 → J.K. Rowling
(2, 1),  -- Harry Potter 2 → J.K. Rowling
(3, 2),  -- Game of Thrones → George R.R. Martin
(4, 3),  -- Foundation → Isaac Asimov
(5, 4),  -- Mistborn → Brandon Sanderson
(6, 5);  -- Murder on the Orient Express → Agatha Christie
 
-- ===============================
-- USER_BOOKS (subscriptions)
-- ===============================
INSERT INTO user_books (user_id, book_id, start_date, end_date) VALUES
(1, 1, '2026-02-01', '2027-02-01'),
(1, 4, '2026-02-01', '2027-02-01'),
(2, 3, '2026-02-05', '2027-02-05'),
(2, 6, '2026-02-05', '2027-02-05'),
(3, 2, '2026-02-10', '2027-02-10'),
(3, 5, '2026-02-10', '2027-02-10');
 
