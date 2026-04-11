using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySqlConnector;

namespace BookStore.Services
{
    public class Database
    {
        private readonly string _connectionString;

        public Database()
        {
            MySqlConnectionStringBuilder builder = new MySqlConnectionStringBuilder
            {
                Server = "localhost",
                Database = "book_rental_app",
                UserID = "root",
                Password = "",
                Port = 3306
            };
            _connectionString = builder.ConnectionString;
        }

        public List<T> ExecuteQuery<T>(string sql, Action<MySqlCommand> paramSetter, Func<MySqlDataReader, T> map)
        {
            var result = new List<T>();

            using (var conn = new MySqlConnection(_connectionString))
            {
                conn.Open();

                using (var cmd = new MySqlCommand(sql, conn))
                {
                    paramSetter?.Invoke(cmd);

                    using (var reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            result.Add(map(reader));
                        }
                    }
                }
            }

            return result;
        }

        public int ExecuteNonQuery(string sql, Action<MySqlCommand> paramSetter = null)
        {
            using (var conn = new MySqlConnection(_connectionString))
            {
                conn.Open();

                using (var cmd = new MySqlCommand(sql, conn))
                {
                    paramSetter?.Invoke(cmd);
                    return cmd.ExecuteNonQuery();
                }
            }
        }
        public int ExecuteInsert(string sql, Action<MySqlCommand> paramSetter)
        {
            using (var conn = new MySqlConnection(_connectionString))
            {
                conn.Open();

                using (var cmd = new MySqlCommand(sql + "; SELECT LAST_INSERT_ID();", conn))
                {
                    paramSetter?.Invoke(cmd);
                    return Convert.ToInt32(cmd.ExecuteScalar());
                }
            }
        }

        // Database.cs
        public void ExecuteTransaction(Action<MySqlConnection, MySqlTransaction> action)
        {
            using (var conn = new MySqlConnection(_connectionString))
            {
                conn.Open();
                using (var trans = conn.BeginTransaction())
                {
                    try
                    {
                        action(conn, trans);
                        trans.Commit();
                    }
                    catch (Exception)
                    {
                        trans.Rollback();
                        throw; // A hibát továbbdobjuk a Form-nak
                    }
                }
            }
        }
    }
}
