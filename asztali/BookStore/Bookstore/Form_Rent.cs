using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using BookStore.Mappers;
using BookStore.Models;
using BookStore.Services;
using BookStore.Repository;

namespace BookStore
{
    public partial class Form_Rent : Form
    {
        private readonly RentalsRepository _rentalsRepository = new RentalsRepository();
        BindingList<UserBookRental> _rentals = new BindingList<UserBookRental>();
        public Form_Rent()
        {
            InitializeComponent();
        }

        private void Form_Rent_Load(object sender, EventArgs e)
        {
                        var rentals = _rentalsRepository.GetUserRentals();
                                    _rentals = new BindingList<UserBookRental>(rentals);
                                                dataGridView_Kolcsonzesek.DataSource = _rentals;
        }
    }
}
