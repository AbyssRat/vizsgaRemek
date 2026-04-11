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

namespace BookStore
{
    public partial class Form_User : Form
    {
        private readonly UserRepository _userRepository = new UserRepository();
        BindingList<User> _users = new BindingList<User>();
        public Form_User()
        {
            InitializeComponent();
        }

        private void Form_User_Load(object sender, EventArgs e)
        {
            _felhasznalokBetoltese();
            listBox_users.DataSource = _users;
        }

        private void _felhasznalokBetoltese()
        {
            _users.Clear();
            var users = _userRepository.GetAll();
            foreach (var user in users)
            {
                _users.Add(user);
            }
        }

        private void listBox_users_SelectedIndexChanged(object sender, EventArgs e)
        {
            User? selectedUser = listBox_users.SelectedItem as User;
            if(selectedUser != null)
            {
                textBox_username.Text = selectedUser.Username;
                textBox_email.Text = selectedUser.Email;
                textBox_credits.Text = selectedUser.Credits.ToString();
                string[] cardNum= selectedUser.CardNumber?.Split(' ') ?? new string[0];
                if (cardNum.Length == 4)
                {
                    textBox_card1.Text = cardNum[0];
                    textBox_card2.Text = cardNum[1];
                    textBox_card3.Text = cardNum[2];
                    textBox_card4.Text = cardNum[3];
                }
                else
                {
                    textBox_card1.Text = "";
                    textBox_card2.Text = "";
                    textBox_card3.Text = "";
                    textBox_card4.Text = "";
                }
                textBox_credits.Text = selectedUser.Credits.ToString();
                textBox_city.Text = selectedUser.City ?? "";
                textBox_zip_code.Text = selectedUser.ZipCode ?? "";
                textBox_street_adress.Text = selectedUser.StreetAddress ?? "";
                textBox_first_name.Text = selectedUser.FirstName ?? "";
                textBox_last_name.Text = selectedUser.LastName ?? "";
            }
        }
    }
}
