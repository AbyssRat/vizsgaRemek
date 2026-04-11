using System;

namespace BookStore.Models
{
    public class UserBookRental
    {
        // Kölcsönzés adatai
        public int UserBookId { get; set; }
        public int UserId { get; set; }
        public int BookId { get; set; }
        public DateTime StartDate { get; set; }
        public int RentalDays { get; set; }
        public decimal CreditsSpent { get; set; }

        // Számított mezők az SQL-ből
        public DateTime FinishedDate { get; set; }
        public string Status { get; set; } // 'active' vagy 'finished'

        // Kapcsolódó könyv és szerző adatai
        public string Title { get; set; }
        public string AuthorName { get; set; }
        public string Genre { get; set; }
        public string Language { get; set; }
        public int PublishYear { get; set; }
        public string ISBN { get; set; }
        public string FileName { get; set; }
        public int Rating { get; set; }
        public decimal Price { get; set; }
    }
}