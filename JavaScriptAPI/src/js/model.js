const baseUrl = 'https://api.github.com'

export default class Model {
    constructor(){
        console.log('model created')
    }

    async getGithubUser(username){
        const response = await fetch(`${baseUrl}/users/${username}`)
        const user = await response.json()
        return user
    }

    async getGithubRepos(username){
        const response = await fetch(`${baseUrl}/users/${username}/repos`)
        const repos = await response.json()
        return repos
    }
}