using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using test.Models.DTO;

namespace test.Models.ViewModels
{
    public class MovieViewModel
    {
        public List<MovieDto> Movies { get; set; }
        public LikeDislikeDto LikeDislikeDto { get; set; }


        public MovieViewModel(List<MovieDto> movies, LikeDislikeDto likeDislike)
        {
            Movies = movies;
            LikeDislikeDto = likeDislike;
        }
    }
}
