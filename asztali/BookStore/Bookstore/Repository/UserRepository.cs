using BookStore.Mappers;
using BookStore.Models;
using BookStore.Services;
using System.Collections.Generic;
using System.Linq;

namespace BookStore.Repository
{
    public class UserRepository
    {
        private readonly Database _db = new Database();

        // Összes felhasználó lekérése (pl. admin felülethez)
        public List<User> GetAll()
            => _db.ExecuteQuery("SELECT * FROM users", null, UserMapper.Map);

        // Felhasználó keresése ID alapján
        public User? GetById(int id)
            => _db.ExecuteQuery("SELECT * FROM users WHERE user_id = @id",
                cmd => cmd.Parameters.AddWithValue("@id", id),
                UserMapper.Map).FirstOrDefault();

        // Bejelentkezéshez: Felhasználó keresése név alapján
        public User? GetByUsername(string username)
            => _db.ExecuteQuery("SELECT * FROM users WHERE username = @name",
                cmd => cmd.Parameters.AddWithValue("@name", username),
                UserMapper.Map).FirstOrDefault();

        // Kredit egyenleg frissítése (pl. bérléskor)
        public void UpdateCredits(int userId, int newCredits)
        {
            _db.ExecuteNonQuery("UPDATE users SET credits = @credits WHERE user_id = @id",
                cmd => {
                    cmd.Parameters.AddWithValue("@credits", newCredits);
                    cmd.Parameters.AddWithValue("@id", userId);
                });
        }
    }
}