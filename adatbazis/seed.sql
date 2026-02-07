-- =========================
-- USERS (demo accounts)
-- =========================
INSERT INTO users (username, email, password_hash, is_admin)
VALUES
('admin', 'admin@bookapp.hu', 'hashed_admin_password', TRUE),
('anna', 'anna@bookapp.hu', 'hashed_password_anna', FALSE),
('bence', 'bence@bookapp.hu', 'hashed_password_bence', FALSE);

-- =========================
-- AUTHORS (Hungarian)
-- =========================
INSERT INTO authors (name)
VALUES
('Jókai Mór'),
('Móricz Zsigmond'),
('Kosztolányi Dezső'),
('Szabó Magda'),
('Kertész Imre');

-- =========================
-- BOOKS (Hungarian literature)
-- =========================
INSERT INTO books (title, genre, publish_year, ISBN, file_url, preview_url)
VALUES
(
  'Az arany ember',
  'Regény',
  1872,
  '9789630000001',
  '/books/az_arany_ember.pdf',
  '/previews/az_arany_ember_preview.pdf'
),
(
  'Légy jó mindhalálig',
  'Regény',
  1920,
  '9789630000002',
  '/books/legy_jo_mindhalalig.pdf',
  '/previews/legy_jo_mindhalalig_preview.pdf'
),
(
  'Édes Anna',
  'Regény',
  1926,
  '9789630000003',
  '/books/edes_anna.pdf',
  '/previews/edes_anna_preview.pdf'
),
(
  'Abigél',
  'Ifjúsági regény',
  1970,
  '9789630000004',
  '/books/abigel.pdf',
  '/previews/abigel_preview.pdf'
),
(
  'Sorstalanság',
  'Regény',
  1975,
  '9789630000005',
  '/books/sorstalansag.pdf',
  '/previews/sorstalansag_preview.pdf'
);

-- =========================
-- BOOK_AUTHORS
-- =========================
INSERT INTO book_authors (book_id, author_id)
VALUES
(1, 1), -- Az arany ember → Jókai Mór
(2, 2), -- Légy jó mindhalálig → Móricz Zsigmond
(3, 3), -- Édes Anna → Kosztolányi Dezső
(4, 4), -- Abigél → Szabó Magda
(5, 5); -- Sorstalanság → Kertész Imre

-- =========================
-- USER_BOOKS (rentals)
-- =========================
INSERT INTO user_books (user_id, book_id, start_date, rental_days)
VALUES
(2, 1, '2026-02-01', 7),
(2, 4, '2026-02-03', 14),
(3, 5, '2026-02-05', 10);
