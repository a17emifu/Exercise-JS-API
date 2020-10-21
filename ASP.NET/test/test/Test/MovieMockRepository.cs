using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using test.Data;
using test.Models.DTO;

namespace test.Test
{
    public class MovieMockRepository : IMovieRepository
    {
        
        MockRepository generikMockRepository;
        public MovieMockRepository(MockRepository generikMockRepository )
        {
            this.generikMockRepository = generikMockRepository;

        }
        public Task<MovieDto> GetMovie(string imbid) {
            return null;
        }

        public async Task<List<MovieDto>> GetMovies(string imbid)
        {
            string testFile = "movies.json";
            var result = generikMockRepository.GetTestData<List<MovieDto>>(testFile);
            await Task.Delay(0);
            return result;
        }
    }
}
