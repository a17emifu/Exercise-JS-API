using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using test.Models.DTO;

namespace test.Data
{
    public class LikeDislikeRepository : BaseRepository, ILikeDislikeRepository
    {
        

        public LikeDislikeRepository(IConfiguration configuration)
        {
            baseUrl = configuration.GetValue<string>("CMDbApi:BaseUrl");

        }
        public Task<LikeDislikeDto> GetLikeDislike(string param)
        {
            string endPoint = $"{baseUrl}{param}";
            var likeDislike = GetData<LikeDislikeDto>(endPoint);
            return likeDislike;
        }
    }
}
