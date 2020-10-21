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
    public class MovieRepository: IMovieRepository
    {
        string baseUrl;
        string apiKey;
        public MovieRepository(IConfiguration configuration)
        {
            baseUrl = configuration.GetValue<string>("OMDbApi:BaseUrl");
            apiKey = configuration.GetValue<string>("OMDbApi:Key");
        }

        public async Task<MovieDto> GetMovie(string imbid)
        {
            using (HttpClient client= new HttpClient())
            {
                string imbId = imbid;
                string endpoint = $"{baseUrl}?i={imbId}&apikey={apiKey}";
                var response = await client.GetAsync(endpoint, HttpCompletionOption.ResponseHeadersRead);
                response.EnsureSuccessStatusCode();
                var data = await response.Content.ReadAsStringAsync();
                var result = JsonConvert.DeserializeObject<MovieDto>(data);
                return result;
            }
        }

        public Task<List<MovieDto>> GetMovies(string imbid)
        {
            throw new NotImplementedException();
        }
    }
}
