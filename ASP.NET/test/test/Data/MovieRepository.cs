using Microsoft.AspNetCore.Server.HttpSys;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using test.Models.DTO;
using test.Test;

namespace test.Data
{
    public class MovieRepository: IMovieRepository
    {
        /*   string baseUrl;
           string apiKey;
           public MovieRepository(IConfiguration configuration)
           {
               baseUrl = configuration.GetValue<string>("OMDbApi:BaseUrl");
               apiKey = configuration.GetValue<string>("OMDbApi:Key");
           }*/

        Repository repository;
        public MovieRepository(Repository repository)
        {
            string baseUrl = "OMDbApi:BaseUrl";
            string apiKey = "OMDbApi:Key";

            this.repository = repository;
            repository.SetBaseUrl(baseUrl);
            repository.SetApiKey(apiKey);
        }
        public Task<MovieDto> GetMovie(string imbid)
        {
            var movie = repository.GetData<MovieDto>(imbid);
            return movie;
            /*using (HttpClient client= new HttpClient())
            {
                string imbId = imbid;
                string endpoint = $"{baseUrl}?i={imbId}&apikey={apiKey}";
                var response = await client.GetAsync(endpoint, HttpCompletionOption.ResponseHeadersRead);
                response.EnsureSuccessStatusCode();
                var data = await response.Content.ReadAsStringAsync();
                var result = JsonConvert.DeserializeObject<MovieDto>(data);
                return result;
            }*/
        }

        public Task<List<MovieDto>> GetMovies(string imbid)
        {
            throw new NotImplementedException();
        }
    }
}
