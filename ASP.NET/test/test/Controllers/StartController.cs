using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using test.Data;
using test.Models.ViewModels;
using test.Test;

namespace test.Controllers
{
    public class StartController : Controller
    {
        IMovieRepository movieRepository;
        ILikeDislikeRepository likeDislikeRepository;
        public StartController(IMovieRepository movieRepository, ILikeDislikeRepository likeDislikeRepository)
        {
            this.movieRepository = movieRepository;
            this.likeDislikeRepository = likeDislikeRepository;
        }
        public async  Task<IActionResult> Index()
        {
            string imbId = "tt4729430";
            var movie = await movieRepository.GetMovie(imbId);
            return View(movie);
        }

        public async Task<IActionResult> Movie()
        {
            string imbId = "tt4729430";
            var top10movies = await movieRepository.GetMovies(imbId);
            var likeDislike = await likeDislikeRepository.GetLikeDislike(imbId);
            var model = new MovieViewModel(top10movies, likeDislike);
            return View(model);
        }
    }
}
