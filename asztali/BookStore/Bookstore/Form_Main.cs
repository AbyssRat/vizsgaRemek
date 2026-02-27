using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Bookstore
{
    public partial class Form_Main : Form
    {
        public Form_Main()
        {
            InitializeComponent();
        }

        private void pictureBox_user_Click(object sender, EventArgs e)
        {
            Form_User form_User = new Form_User();
            form_User.ShowDialog();
        }

        private void pictureBox_book_Click(object sender, EventArgs e)
        {
            Form_Book form_Book = new Form_Book();
            form_Book.ShowDialog();
        }

        private void pictureBox_rent_Click(object sender, EventArgs e)
        {
            Form_Rent form_Rent = new Form_Rent();
            this.Hide();
            form_Rent.ShowDialog();
            this.Show();
        }

        private void pictureBox_exit_Click(object sender, EventArgs e)
        {
            while (MessageBox.Show("Are you sure you want to exit?", "Exit", MessageBoxButtons.YesNo, MessageBoxIcon.Question) == DialogResult.No)
            {
                return;
            }
            Application.Exit();
        }
    }
}
