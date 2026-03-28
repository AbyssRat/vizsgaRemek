using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bookstore.Models
{
    internal class Book
    {
        //book_id	title	genre	language	publish_year	ISBN	file_url	preview_url	cover_url	

        public int Book_Id { get; set; }
        public string Title { get; set; }

        public string Genre { get; set; }
        public string Language { get; set; }

        public int Publish_Year { get; set; }
        public int ISBN { get; set; }
        public string File_Url { get; set; }
        public string Preview_Url { get; set; }
        public string Cover_Url{ get; set; }


    }
}
