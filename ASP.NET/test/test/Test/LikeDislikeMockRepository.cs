using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using test.Data;
using test.Models.DTO;

namespace test.Test
{
    public class LikeDislikeMockRepository : BaseMockRepository, ILikeDislikeRepository
    {
        
        public LikeDislikeMockRepository(IWebHostEnvironment webHostEnvironment)
        {
            SetBasePath(webHostEnvironment);
        }

        public async Task<LikeDislikeDto> GetLikeDislike(string imbid)
        {
            string testFile= "likeDislike.json";
            var result = GetTestData<LikeDislikeDto>(testFile);
            await Task.Delay(0);
            return result;
        }
    }
}
