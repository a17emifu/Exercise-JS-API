using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using test.Models.DTO;

namespace test.Data
{
    public class LikeDislikeRepository : ILikeDislikeRepository
    {
        readonly string baseUrl;
        Repository repository;

        public LikeDislikeRepository(Repository repository, IConfiguration configuration)
        {
            baseUrl = configuration.GetValue<string>("CMDbApi:BaseUrl");
            this.repository = repository;
        }
        public Task<LikeDislikeDto> GetLikeDislike(string param)
        {
            string endPoint = $"{baseUrl}{param}";
            var likeDislike = repository.GetData<LikeDislikeDto>(endPoint);
            return likeDislike;
        }
    }
}
