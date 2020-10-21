using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using test.Models.DTO;

namespace test.Data
{
    public interface IMovieRepository
    {
       Task<MovieDto> GetMovie(string imbid);
       Task<List<MovieDto>> GetMovies(string imbid);
    }
}
