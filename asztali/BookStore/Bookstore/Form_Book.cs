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
    public partial class Form_Book : Form
    {
        public Form_Book()
        {
            InitializeComponent();
        }

        private void pictureBox_exit_Click(object sender, EventArgs e)
        {
            Form_Book.ActiveForm.Close();
        }
    }
}
