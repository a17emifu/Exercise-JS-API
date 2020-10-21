console.log('app.js')

/*import Model from './modelMock.js'
import View from './viewMock.js'
import Controller from './controllerMock.js'

const model = new Model()
const view = new View()
const controller = new Controller(model, view)*/

const swiper = makeSwiper()
function makeSwiper()
{
    console.log('swiper made')
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      speed: 1000,
      pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
    });
}