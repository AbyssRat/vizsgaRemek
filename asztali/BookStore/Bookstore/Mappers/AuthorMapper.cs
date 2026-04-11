using MySqlConnector;
using BookStore.Models;
using System;

namespace BookStore.Mappers
{
    public static class AuthorMapper
    {
        public static Author Map(MySqlDataReader reader)
        {
            return new Author
            {
                AuthorId = Convert.ToInt32(reader["author_id"]),
                Name = reader["name"].ToString() ?? "Ismeretlen szerző",
                Bio = reader["bio"] == DBNull.Value ? null : reader["bio"].ToString()
            };
        }
    }
}