using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.Models
{
    public class Book
    {
        public int BookId { get; set; }

        public string? Title { get; set; }
        public string? AuthorName { get; set; }

        public string? Genre { get; set; }          // nullable, mert DEFAULT NULL

        public string? Language { get; set; }    // nullable

        public int? PublishYear { get; set; }      // DEFAULT NULL

        public string? ISBN { get; set; } = string.Empty;
        public string? FileName { get; set; } = string.Empty;

        public int Rating { get; set; } = 1;

        public decimal Price { get; set; } = 100.00m;

        override public string ToString()
            => $"{Title} ({AuthorName})";
    }
}
