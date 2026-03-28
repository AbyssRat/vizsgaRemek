using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bookstore.Models
{
    public class User
    {
        public int User_Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password_Hash { get; set; }
        public string Google_Id { get; set; }
        public bool Is_Admin { get; set; }
        public string Created_At { get; set; }

        public override string ToString()
        {
            return Username + " - " + Email;
        }
    }
}
