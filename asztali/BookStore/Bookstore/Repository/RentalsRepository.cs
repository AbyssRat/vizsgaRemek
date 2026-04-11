using BookStore.Mappers;
using BookStore.Models;
using BookStore.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.Repository
{
    public class RentalsRepository
    {
        private readonly Database _db = new Database();

        public List<UserBookRental> GetUserRentals()
        {
            string sql = @"SELECT * FROM `rentals_view`";

            return _db.ExecuteQuery(sql, null, UserBookRentalMapper.Map);
        }
    }
}
