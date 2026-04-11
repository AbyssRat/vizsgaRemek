using BookStore.Mappers;
using BookStore.Models;
using BookStore.Services;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.Repository
{
    public class BookRepository
    {
        private readonly Database _db = new Database();

        public List<Book> GetAll()
            => _db.ExecuteQuery("SELECT books.*, authors.name AS author_name FROM books JOIN book_authors ON books.book_id=book_authors.book_id JOIN authors ON book_authors.author_id = authors.author_id;", null, BookMapper.Map); // sql utasítás, paraméterek, mapper

        public void Insert(Book book)
            => _db.ExecuteInsert(
                @"INSERT INTO books 
                  (title, genre, language, publish_year, ISBN, file_name, rating, price)
                  VALUES (@title, @genre, @language, @year, @isbn, @file, @rating, @price)",
                cmd =>
                {
                    cmd.Parameters.AddWithValue("@title", book.Title);
                    cmd.Parameters.AddWithValue("@genre", book.Genre?.ToString());
                    cmd.Parameters.AddWithValue("@language", book.Language?.ToString());
                    cmd.Parameters.AddWithValue("@year", book.PublishYear);
                    cmd.Parameters.AddWithValue("@isbn", book.ISBN);
                    cmd.Parameters.AddWithValue("@file", book.FileName);
                    cmd.Parameters.AddWithValue("@rating", book.Rating);
                    cmd.Parameters.AddWithValue("@price", book.Price);
                }
            );
        // BookRepository.cs
        public void InsertBookWithAuthor(Book book)
        {
            _db.ExecuteTransaction((conn, trans) =>
            {
                // 1. SZERZŐ KEZELÉSE
                // Megnézzük, létezik-e már a szerző
                int authorId;
                string selectAuthorSql = "SELECT author_id FROM authors WHERE name = @name LIMIT 1";
                using (var cmd = new MySqlCommand(selectAuthorSql, conn, trans))
                {
                    cmd.Parameters.AddWithValue("@name", book.AuthorName);
                    var result = cmd.ExecuteScalar();

                    if (result != null)
                    {
                        authorId = Convert.ToInt32(result);
                    }
                    else
                    {
                        // Ha nem létezik, létrehozzuk
                        string insertAuthorSql = "INSERT INTO authors (name) VALUES (@name); SELECT LAST_INSERT_ID();";
                        using (var insertCmd = new MySqlCommand(insertAuthorSql, conn, trans))
                        {
                            insertCmd.Parameters.AddWithValue("@name", book.AuthorName);
                            authorId = Convert.ToInt32(insertCmd.ExecuteScalar());
                        }
                    }
                }

                // 2. KÖNYV BESZÚRÁSA
                int bookId;
                string insertBookSql = @"INSERT INTO books 
                    (title, genre, language, publish_year, ISBN, file_name, rating, price)
                    VALUES (@title, @genre, @language, @year, @isbn, @file, @rating, @price);
                    SELECT LAST_INSERT_ID();";

                using (var cmd = new MySqlCommand(insertBookSql, conn, trans))
                {
                    cmd.Parameters.AddWithValue("@title", book.Title);
                    cmd.Parameters.AddWithValue("@genre", book.Genre);
                    cmd.Parameters.AddWithValue("@language", book.Language);
                    cmd.Parameters.AddWithValue("@year", book.PublishYear);
                    cmd.Parameters.AddWithValue("@isbn", book.ISBN);
                    cmd.Parameters.AddWithValue("@file", book.FileName);
                    cmd.Parameters.AddWithValue("@rating", book.Rating);
                    cmd.Parameters.AddWithValue("@price", book.Price);
                    bookId = Convert.ToInt32(cmd.ExecuteScalar());
                }

                // 3. ÖSSZEKÖTÉS (book_authors tábla)
                string linkSql = "INSERT INTO book_authors (book_id, author_id) VALUES (@bId, @aId)";
                using (var cmd = new MySqlCommand(linkSql, conn, trans))
                {
                    cmd.Parameters.AddWithValue("@bId", bookId);
                    cmd.Parameters.AddWithValue("@aId", authorId);
                    cmd.ExecuteNonQuery();
                }
            });
        }
        public void Update(Book book)
        {
            _db.ExecuteNonQuery(
                @"UPDATE books SET 
                  title = @title, genre = @genre, language = @language, publish_year = @year, 
                  ISBN = @isbn, file_name = @file, rating = @rating, price = @price
                  WHERE book_id = @id",
                cmd =>
                {
                    cmd.Parameters.AddWithValue("@title", book.Title);
                    cmd.Parameters.AddWithValue("@genre", book.Genre);
                    cmd.Parameters.AddWithValue("@language", book.Language);
                    cmd.Parameters.AddWithValue("@year", book.PublishYear);
                    cmd.Parameters.AddWithValue("@isbn", book.ISBN);
                    cmd.Parameters.AddWithValue("@file", book.FileName);
                    cmd.Parameters.AddWithValue("@rating", book.Rating);
                    cmd.Parameters.AddWithValue("@price", book.Price);
                    cmd.Parameters.AddWithValue("@id", book.BookId);
                }
            );
        }
        public void Delete(Book book)
        {
            _db.ExecuteTransaction((conn, trans) =>
            {
                // 1. Először töröljük a kapcsolatot a book_authors táblából
                string deleteLinkSql = "DELETE FROM book_authors WHERE book_id = @bookId and author_id = (SELECT author_id FROM `authors` WHERE `name` LIKE @authorName)";
                using (var cmd = new MySqlCommand(deleteLinkSql, conn, trans))
                {
                    cmd.Parameters.AddWithValue("@bookId", book.BookId);
                    cmd.Parameters.AddWithValue("@authorName", book.AuthorName);
                    cmd.ExecuteNonQuery();
                }

                // 2. Ezután törölhetjük magát a könyvet a books táblából
                string deleteBookSql = "DELETE FROM books WHERE book_id = @id";
                using (var cmd = new MySqlCommand(deleteBookSql, conn, trans))
                {
                    cmd.Parameters.AddWithValue("@id", book.BookId);
                    cmd.ExecuteNonQuery();
                }

                // Megjegyzés: A szerzőt (authors tábla) nem töröljük, 
                // mert lehet, hogy más könyvei is szerepelnek az adatbázisban.
            });
        }
    }
}
