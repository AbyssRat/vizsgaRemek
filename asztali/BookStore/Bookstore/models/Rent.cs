using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bookstore.Models
{
    public class Rent
    {
        public int User_Book_Id { get; set; }
        public int User_Id { get; set; }
        public int Book_Id { get; set; }
        public string Start_Date { get; set; }
        public int Rental_Days { get; set; }
        public string End_Date { get; set; }

        public override string ToString()
        {
            return "Felhasználó ID: " + User_Id + " | Könyv ID: " + Book_Id + " | Kezdés: " + Start_Date;
        }
    }
}
