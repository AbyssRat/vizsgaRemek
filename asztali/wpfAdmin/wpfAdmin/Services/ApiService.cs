using System;
using System.Collections.Generic;
using System.Text;
using System.Net.Http;
using System.Net.Http.Json;
using wpfAdmin.Models;

namespace wpfAdmin.Services
{
    class ApiService
    {
        private readonly HttpClient _client;

        public ApiService()
        {
            _client = new HttpClient
            {
                BaseAddress = new Uri("http://localhost:5000/api/")
            };
        }

        public async Task<List<User>> GetUsersAsync()
            => await _client.GetFromJsonAsync<List<User>>("users");

        public async Task<List<Book>> GetBooksAsync()
            => await _client.GetFromJsonAsync<List<Book>>("books");
    }
}

