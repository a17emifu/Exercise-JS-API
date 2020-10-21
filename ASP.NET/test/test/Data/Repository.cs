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
    public class Repository
    {
        public string BaseUrl { get; set; }
        public string ApiKey{ get; set; }

        readonly IConfiguration Configuration;

        public Repository(IConfiguration configuration)
        {
            Configuration = configuration;
            
        }

        public void SetBaseUrl(string baseurl)
        {
            BaseUrl = Configuration.GetValue<string>(baseurl);
        }

        public void SetApiKey(string key)
        {
            ApiKey = Configuration.GetValue<string>(key);

        }

        public async Task<T> GetData<T>(string imbid)
        {
            using (HttpClient client= new HttpClient())
            {
                string imbId = imbid;
                string endpoint = $"{BaseUrl}?i={imbId}&apikey={ApiKey}";
                var response = await client.GetAsync(endpoint, HttpCompletionOption.ResponseHeadersRead);
                response.EnsureSuccessStatusCode();
                var data = await response.Content.ReadAsStringAsync();
                var result = JsonConvert.DeserializeObject<T>(data);
                return result;
            }
        }

        public Task<List<T>> GetDatas<T>(string imbid)
        {
            throw new NotImplementedException();
        }
    }
}
