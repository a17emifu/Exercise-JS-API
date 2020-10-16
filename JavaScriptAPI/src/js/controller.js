const searchButton = document.querySelector('#search-button')
const carouselButton = document.querySelector('#carousel-button')
const movieButton = document.querySelector('#movie-button')

export default class Controller{
    constructor(model, view) {
        this.model = model
        this.view = view
        console.log('controller created')
        //searchButton.addEventListener('click', () => {this.search() })
        //carouselButton.addEventListener('click', () => {this.viewCarousel() })
        //movieButton.addEventListener('click', () => {this.viewMovies() })
        movieButton.addEventListener('click', () => {this.viewMoviesMock() })


    }

    async search(){
        console.log('user clicked searchBtn')

        const username = 'a17emifu'
        console.time('fetch github')

        try{
            const getUser = this.model.getGithubUser(username)
            const getRepos = this.model.getGithubRepos(username)

            const promises = [getUser, getRepos]
            const [user, repos] = await Promise.all(promises)
            console.timeEnd('fetch github')

            this.view.addGithubUser(user)
            this.view.addGithubRepos(repos)
            //debugger
        }catch (error){
            if(error.status === 404){this.view.showNotFoundError()}
            if(error.status > 500){this.view.showGithubDownError()}
        }
    }

    async viewCarousel(){
        console.log('carousel loading..')

        const username = 'a17emifu'
        console.time('fetch github')

        try{
            const getUser = this.model.getGithubUser(username)
            const getRepos = this.model.getGithubRepos(username)

            const promises = [getUser, getRepos]
            const [user, repos] = await Promise.all(promises)
            console.timeEnd('fetch github')

            //this.view.addGithubUser(user)
            this.view.addGithubReposAsCarousel(repos)
            this.view.makeSwiper();
            //debugger
        }catch (error){
            if(error.status === 404){this.view.showNotFoundError()}
            if(error.status > 500){this.view.showGithubDownError()}
        }
    }
    
    async viewMovies(){
        console.log('movies loading..')

        const username = '31b458bf'
        const title =[
            "Hamilton",
            "1917",
            "Klaus",
            "Joker",
            "Ford v Ferrari",
            "Parasite",
            "Portrait of a Lady on Fire",
            "Avengers: Endgame",
            "Spider-Man: Into the Spider-Verse",
            "Andhadhun"
        ]
        console.time('fetch movies')
        const promises = []
        try{
            for (var i=0; i<title.length; i++){
                const getMovie = this.model.getMoviesbyTitle(username, title[i])
                debugger
                promises.push(getMovie)
            }
           // const getRepos = this.model.getGithubRepos(username)

            
            const movies = await Promise.all(promises)
            console.timeEnd('fetch movies')

            //this.view.addGithubUser(user)
            //this.view.addGithubReposAsCarousel(repos)
            this.view. addMoviesAsCarousel(movies)
            this.view.makeSwiper()
            //debugger
        }catch (error){
            if(error.status === 404){this.view.showNotFoundError()}
            if(error.status > 500){this.view.showGithubDownError()}
        }
    }

    async viewMoviesMock(){
        console.log('mock movies loading..')
        const username = '31b458bf'
        try{
            const movies = await this.model.getMoviesbyTitle(username)
            console.timeEnd('fetch movies')

            this.view. addMoviesAsCarousel(movies)
            this.view.makeSwiper()
            
        }catch (error){
            if(error.status === 404){this.view.showNotFoundError()}
            if(error.status > 500){this.view.showGithubDownError()}
        }
    }
}