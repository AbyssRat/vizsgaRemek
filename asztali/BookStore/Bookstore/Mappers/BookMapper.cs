using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BookStore.Models;

namespace BookStore.Mappers
{
    public static class BookMapper
    {
        public static Book Map(MySqlDataReader reader)
        {
            return new Book
            {
                BookId = Convert.ToInt32(reader["book_id"]),
                Title = reader["title"].ToString(),
                AuthorName = reader["author_name"].ToString(),

                Genre = reader["genre"].ToString(),
                Language = reader["language"].ToString(),

                PublishYear = Convert.ToInt32(reader["publish_year"]),

                ISBN = reader["ISBN"]?.ToString(),
                FileName = reader["file_name"].ToString(),

                Rating = Convert.ToInt32(reader["rating"]),
                Price = Convert.ToDecimal(reader["price"]),

            };
        }
    }
}
