using MySqlConnector;
using BookStore.Models;
using System;

namespace BookStore.Mappers
{
    public static class UserBookRentalMapper
    {
        public static UserBookRental Map(MySqlDataReader reader)
        {
            return new UserBookRental
            {
                UserBookId = Convert.ToInt32(reader["user_book_id"]),
                UserId = Convert.ToInt32(reader["user_id"]),
                BookId = Convert.ToInt32(reader["book_id"]),
                StartDate = Convert.ToDateTime(reader["start_date"]),
                RentalDays = Convert.ToInt32(reader["rental_days"]),
                CreditsSpent = Convert.ToDecimal(reader["credits_spent"]),

                FinishedDate = Convert.ToDateTime(reader["finished_date"]),
                Status = reader["status"].ToString(),

                Title = reader["title"].ToString(),
                AuthorName = reader["author_name"].ToString(),
                Genre = reader["genre"]?.ToString(),
                Language = reader["language"]?.ToString(),
                PublishYear = Convert.ToInt32(reader["publish_year"]),
                ISBN = reader["ISBN"]?.ToString(),
                FileName = reader["file_name"].ToString(),
                Rating = Convert.ToInt32(reader["rating"]),
                Price = Convert.ToDecimal(reader["price"])
            };
        }
    }
}