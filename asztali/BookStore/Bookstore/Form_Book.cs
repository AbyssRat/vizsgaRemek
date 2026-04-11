using BookStore.Mappers;
using BookStore.Models;
using BookStore.Repository;
using BookStore.Services;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.ComponentModel.Design.ObjectSelectorEditor;

namespace BookStore
{
    public partial class Form_Book : Form
    {
        BookRepository _repository = new BookRepository();
        private BindingList<Book> _books = new BindingList<Book>();
        public Form_Book()
        {
            InitializeComponent();
        }

        private void button_Update_Click(object sender, EventArgs e)
        {
            Book book = _formadatokEllenorzese();
            _repository.Update(book);
            _konyvadatokBetoltese();
        }

        private Book _formadatokEllenorzese()
        {
            Book book = new Book
            {
                Title = textBox_Title.Text,
                AuthorName = comboBox_Author.SelectedItem?.ToString(),
                Genre = comboBox_Genre.SelectedItem?.ToString(),
                Language = comboBox_Language.SelectedItem?.ToString(),
                PublishYear = (int)numericUpDown_publish_year.Value,
                ISBN = textBox_ISBN.Text,
                FileName = textBox_file_name.Text,
                Rating = 1, // Alapértelmezett érték, később módosítható
                Price = numericUpDown_price.Value
            };
            return book;
        }

        private void Form_Book_Load(object sender, EventArgs e)
        {
            numericUpDown_publish_year.Minimum = 1400;
            numericUpDown_publish_year.Maximum = DateTime.Now.Year;
            numericUpDown_publish_year.Value = DateTime.Now.Year;
            numericUpDown_price.Minimum = 10;
            numericUpDown_price.Maximum = 100000;
            numericUpDown_price.DecimalPlaces = 0;
            //numericUpDown_price.Value = 100;
            _konyvadatokBetoltese();
            comboBox_Genre.DataSource = new List<string> { "Fantasy", "Science Fiction", "Romance", "Thriller", "Non-Fiction" };
            comboBox_Language.DataSource = new List<string> { "English", "Spanish", "French", "German", "Chinese" };
        }

        private void _konyvadatokBetoltese()
        {
            try
            {
                var frissLista = _repository.GetAll();

                _books.Clear(); // Nem hozunk létre új példányt, csak ürítjük a régit
                foreach (var book in frissLista)
                {
                    _books.Add(book);
                }
                comboBox_Author.DataSource = _books.Select(b => b.AuthorName).Distinct().ToList();

                // Ha az első alkalommal vagyunk, hozzárendeljük a forrást
                if (listBox_Konyvek.DataSource == null)
                {
                    listBox_Konyvek.DataSource = _books;
                }
                // beviteli mezők alaphelyzetbe állítása
                textBox_Title.Text = "";
                textBox_ISBN.Text = "";
                textBox_file_name.Text = "";
                comboBox_Author.SelectedIndex = -1;
                comboBox_Genre.SelectedIndex = -1;
                comboBox_Language.SelectedIndex = -1;
                numericUpDown_price.Value = numericUpDown_price.Minimum;
                numericUpDown_publish_year.Minimum = 1400;
                numericUpDown_publish_year.Value = DateTime.Now.Year;
                numericUpDown_publish_year.Maximum = DateTime.Now.Year;

            }
            catch (Exception ex)
            {
                MessageBox.Show($"Hiba a betöltés során: {ex.Message}", "Hiba", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void button_insert_Click(object sender, EventArgs e)
        {
            try
            {
                Book book = _formadatokEllenorzese();
                _repository.InsertBookWithAuthor(book); // Az új, tranzakciós metódus
                _konyvadatokBetoltese();
                MessageBox.Show("Sikeres mentés!");
            }
            catch (Exception ex)
            {
                MessageBox.Show("Hiba történt: " + ex.Message);
            }
        }

        private void button_delete_Click(object sender, EventArgs e)
        {
            Book selected = listBox_Konyvek.SelectedItem as Book;
            if (selected != null)
            {
                _repository.Delete(selected);
                _konyvadatokBetoltese();
            }
        }

        private void listBox_Konyvek_SelectedIndexChanged(object sender, EventArgs e)
        {
            Book selected = listBox_Konyvek.SelectedItem as Book;
            if (selected != null)
            {
                textBox_Title.Text = selected.Title;
                textBox_ISBN.Text = selected.ISBN;
                textBox_file_name.Text = selected.FileName;
                comboBox_Author.SelectedItem = selected.AuthorName;
                comboBox_Genre.SelectedItem = selected.Genre;
                comboBox_Language.SelectedItem = selected.Language;
                numericUpDown_price.Value = selected.Price;
                numericUpDown_publish_year.Value = selected.PublishYear.HasValue ? selected.PublishYear.Value : numericUpDown_publish_year.Minimum;
            }
        }
    }
}
