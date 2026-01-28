-- Users
INSERT INTO users (name, email, password_hash, role, created_at) VALUES
('Bence Kovács', 'bence.kovacs@example.com', 'hashed_password1', 'user', NOW()),
('Eszter Nagy', 'eszter.nagy@example.com', 'user', NOW()),
('Admin User', 'admin@example.com', 'hashed_admin_password', 'admin', NOW());

-- Books
INSERT INTO books (title, author, isbn, category, total_copies, available_copies, created_at) VALUES
('Egri csillagok', 'Gárdonyi Géza', '9789630790123', 'Történelem', 5, 5, NOW()),
('Tüskevár', 'Fekete István', '9789631180999', 'Ifjúsági', 4, 4, NOW()),
('Abigél', 'Szabó Magda', '9789633460613', 'Regény', 3, 3, NOW());

-- Rentals
INSERT INTO rentals (user_id, book_id, rented_at, due_date, returned_at) VALUES
(1, 1, NOW() - INTERVAL '5 days', NOW() + INTERVAL '25 days', NULL),
(2, 2, NOW() - INTERVAL '2 days', NOW() + INTERVAL '28 days', NULL),
(1, 3, NOW() - INTERVAL '10 days', NOW() + INTERVAL '20 days', NOW() - INTERVAL '1 days');
