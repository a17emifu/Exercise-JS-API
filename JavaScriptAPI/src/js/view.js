const main = document.querySelector('main')

export default class View {
    constructor(){
        console.log('view created')
    }

    addGithubUser(user){
        //main.textContent = JSON.stringify(user) + JSON.stringify(repos)
        //main.textContent = user.repos_url

       /* let result = document.querySelector('#result')
        let divparent = document.createElement("div")
        divparent.classList.add("result-parent")

        for(var i=0; i<user.length; i++){
            var divChild = document.createElement("div")
            divChild.classList.add("result-child")

            let username = dokument.createElement("span")
            username.innerHTML = user[i].login
        }*/

        let userInfo = document.querySelector('#userInfo')
        //userInfo.innerHTML = user.login

        let divparent = document.createElement("div")
        divparent.classList.add("result-parent")

        var divChild = document.createElement("div")
        divChild.classList.add("result-child")

        let userLogin = document.createElement('span')
        userLogin.innerHTML = user.login

        let avatar = document.createElement('img')
        avatar.src = user.avatar_url 


       // divChild.appendChild(userLogin)
        divChild.appendChild(userLogin)
        divChild.appendChild(avatar)
        
        divparent.appendChild(divChild)
        userInfo.appendChild(divparent)
        //debugger
    }

    showNotFoundError(){
        main.textContent = "404 NOT FOUND"
    }

    showGithubDownError(){
        main.textContent = "Githubs server is down"
    }

}