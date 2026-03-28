using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bookstore.Models
{
    public class Authors
    {
        public int Author_Id { get; set; }
        public string Name { get; set; }
        public string Bio { get; set; }

        public override string ToString()
        {
            return Name;
        }
    }
}
