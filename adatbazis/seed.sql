USE book_rental_app;

-- USERS
INSERT INTO users (username,email,password_hash,credits,is_admin) VALUES
('admin','admin@books.com','hashed_pw',100,TRUE),
('alice','alice@email.com','hashed_pw',20,FALSE),
('bob','bob@email.com','hashed_pw',15,FALSE);

-- AUTHORS
INSERT INTO authors (name,bio) VALUES
('J.R.R. Tolkien','Author of The Lord of the Rings'),
('George Orwell','English novelist and critic'),
('Mary Shelley','Author of Frankenstein'),
('Frank Herbert','Author of Dune');

-- BOOKS
INSERT INTO books (title,genre,language,publish_year,ISBN,file_url,preview_url,cover_url) VALUES
('The Hobbit','Fantasy','English',1937,'9780547928227','/books/hobbit.pdf','/preview/hobbit.pdf','/covers/hobbit.jpg'),
('1984','Science Fiction','English',1949,'9780451524935','/books/1984.pdf','/preview/1984.pdf','/covers/1984.jpg'),
('Frankenstein','Horror','English',1818,'9780486282114','/books/frankenstein.pdf','/preview/frankenstein.pdf','/covers/frankenstein.jpg'),
('Dune','Science Fiction','English',1965,'9780441172719','/books/dune.pdf','/preview/dune.pdf','/covers/dune.jpg');

-- BOOK AUTHORS
INSERT INTO book_authors VALUES
(1,1),
(2,2),
(3,3),
(4,4);

-- RENTALS
INSERT INTO user_books (user_id,book_id,start_date,rental_days,credits_spent) VALUES
(2,1,'2026-03-01',3,7),
(3,2,'2026-03-02',2,6);
