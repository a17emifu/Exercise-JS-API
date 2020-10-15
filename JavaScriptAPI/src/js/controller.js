const searchButton = document.querySelector('#search-button')

export default class Controller{
    constructor(model, view) {
        this.model = model
        this.view = view
        console.log('controller created')
        searchButton.addEventListener('click', () => {this.search() })
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
            //debugger
        }catch (error){
            if(error.status === 404){this.view.showNotFoundError()}
            if(error.status > 500){this.view.showGithubDownError()}
        }
    }
}