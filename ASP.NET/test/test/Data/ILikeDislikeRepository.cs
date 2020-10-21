using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using test.Models.DTO;

namespace test.Data
{
    public interface ILikeDislikeRepository
    {

        Task<LikeDislikeDto> GetLikeDislike(string imbid);
    }
}
