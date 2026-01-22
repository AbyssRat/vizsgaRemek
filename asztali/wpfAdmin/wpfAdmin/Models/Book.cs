using System;
using System.Collections.Generic;
using System.Text;

namespace wpfAdmin.Models
{
    class Book
    {
        public int BookId { get; set; }
        public string Title { get; set; }
        public string Genre { get; set; }
        public int PublishYear { get; set; }
        public int TotalCopies { get; set; }
        public int AvailableCopies { get; set; }
    }
}
