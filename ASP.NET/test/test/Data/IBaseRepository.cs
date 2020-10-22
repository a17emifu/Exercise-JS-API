using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace test.Data
{
    interface IBaseRepository
    {
        public string baseUrl { get; set; }
        Task<T> GetData<T>(string endpoint);
        Task<List<T>> GetDatas<T>(string endpoint);
 

    }
}
