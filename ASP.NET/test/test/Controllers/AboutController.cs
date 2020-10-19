using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace test.Controllers
{
    public class AboutController : Controller
    {
        [Route("/about")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
