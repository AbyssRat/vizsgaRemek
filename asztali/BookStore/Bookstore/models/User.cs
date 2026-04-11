using System;

namespace BookStore.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public int Credits { get; set; } = 10;
        public bool IsAdmin { get; set; }
        public DateTime CreatedAt { get; set; }

        // Profil adatok
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? City { get; set; }
        public string? ZipCode { get; set; }
        public string? StreetAddress { get; set; }

        // Fizetési adatok
        public string? CardNumber { get; set; }
        public DateTime? ExpiryDate { get; set; }
        public int? Cvv { get; set; }

        // Segédtulajdonság a teljes névhez
        public string FullName => $"{LastName} {FirstName}".Trim();
        public override string ToString()
        {
                return $"{Username} ({FirstName} {LastName})";
        }
    }
}