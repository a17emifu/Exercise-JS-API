using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace test.Models.DTO
{
    public class LikeDislikeDto
    {
        public string imdbID { get; set; }
        public string numberOfLikes { get; set; }
        public string numberOfDislikes { get; set; }
    }
}
