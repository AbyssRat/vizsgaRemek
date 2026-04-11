namespace BookStore
{
    public partial class Form_Main : Form
    {
        public Form_Main()
        {
            InitializeComponent();
        }
        private void button_Rent_Click(object sender, EventArgs e)
        {
            Form_Rent form_Rent = new Form_Rent();
            this.Hide();
            form_Rent.ShowDialog();
            this.Show();
        }

        private void button_Users_Click(object sender, EventArgs e)
        {
            Form_User form_User = new Form_User();
            this.Hide();
            form_User.ShowDialog();
            this.Show();
        }

        private void button_Konyvek_Click(object sender, EventArgs e)
        {
            Form_Book form_Books = new Form_Book();
            this.Hide();
            form_Books.ShowDialog();
            this.Show();
        }

        private void button_Szerzok_Click(object sender, EventArgs e)
        {
            Form_Authors form_Authors = new Form_Authors();
            this.Hide();
            form_Authors.ShowDialog();
            this.Show();
        }

        private void button_exit_Click(object sender, EventArgs e)
        {
            if(MessageBox.Show("Biztosan ki szeretne lépni?", "Kijelentkezés", MessageBoxButtons.YesNo, MessageBoxIcon.Question) == DialogResult.Yes)
            {
                Application.Exit();
            }
        }
    }
}
