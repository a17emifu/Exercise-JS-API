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
        readonly string baseUrl;
        readonly string apiKey;
        Repository repository;

        public MovieRepository(Repository repository, IConfiguration configuration)
        {

            baseUrl = configuration.GetValue<string>("OMDbApi:BaseUrl");
            apiKey = configuration.GetValue<string>("OMDbApi:Key");
            this.repository = repository;

        }
        public Task<MovieDto> GetMovie(string imbid)
        {
            string endPoint = $"{baseUrl}?i={imbid}&apikey={apiKey}";
            var movie = repository.GetData<MovieDto>(endPoint);
            return movie;

        }

        public Task<List<MovieDto>> GetMovies(string imbid)
        {
            throw new NotImplementedException();
        }
    }
}
