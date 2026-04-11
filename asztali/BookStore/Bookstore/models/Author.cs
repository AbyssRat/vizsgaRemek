using System;

namespace BookStore.Models
{
    public class Author
    {
        public int AuthorId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Bio { get; set; }

        // Segédtulajdonság: ha a listában vagy ComboBox-ban meg akarjuk jeleníteni
        public override string ToString() => Name;
    }
}