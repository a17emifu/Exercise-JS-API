const main = document.querySelector('main')

export default class View {
    constructor(){
        console.log('view created')
    }

    addGithubUser(user){
        //main.textContent = JSON.stringify(user) + JSON.stringify(repos)
        //main.textContent = user.repos_url



        let userInfo = document.querySelector('#userInfo')
        //userInfo.innerHTML = user.login

        let divparent = document.createElement("div")
        divparent.classList.add("result-parent")

        var divChild = document.createElement("div")
        divChild.classList.add("result-child")

        let userLogin = document.createElement('span')
        userLogin.innerHTML = user.login
        userLogin.classList.add("child-item")


        let avatar = document.createElement('img')
        avatar.src = user.avatar_url 
        avatar.classList.add("child-item")


        let publicrepos = document.createElement('span')
        publicrepos.innerHTML = `public repos: ${user.public_repos}`
        publicrepos.classList.add("child-item")



       // divChild.appendChild(userLogin)
        divChild.appendChild(userLogin)
        divChild.appendChild(avatar)
        divChild.appendChild(publicrepos)
        
        divparent.appendChild(divChild)
        userInfo.appendChild(divparent)
        //debugger
    }

    addGithubRepos(repos){
        let reposInfo = document.querySelector('#reposInfo')
        let divparent = document.createElement("div")
        divparent.classList.add("result-parent")
        //debugger

        for(var i=0; i<repos.length; i++){
            var divChild = document.createElement("div")
            divChild.classList.add("result-child")

            let reponame = document.createElement("span")
            reponame.innerHTML = repos[i].name

            let url = document.createElement('span')
            url.innerHTML = "<a href=" + repos[i].html_url  +">" + " Link<br>"  + "<br>"

            divChild.appendChild(reponame)
            divChild.appendChild(url)

            divparent.appendChild(divChild)
        }
        reposInfo.appendChild(divparent)
    }
    showNotFoundError(){
        main.textContent = "404 NOT FOUND"
    }

    showGithubDownError(){
        main.textContent = "Githubs server is down"
    }

}