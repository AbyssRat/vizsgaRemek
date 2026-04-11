using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using BookStore.Models;
using BookStore.Repository;
using BookStore.Services;

namespace BookStore
{
    public partial class Form_Authors : Form
    {
        AuthorRepository _db = new AuthorRepository();
        BindingList<Author> _authors = new BindingList<Author>();
        public Form_Authors()
        {
            InitializeComponent();
        }

        private void Form_Authors_Load(object sender, EventArgs e)
        {

            _szerzokBetoltese();
            listBox_authors.DataSource = _authors;
            listBox_authors.DisplayMember = "Name";
            listBox_authors.ValueMember = "AuthorId";
        }

        private void _szerzokBetoltese()
        {
            _authors.Clear();
            foreach (var author in _db.GetAll())
            {
                _authors.Add(author);
            }

        }

        private void listBox_authors_SelectedIndexChanged(object sender, EventArgs e)
        {
            Author? selected = listBox_authors.SelectedItem as Author;
            if (selected != null)
            {
                textBox_author_name.Text = selected.Name;
                textBox_bio.Text = selected.Bio;
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Author ujAdat = new Author();
            ujAdat.Name = textBox_author_name.Text;
            ujAdat.Bio = textBox_bio.Text;
            _db.Update(ujAdat);
        }
    }
}
