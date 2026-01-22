using System;
using System.Collections.Generic;
using System.Text;

namespace wpfAdmin.Models
{
    class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public bool IsAdmin { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
