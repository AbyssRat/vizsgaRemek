-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Ápr 11. 11:38
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `book_rental_app`
--
CREATE DATABASE IF NOT EXISTS `book_rental_app` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `book_rental_app`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `authors`
--

CREATE TABLE `authors` (
  `author_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `bio` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `authors`
--

INSERT INTO `authors` (`author_id`, `name`, `bio`) VALUES
(1, 'Cory Doctorow', 'British-Canadian author, activist, and journalist known for science fiction and digital rights advocacy.'),
(2, 'Fyodor Dostoyevsky', 'Russian novelist, philosopher, and journalist, one of the greatest literary figures in world literature.'),
(3, 'John Buchan', 'Scottish novelist and historian, best known for adventure novels and thrillers.'),
(4, 'Philip K. Dick', 'American writer known for his influential works in science fiction exploring reality and identity.'),
(5, 'Mary Shelley', 'English novelist who wrote the Gothic novel Frankenstein; one of the earliest science fiction works.'),
(6, 'F. Scott Fitzgerald', 'American novelist and short story writer, widely regarded as one of the greatest writers of the 20th century.');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `books`
--

CREATE TABLE `books` (
  `book_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `genre` enum('Fantasy','Science Fiction','Romance','Thriller','Non-Fiction','Mystery','Horror','Other') DEFAULT NULL,
  `language` enum('Hungarian','English','Spanish','French','German','Chinese','Japanese','Other') DEFAULT NULL,
  `publish_year` int(4) DEFAULT NULL,
  `ISBN` varchar(20) DEFAULT NULL,
  `file_name` varchar(255) NOT NULL,
  `rating` int(11) NOT NULL DEFAULT 1,
  `price` decimal(10,2) NOT NULL DEFAULT 100.00,
  `more_details_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `books`
--

INSERT INTO `books` (`book_id`, `title`, `genre`, `language`, `publish_year`, `ISBN`, `file_name`, `rating`, `price`, `more_details_url`) VALUES
(1, 'White Nights', 'Romance', 'English', 1848, '9780140449279', 'dostoyevsky-white-nights-and-other-stories.epub', 4, 100.00, 'https://en.wikipedia.org/wiki/White_Nights_(short_story)'),
(2, 'Makers', 'Science Fiction', 'English', 2009, '9780765312798', 'doctorow-makers.epub', 4, 100.00, 'https://en.wikipedia.org/wiki/Makers_(novel)'),
(3, 'The Magic Walking Stick', 'Fantasy', 'English', 1894, '9781434402765', 'buchan-magic-walking-stick.epub', 3, 100.00, 'https://en.wikipedia.org/wiki/John_Buchan'),
(4, 'The Skull', 'Science Fiction', 'English', 1952, '9780806537982', 'dick-skull.epub', 4, 100.00, 'https://en.wikipedia.org/wiki/The_Skull_(short_story)'),
(5, 'Frankenstein', 'Horror', 'English', 1818, '9780486282114', 'shelley-frankenstein.epub', 5, 100.00, 'https://en.wikipedia.org/wiki/Frankenstein'),
(6, 'The Great Gatsby', 'Romance', 'English', 1925, '9780743273565', 'fitzgerald-great-gatsby.epub', 5, 100.00, 'https://en.wikipedia.org/wiki/The_Great_Gatsby'),
(10, 'qqqqqqqqqqqqqq', 'Fantasy', 'English', 2026, '111111111111111111', 'sssssssssssssssssssssss', 1, 100.00, NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `book_authors`
--

CREATE TABLE `book_authors` (
  `book_id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `book_authors`
--

INSERT INTO `book_authors` (`book_id`, `author_id`) VALUES
(1, 2),
(2, 1),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(10, 2);

-- --------------------------------------------------------

--
-- A nézet helyettes szerkezete `rentals_view`
-- (Lásd alább az aktuális nézetet)
--
CREATE TABLE `rentals_view` (
`user_book_id` int(11)
,`user_id` int(11)
,`book_id` int(11)
,`start_date` date
,`rental_days` int(11)
,`credits_spent` int(11)
,`finished_date` date
,`status` varchar(8)
,`title` varchar(255)
,`author_name` varchar(100)
,`genre` enum('Fantasy','Science Fiction','Romance','Thriller','Non-Fiction','Mystery','Horror','Other')
,`language` enum('Hungarian','English','Spanish','French','German','Chinese','Japanese','Other')
,`publish_year` int(4)
,`ISBN` varchar(20)
,`file_name` varchar(255)
,`rating` int(11)
,`price` decimal(10,2)
);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `credits` int(11) DEFAULT 10,
  `is_admin` enum('true','false') DEFAULT 'false',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `zip_code` varchar(10) DEFAULT NULL,
  `street_address` varchar(200) DEFAULT NULL,
  `card_number` varchar(24) DEFAULT NULL,
  `expiry_date` date DEFAULT NULL,
  `cvv` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `password_hash`, `credits`, `is_admin`, `created_at`, `first_name`, `last_name`, `city`, `zip_code`, `street_address`, `card_number`, `expiry_date`, `cvv`) VALUES
