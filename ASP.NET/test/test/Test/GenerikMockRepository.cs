using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace test.Test
{
    public class GenerikMockRepository
    {
        public string basePath { get; set; }

        public T GetTestData<T>(string testFile)
        {
            string path = $"{basePath}\\{testFile}";
            string data = File.ReadAllText(path);
            var result =  JsonConvert.DeserializeObject<T>(data);
            return result;
        }
    }
}
