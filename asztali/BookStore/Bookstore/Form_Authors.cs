using System;
using System.Threading.Tasks;
using System.Windows.Forms;
using Bookstore.Service;
using AuthorModel = Bookstore.Models.Authors;

namespace Bookstore
{
    public partial class Form_Authors : Form
    {
        private readonly APIService<AuthorModel> _service;
        public Form_Authors()
        {
            InitializeComponent();
            _service = new APIService<AuthorModel>("https://localhost:5001/api/");

        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            Form_User.ActiveForm.Close();
        }

        private async void Form_Authors_Load(object sender, EventArgs e)
        {
            await LoadAuthorsAsync();
        }
        private async Task LoadAuthorsAsync()
        {
            try
            {
                var authors = await _service.GetAllAsync("authors");

                listBoxauthors.DataSource = null;
                listBoxauthors.DataSource = authors;
                listBoxauthors.DisplayMember = "Name";
                listBoxauthors.ValueMember = "Author_Id";
            }
            catch (Exception ex)
            {
                MessageBox.Show("Hiba a szerzők betöltésekor: " + ex.Message);
            }

        }

        private void listBoxauthors_SelectedIndexChanged(object sender, EventArgs e)
        {
            AuthorModel selected = listBoxauthors.SelectedItem as AuthorModel;

            if (selected == null)
                return;

            txtAuthorID.Text = selected.Author_Id.ToString();
            txtName.Text = selected.Name;
            txtBio.Text = selected.Bio;
        }
        private AuthorModel ReadAuthorFromForm()
        {
            AuthorModel author = new AuthorModel();

            int authorId;
            int.TryParse(txtAuthorID.Text, out authorId);
            author.Author_Id = authorId;

            author.Name = txtName.Text;
            author.Bio = txtBio.Text;

            return author;
        }

        private async void btnAdd_Click(object sender, EventArgs e)
        {
            try
            {
                AuthorModel author = ReadAuthorFromForm();

                bool ok = await _service.CreateAsync("authors", author);

                if (!ok)
                {
                    MessageBox.Show("Sikertelen mentés!");
                    return;
                }

                await LoadAuthorsAsync();
                MessageBox.Show("Szerző hozzáadva!");
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
                AuthorModel selected = listBoxauthors.SelectedItem as AuthorModel;

                if (selected == null)
                {
                    MessageBox.Show("Válassz ki egy szerzőt a módosításhoz!");
                    return;
                }

                AuthorModel updated = ReadAuthorFromForm();

                bool ok = await _service.UpdateAsync("authors", selected.Author_Id, updated);

                if (!ok)
                {
                    MessageBox.Show("Sikertelen módosítás!");
                    return;
                }

                await LoadAuthorsAsync();
                MessageBox.Show("Szerző módosítva!");
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
                AuthorModel selected = listBoxauthors.SelectedItem as AuthorModel;

                if (selected == null)
                {
                    MessageBox.Show("Válassz ki egy szerzőt a törléshez!");
                    return;
                }

                DialogResult confirm = MessageBox.Show(
                    "Biztosan törlöd ezt a szerzőt?\n\n" + selected.Name,
                    "Megerősítés",
                    MessageBoxButtons.YesNo,
                    MessageBoxIcon.Warning);

                if (confirm != DialogResult.Yes)
                    return;

                bool ok = await _service.DeleteAsync("authors", selected.Author_Id);

                if (!ok)
                {
                    MessageBox.Show("Sikertelen törlés!");
                    return;
                }

                await LoadAuthorsAsync();
                MessageBox.Show("Szerző törölve!");
            }
            catch (Exception ex)
            {
                MessageBox.Show("Hiba törlés közben: " + ex.Message);
            }
        }
    }
}
