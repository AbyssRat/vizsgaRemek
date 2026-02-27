using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Bookstore.Service
{


    public class APIService<T> where T : class
    {
        private readonly string _baseUrl;
        // .NET Frameworkben a HttpClient-et érdemes statikusnak vagy singletonnak hagyni
        private static readonly HttpClient _client = new HttpClient();

        public APIService(string baseUrl)
        {
            _baseUrl = baseUrl.EndsWith("/") ? baseUrl : baseUrl + "/";
        }

        // GET: Összes lekérése
        public async Task<List<T>> GetAllAsync(string endpoint)
        {
            var response = await _client.GetAsync(_baseUrl + endpoint);
            if (response.IsSuccessStatusCode)
            {
                var json = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<List<T>>(json);
            }
            return new List<T>();
        }

        // POST: Létrehozás
        public async Task<bool> CreateAsync(string endpoint, T item)
        {
            var json = JsonConvert.SerializeObject(item);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            var response = await _client.PostAsync(_baseUrl + endpoint, content);
            return response.IsSuccessStatusCode;
        }

        // PUT: Frissítés
        public async Task<bool> UpdateAsync(string endpoint, int id, T item)
        {
            var json = JsonConvert.SerializeObject(item);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            var response = await _client.PutAsync($"{_baseUrl}{endpoint}/{id}", content);
            return response.IsSuccessStatusCode;
        }

        // DELETE: Törlés
        public async Task<bool> DeleteAsync(string endpoint, int id)
        {
            var response = await _client.DeleteAsync($"{_baseUrl}{endpoint}/{id}");
            return response.IsSuccessStatusCode;
        }
    }

}

