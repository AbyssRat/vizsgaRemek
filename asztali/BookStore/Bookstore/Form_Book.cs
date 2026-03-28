using Bookstore.Service;

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Bookstore.Models;

namespace Bookstore
{
    public partial class Form_Book : Form
    {
        private readonly APIService<Book> _service;
        public Form_Book()
        {
            InitializeComponent();
            _service = new APIService<Book>("http://localhost:5000/api/");
        }

        private void pictureBox_exit_Click(object sender, EventArgs e)
        {
            Form_Book.ActiveForm.Close();
        }

        private async void Form_Book_Load(object sender, EventArgs e)
        {
            await LoadBooksAsync();
        }
        private async Task LoadBooksAsync()
        {
            try
            {
                var books = await _service.GetAllAsync("books");

                listBoxBooks.DataSource= null;
                listBoxBooks.DataSource = books;
                listBoxBooks.DisplayMember = "Title"; // A könyv címét jeleníti meg a listában
                listBoxBooks.ValueMember = "Book_Id"; // A könyv azonosítóját használja értékként



            }
            catch (Exception ex)
            {

                MessageBox.Show("Error loading books: " + ex.Message);
            }
        }

        private void listBoxBooks_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (listBoxBooks.SelectedItem is Book selected)
            {
                txtTitle.Text = selected.Title;
                txtGenre.Text = selected.Genre;
                txtLanguage.Text = selected.Language;
                txtYear.Text = selected.Publish_Year.ToString();
                txtISBN.Text = selected.ISBN.ToString();
                txtFileUrl.Text = selected.File_Url;
                txtPreviewUrl.Text = selected.Preview_Url;
                txtCoverUrl.Text = selected.Cover_Url;

            }

        }

        private async void btnAdd_Click(object sender, EventArgs e)
        {
            try
            {
                var book = ReadBookFromForm(forUpdate: false);

                bool ok = await _service.CreateAsync("books", book);

                if (!ok)
                {
                    MessageBox.Show("Sikertelen mentés (POST)!");
                    return;
                }

                await LoadBooksAsync();
                MessageBox.Show("Könyv hozzáadva!");
            }
            catch (Exception ex)
            {
                MessageBox.Show("Hiba hozzáadás közben: " + ex.Message);
            }
        }

        private async void btnUpdate_Click(object sender, EventArgs e)
        {
            try
            {
                Book selected = listBoxBooks.SelectedItem as Book;

                if (selected == null)
                {
                    MessageBox.Show("Válassz ki egy könyvet a módosításhoz!");
                    return;
                }

                var updated = ReadBookFromForm(true);
                int id = selected.Book_Id;

                bool ok = await _service.UpdateAsync("books", id, updated);

                if (!ok)
                {
                    MessageBox.Show("Sikertelen módosítás (PUT)!");
                    return;
                }

                await LoadBooksAsync();
                MessageBox.Show("Könyv módosítva!");
            }
            catch (Exception ex)
            {
                MessageBox.Show("Hiba módosítás közben: " + ex.Message);
            }
        }

        private async void btnDelete_Click(object sender, EventArgs e)
        {
            try
            {
                Book selected = listBoxBooks.SelectedItem as Book;

                if (selected == null)
                {
                    MessageBox.Show("Válassz ki egy könyvet a törléshez!");
                    return;
                }

                var confirm = MessageBox.Show(
                    "Biztosan törlöd ezt a könyvet?\n\n" + selected.Title,
                    "Megerősítés",
                    MessageBoxButtons.YesNo,
                    MessageBoxIcon.Warning);

                if (confirm != DialogResult.Yes)
                    return;

                bool ok = await _service.DeleteAsync("books", selected.Book_Id);

                if (!ok)
                {
                    MessageBox.Show("Sikertelen törlés (DELETE)!");
                    return;
                }

                await LoadBooksAsync();
                MessageBox.Show("Könyv törölve!");
            }
            catch (Exception ex)
            {
                MessageBox.Show("Hiba törlés közben: " + ex.Message);
            }
        }
        private Book ReadBookFromForm(bool forUpdate)
        {
            // minimál validáció
            if (string.IsNullOrWhiteSpace(txtTitle.Text))
                throw new Exception("A cím (Title) kötelező!");

            if (!int.TryParse(txtYear.Text, out int year))
                throw new Exception("A Publish_Year legyen szám!");

            // ISBN nálad int, szóval próbáljuk parse-olni:
            if (!int.TryParse(txtISBN.Text, out int isbn))
                throw new Exception("Az ISBN legyen szám!");

            return new Book
            {
                // Book_Id-t update-nél az endpoint id-jából kezeljük, itt nem muszáj beállítani
                Title = txtTitle.Text.Trim(),
                Genre = txtGenre.Text.Trim(),
                Language = txtLanguage.Text.Trim(),
                Publish_Year = year,
                ISBN = isbn,
                File_Url = txtFileUrl.Text.Trim(),
                Preview_Url = txtPreviewUrl.Text.Trim(),
                Cover_Url = txtCoverUrl.Text.Trim()
            };
        }
    }
}
