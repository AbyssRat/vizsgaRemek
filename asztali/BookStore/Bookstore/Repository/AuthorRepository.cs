using BookStore.Mappers;
using BookStore.Models;
using BookStore.Services;
using System.Collections.Generic;
using System.Linq;

namespace BookStore.Repository
{
    public class AuthorRepository
    {
        private readonly Database _db = new Database();

        public List<Author> GetAll()
            => _db.ExecuteQuery("SELECT * FROM authors ORDER BY name", null, AuthorMapper.Map);

        public Author? GetById(int id)
            => _db.ExecuteQuery("SELECT * FROM authors WHERE author_id = @id",
                cmd => cmd.Parameters.AddWithValue("@id", id),
                AuthorMapper.Map).FirstOrDefault();

        public void Insert(Author author)
        {
            _db.ExecuteInsert("INSERT INTO authors (name, bio) VALUES (@name, @bio)",
                cmd => {
                    cmd.Parameters.AddWithValue("@name", author.Name);
                    cmd.Parameters.AddWithValue("@bio", author.Bio);
                });
        }

        public void Update(Author author)
        {
            _db.ExecuteNonQuery("UPDATE authors SET name = @name, bio = @bio WHERE author_id = @id",
                cmd => {
                    cmd.Parameters.AddWithValue("@name", author.Name);
                    cmd.Parameters.AddWithValue("@bio", author.Bio);
                    cmd.Parameters.AddWithValue("@id", author.AuthorId);
                });
        }

        public void Delete(int id)
        {
            // Figyelem: Ez hibát dobhat, ha a szerzőhöz még tartoznak könyvek a kapcsolótáblában!
            _db.ExecuteNonQuery("DELETE FROM authors WHERE author_id = @id",
                cmd => cmd.Parameters.AddWithValue("@id", id));
        }
    }
}