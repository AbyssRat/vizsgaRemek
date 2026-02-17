using BookStore.Gui.Forms;
using BookStore.Gui.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace BookStore.Gui
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            
        }
        private void LoadForm(Form form)
        {
            panelMain.Controls.Clear();
            form.TopLevel = false;
            form.FormBorderStyle = FormBorderStyle.None;
            form.Dock = DockStyle.Fill;
            panelMain.Controls.Add(form);
            form.Show();

        }

        private void Books_button_Click(object sender, EventArgs e)
        {

            LoadForm(new BooksForm());
        }

      

        private void User_button_Click(object sender, EventArgs e)
        {
            LoadForm(new UsersForm());
        }

        private void Logout_button_Click(object sender, EventArgs e)
        {
            TokenStorage.Token = null;
            this.Hide();
            new LoginForm().Show();
        }
    }
}
