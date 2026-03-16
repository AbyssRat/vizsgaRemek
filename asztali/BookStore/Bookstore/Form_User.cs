using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using Bookstore.Service;
using UserModel = Bookstore.Models.User;

namespace Bookstore
{
    public partial class Form_User : Form
    {
        private readonly APIService<UserModel> _service;
        public Form_User()
        {
            InitializeComponent();
            _service = new APIService<UserModel>("https://localhost:5001/api/");
        }

        private void pictureBox_exit_Click(object sender, EventArgs e)
        {
            Form_User.ActiveForm.Close();
        }

        private async void Form_User_Load(object sender, EventArgs e)
        {
            await LoadUsersAsync();
        }
        private async Task LoadUsersAsync()
        {
            try
            {
                var users = await _service.GetAllAsync("users");

                listBoxUsers.DataSource = null;
                listBoxUsers.DataSource = users;
                listBoxUsers.DisplayMember = "Username";
                listBoxUsers.ValueMember = "User_Id";
            }
            catch (Exception ex)
            {
                MessageBox.Show("Hiba a felhasználók betöltésekor: " + ex.Message);
            }
        }

        private void listBoxUsers_SelectedIndexChanged(object sender, EventArgs e)
        {

            UserModel selected = listBoxUsers.SelectedItem as UserModel;

            if (selected == null)
                return;

            txtUsername.Text = selected.Username;
            txtEmail.Text = selected.Email;
            txtPasswordHash.Text = selected.Password_Hash;
            txtGoogleId.Text = selected.Google_Id;
            checkBoxIsAdmin.Checked = selected.Is_Admin;
            txtCreatedAt.Text = selected.Created_At;

        }
        private UserModel ReadUserFromForm()
        {
            UserModel user = new UserModel();

            user.Username = txtUsername.Text;
            user.Email = txtEmail.Text;
            user.Password_Hash = txtPasswordHash.Text;
            user.Google_Id = txtGoogleId.Text;
            user.Is_Admin = checkBoxIsAdmin.Checked;
            user.Created_At = txtCreatedAt.Text;

            return user;
        }

        private async void btnAdd_Click(object sender, EventArgs e)
        {
            try
            {
                UserModel user = ReadUserFromForm();

                bool ok = await _service.CreateAsync("users", user);

                if (!ok)
                {
                    MessageBox.Show("Sikertelen mentés!");
                    return;
                }

                await LoadUsersAsync();
                MessageBox.Show("Felhasználó hozzáadva!");
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
                UserModel selected = listBoxUsers.SelectedItem as UserModel;

                if (selected == null)
                {
                    MessageBox.Show("Válassz ki egy felhasználót a módosításhoz!");
                    return;
                }

                UserModel updated = ReadUserFromForm();

                bool ok = await _service.UpdateAsync("users", selected.User_Id, updated);

                if (!ok)
                {
                    MessageBox.Show("Sikertelen módosítás!");
                    return;
                }

                await LoadUsersAsync();
                MessageBox.Show("Felhasználó módosítva!");
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
                UserModel selected = listBoxUsers.SelectedItem as UserModel;

                if (selected == null)
                {
                    MessageBox.Show("Válassz ki egy felhasználót a törléshez!");
                    return;
                }

                DialogResult confirm = MessageBox.Show(
                    "Biztosan törlöd ezt a felhasználót?\n\n" + selected.Username,
                    "Megerősítés",
                    MessageBoxButtons.YesNo,
                    MessageBoxIcon.Warning);

                if (confirm != DialogResult.Yes)
                    return;

                bool ok = await _service.DeleteAsync("users", selected.User_Id);

                if (!ok)
                {
                    MessageBox.Show("Sikertelen törlés!");
                    return;
                }

                await LoadUsersAsync();
                MessageBox.Show("Felhasználó törölve!");
            }
            catch (Exception ex)
            {
                MessageBox.Show("Hiba törlés közben: " + ex.Message);
            }
        }
    }
}
