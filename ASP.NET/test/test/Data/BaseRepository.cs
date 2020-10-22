using Microsoft.AspNetCore.Server.HttpSys;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using test.Models.DTO;

namespace test.Data
{
    public class BaseRepository
    {
        public string baseUrl;

        public async Task<T> GetData<T>(string endpoint)
        {
            using (HttpClient client= new HttpClient())
            {
                
                string endPoint = endpoint;
                var response = await client.GetAsync(endpoint, HttpCompletionOption.ResponseHeadersRead);
                response.EnsureSuccessStatusCode();
                var data = await response.Content.ReadAsStringAsync();
                var result = JsonConvert.DeserializeObject<T>(data);
                return result;
            }
        }

        public async Task<List<T>> GetDatas<T>(string imbid)
        {
            throw new NotImplementedException();
        }
    }
}
