using MySqlConnector;
using BookStore.Models;
using System;

namespace BookStore.Mappers
{
    public static class UserMapper
    {
        public static User Map(MySqlDataReader reader)
        {
            return new User
            {
                UserId = Convert.ToInt32(reader["user_id"]),
                Username = reader["username"].ToString() ?? "",
                Email = reader["email"].ToString() ?? "",
                Credits = Convert.ToInt32(reader["credits"]),
                // Az enum('true','false') konvertálása bool-ra
                IsAdmin = reader["is_admin"].ToString() == "true",
                CreatedAt = Convert.ToDateTime(reader["created_at"]),

                FirstName = reader["first_name"]?.ToString(),
                LastName = reader["last_name"]?.ToString(),
                City = reader["city"]?.ToString(),
                ZipCode = reader["zip_code"]?.ToString(),
                StreetAddress = reader["street_address"]?.ToString(),

                CardNumber = reader["card_number"]?.ToString(),
                ExpiryDate = reader["expiry_date"] == DBNull.Value ? null : Convert.ToDateTime(reader["expiry_date"]),
                Cvv = reader["cvv"] == DBNull.Value ? null : Convert.ToInt32(reader["cvv"])
            };
        }
    }
}