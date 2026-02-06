-- ==========================================
-- SEED DATA: PLANS
-- ==========================================
INSERT INTO plans (name, duration_days, price) VALUES
('Trial', 7, 0.00),
('3 Months', 90, 4.99),
('6 Months', 180, 7.99),
('12 Months', 365, 12.99);

-- ==========================================
-- SEED DATA: AUTHORS
-- ==========================================
INSERT INTO authors (name) VALUES
('J.K. Rowling'),
('George R.R. Martin'),
('Isaac Asimov'),
('Brandon Sanderson'),
('Agatha Christie');

-- ==========================================
-- SEED DATA: BOOKS
-- ==========================================
INSERT INTO books (title, genre, publish_year, ISBN, file_url) VALUES
('Harry Potter and the Sorcerer''s Stone', 'Fantasy', 1997, '9780439708180', '/ebooks/harry_potter_1.pdf'),
('Harry Potter and the Chamber of Secrets', 'Fantasy', 1998, '9780439064873', '/ebooks/harry_potter_2.pdf'),
('A Game of Thrones', 'Fantasy', 1996, '9780553103540', '/ebooks/game_of_thrones_1.pdf'),
('Foundation', 'Science Fiction', 1951, '9780553293357', '/ebooks/foundation.pdf'),
('Mistborn: The Final Empire', 'Fantasy', 2006, '9780765311788', '/ebooks/mistborn.pdf'),
('Murder on the Orient Express', 'Mystery', 1934, '9780007119318', '/ebooks/orient_express.pdf');

-- ==========================================
-- SEED DATA: BOOK_AUTHORS
-- ==========================================
INSERT INTO book_authors (book_id, author_id) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 3),
(5, 4),
(6, 5);

-- ==========================================
-- SEED DATA: USERS
-- ==========================================
INSERT INTO users (username, email, password_hash, is_admin) VALUES
('alice', 'alice@example.com', 'hashedpassword1', FALSE),
('bob', 'bob@example.com', 'hashedpassword2', FALSE),
('charlie', 'charlie@example.com', 'hashedpassword3', FALSE),
('admin', 'admin@example.com', 'hashedadminpass', TRUE);

-- ==========================================
-- SEED DATA: USER_BOOKS (subscriptions)
-- ==========================================
INSERT INTO user_books (user_id, book_id, plan_id, start_date, end_date) VALUES
-- Alice: Trial & 12 Months
(1, 1, 1, '2026-02-01', '2026-02-08'), -- Trial 1 week
(1, 4, 4, '2026-02-01', '2027-02-01'), -- 12 months

-- Bob: 3 Months & Trial
(2, 3, 2, '2026-02-05', '2026-05-06'), -- 3 months
(2, 6, 1, '2026-02-05', '2026-02-12'), -- Trial 1 week

-- Charlie: 6 Months & 3 Months
(3, 2, 3, '2026-02-10', '2026-08-09'), -- 6 months
(3, 5, 2, '2026-02-10', '2026-05-11'); -- 3 months
