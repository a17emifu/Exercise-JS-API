using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace test.Models.DTO
{
    public class MovieWithLikeDislikeDto
    {
        public MovieDto Movie { get; set; }
        public LikeDislikeDto LikeDislike { get; set; }

        public MovieWithLikeDislikeDto(MovieDto movie, LikeDislikeDto likeDislike)
        {
            Movie = movie;
            LikeDislike = likeDislike;

        }
    }
}
