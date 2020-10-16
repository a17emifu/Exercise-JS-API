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

    addGithubrepos(repos){
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

    addGithubreposAsCarousel(repos) {
        let carousel = document.querySelector('#carousel')
        carousel.classList.add("swiper-container")

        let swiperWrapper = document.createElement('div')
        swiperWrapper.classList.add("swiper-wrapper")

        for (var i = 0; i<repos.length; i++){
            var swiperSlide = document.createElement('div')
            swiperSlide.classList.add("swiper-slide")
            swiperSlide.style.backgroundImage = "url(" + repos[i].owner.avatar_url + ")"

            let reponame = document.createElement("span")
            reponame.innerHTML = repos[i].name
            swiperSlide.appendChild(reponame)

            swiperWrapper.appendChild(swiperSlide)
        }


        let swiperPagination = document.createElement('div')
        swiperPagination.classList.add("swiper-pagination")

        let swiperBtnPrev = document.createElement('div')
        swiperBtnPrev.classList.add("swiper-button-prev")

        let swiperBtnNext = document.createElement('div')
        swiperBtnNext.classList.add("swiper-button-next")
        
        carousel.appendChild(swiperWrapper)
        carousel.appendChild(swiperPagination)
        carousel.appendChild(swiperBtnPrev)
        carousel.appendChild(swiperBtnNext)
    }

    addMoviesAsCarousel(movies) {
        let carousel = document.querySelector('#movie')
        carousel.classList.add("swiper-container")

        let swiperWrapper = document.createElement('div')
        swiperWrapper.classList.add("swiper-wrapper")
        
        var ranking =0
        
        for (var i = 0; i<movies.length; i++){
            ranking++
            var swiperSlide = document.createElement('div')
            swiperSlide.classList.add("swiper-slide")
            //swiperSlide.style.backgroundImage = "url(" + movies[i].Poster + ")"

            let img = document.createElement('img')
            img.src = movies[i].Poster
            swiperSlide.appendChild(img)

            let title = document.createElement('span')
            title.innerHTML = `${ranking}: ${movies[i].Title}` 
            swiperSlide.appendChild(title)

            swiperWrapper.appendChild(swiperSlide)
        }


        let swiperPagination = document.createElement('div')
        swiperPagination.classList.add("swiper-pagination")

        let swiperBtnPrev = document.createElement('div')
        swiperBtnPrev.classList.add("swiper-button-prev")

        let swiperBtnNext = document.createElement('div')
        swiperBtnNext.classList.add("swiper-button-next")
        
        carousel.appendChild(swiperWrapper)
        
        carousel.appendChild(swiperPagination)
        carousel.appendChild(swiperBtnPrev)
        carousel.appendChild(swiperBtnNext)
    }


    makeSwiper(){
        console.log('swiper made')
        var swiper = new Swiper('.swiper-container', {
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      
        });
    }

    showOverray(){
        let overray = document.querySelector('#overray')
        const overrayButton = document.querySelector('#overray-button')

        overray.classList.add("overlayall-sample")

        $(function() {
        $(overrayButton).click(function() {
                $(overray).fadeIn();　/*ふわっと表示*/
        });
        $(overray).click(function() {
                $(overray).fadeOut();　/*ふわっと消える*/
        });
        });

    }
    showNotFoundError(){
        main.textContent = "404 NOT FOUND"
    }

    showGithubDownError(){
        main.textContent = "Githubs server is down"
    }

}