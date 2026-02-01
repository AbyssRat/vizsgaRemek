using System.Collections.ObjectModel;
using static Class1;

public class BooksViewModel
{
    public ObservableCollection<Book> Books { get; set; }

    public BooksViewModel()
    {
        Books = new ObservableCollection<Book>
        {
            new Book { Id = 1, Title = "1984", Author = "Orwell", Year = 1949 },
            new Book { Id = 2, Title = "Dune", Author = "Frank Herbert", Year = 1965 }
        };
    }
}