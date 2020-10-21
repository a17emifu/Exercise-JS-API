
export default class Controller{
    constructor(model, view) {
        this.model = model
        this.view = view
        console.log('controller created')
        this.viewMoviesMock()
        this.viewLikeDislikeMock()
    }
    
    //TO DO: Lägg metoder
    async viewMoviesMock(){
        console.log('mock movies loading..')
        const username = '31b458bf'
        try{
            const movies = await this.model.getMoviesbyTitle(username)

            this.view.viewToppMovie(movies)
            this.view.viewMoviesMock(movies)
            this.view.viewMoviesMock2(movies)
            
        }catch (error){
            if(error.status === 404){this.view.showNotFoundError()}
            if(error.status > 500){this.view.showGithubDownError()}
        }
    }

    async viewLikeDislikeMock(){
        const imdbID = "tt8503618"
        const likeDislike = await this.model.getLikeDislike(imdbID)
        
        //console.timeEnd('fetch movies')
        this.view.viewLikeDislike(likeDislike)
    }
}