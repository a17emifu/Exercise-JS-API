export default class View {
    constructor(){
        console.log('view created')
    }

    // TO DO: Lägg metoder

    async viewLikeDislike(likeDislike){
        let like = document.querySelector('#top-film-like-dislike > div.like > span')
        like.innerHTML = `${likeDislike[0].numberOfLikes} likes`

        let dislike = document.querySelector('#top-film-like-dislike > div.dislike > span')
        dislike.innerHTML =  `${likeDislike[0].numberOfDislikes} dislikes`
    }

    async viewToppMovie(movies){
        console.log('top movie loading..')

        let category = document.querySelector('.category')
        category.innerHTML = movies[0].Genre

        let image = document.querySelector('#top-film-info').style
        image.backgroundImage = "url(" + movies[0].Poster + ")"
        

        let title = document.querySelector('#top-film-title')
        title.innerHTML = movies[0].Title

        let time = document.querySelector('#top-film-time')
        time.innerHTML = movies[0].Runtime
        
        let rate = document.querySelector('#top-film-rate')
        rate.innerHTML = movies[0].Rated

        let actors = document.querySelector('#top-film-actors')
        actors.innerHTML = `Skådespelare: ${movies[0].Actors}` 

        let directors = document.querySelector('#top-film-directors')
        directors.innerHTML = `Direktör: ${movies[0].Director}` 

    }


    async viewMoviesMock(movies){
        console.log('mock movies loading..')

        let movieIMG = document.querySelector('.film-img')
        let movieSpan = document.querySelector('.film-span')

        movieIMG.src = movies[1].Poster
        movieSpan.innerHTML = `2: ${movies[1].Title}` 

    }

    async viewMoviesMock2(movies){
        console.log('mock movies2 loading..')

        let movieIMG = document.querySelector('.film-img2')
        let movieSpan = document.querySelector('.film-span2')

        movieIMG.src = movies[2].Poster
        movieSpan.innerHTML = `2: ${movies[2].Title}` 

    }


}