(1, 'mintamenyhert', 'user@books.hu', '$2b$10$X3YkdfWuk.UoYyYiguyUVOB5BX1ADPFLWzDqykb4s377KbHbfeSry', 10, 'false', '2026-04-04 06:52:12', 'Minta', 'Menyhért', 'Hajdúböszörmény', '4220', 'Győrössy kert', '4802 3709 1026 6526', '2028-05-01', 553),
(3, 'Nagy Mihály', 'user3@books.hu', '$2b$10$ZJ2T3fvTZc3YBuhy4L8iFORJT9fsIJ4TwM84DsQABuAXjZwNUP8Ha', 10, 'false', '2026-04-04 09:28:24', 'Nagy', 'Mihály', 'Debrecen', '4023', 'Nyár utca', '4205 4031 1995 4916', '2028-04-06', 871),
(4, 'Kis Tibor', 'user4@books.hu', '$2b$10$W9XBfhiQrY4FruItqhkFZu4OkyCUcUX4XCiv1Z4vyWcMEkayk0DVq', 10, 'false', '2026-04-04 09:38:14', 'Kis', 'Tibor', 'Eger', '3300', 'Dobó tér', '4298 5769 3437 9860', '2028-05-16', 156),
(5, 'Boros Sándor', 'user6@books.hu', '$2b$10$bUxEuCk3wZibamQewD0PMu9F/B7uthqzh0EzlgVbH04p9djpSZFay', 10, 'false', '2026-04-09 18:16:50', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user_books`
--

CREATE TABLE `user_books` (
  `user_book_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `start_date` date NOT NULL DEFAULT current_timestamp(),
  `rental_days` int(11) NOT NULL CHECK (`rental_days` > 0),
  `credits_spent` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `user_books`
--

INSERT INTO `user_books` (`user_book_id`, `user_id`, `book_id`, `start_date`, `rental_days`, `credits_spent`) VALUES
(1, 1, 2, '2026-04-07', 7, 700),
(2, 1, 6, '2026-04-07', 7, 700);

--
-- Eseményindítók `user_books`
--
DELIMITER $$
CREATE TRIGGER `before_user_books_insert` BEFORE INSERT ON `user_books` FOR EACH ROW BEGIN
    DECLARE book_price DECIMAL(10,2);

    -- Lekérjük a könyv árát
    SELECT price INTO book_price
    FROM books
    WHERE book_id = NEW.book_id;

    -- Kiszámoljuk a credits_spent értéket
    SET NEW.credits_spent = book_price * NEW.rental_days;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Nézet szerkezete `rentals_view`
--
DROP TABLE IF EXISTS `rentals_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `rentals_view`  AS SELECT `ub`.`user_book_id` AS `user_book_id`, `ub`.`user_id` AS `user_id`, `ub`.`book_id` AS `book_id`, `ub`.`start_date` AS `start_date`, `ub`.`rental_days` AS `rental_days`, `ub`.`credits_spent` AS `credits_spent`, `ub`.`start_date`+ interval `ub`.`rental_days` day AS `finished_date`, CASE WHEN `ub`.`start_date` + interval `ub`.`rental_days` day <= curdate() THEN 'finished' ELSE 'active' END AS `status`, `b`.`title` AS `title`, `authors`.`name` AS `author_name`, `b`.`genre` AS `genre`, `b`.`language` AS `language`, `b`.`publish_year` AS `publish_year`, `b`.`ISBN` AS `ISBN`, `b`.`file_name` AS `file_name`, `b`.`rating` AS `rating`, `b`.`price` AS `price` FROM (((`user_books` `ub` join `books` `b` on(`b`.`book_id` = `ub`.`book_id`)) join `book_authors` on(`b`.`book_id` = `book_authors`.`book_id`)) join `authors` on(`book_authors`.`author_id` = `authors`.`author_id`)) ;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`author_id`);

--
-- A tábla indexei `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`book_id`),
  ADD UNIQUE KEY `ISBN` (`ISBN`);

--
-- A tábla indexei `book_authors`
--
ALTER TABLE `book_authors`
  ADD PRIMARY KEY (`book_id`,`author_id`),
  ADD KEY `author_id` (`author_id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- A tábla indexei `user_books`
--
ALTER TABLE `user_books`
  ADD PRIMARY KEY (`user_book_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `book_id` (`book_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `authors`
--
ALTER TABLE `authors`
  MODIFY `author_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `books`
--
ALTER TABLE `books`
  MODIFY `book_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `user_books`
--
ALTER TABLE `user_books`
  MODIFY `user_book_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `book_authors`
--
ALTER TABLE `book_authors`
  ADD CONSTRAINT `book_authors_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `books` (`book_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `book_authors_ibfk_2` FOREIGN KEY (`author_id`) REFERENCES `authors` (`author_id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `user_books`
--
ALTER TABLE `user_books`
  ADD CONSTRAINT `user_books_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_books_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `books` (`book_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
