/*<СЛАЙДЕР>****************************************************************************/
// Инициализация слайдера Swiper
const swiperOne = new Swiper('.main-slider', {
	// Optional parameters
	direction: 'horizontal',

	// Повторяться до бесконечности
	loop: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.control-main-slider__arrow_next',
	  prevEl: '.control-main-slider__arrow_prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
	// Set to true to enable Mutation Observer on Swiper and its elements. 
	// In this case Swiper will be updated(reinitialized) each time if you change its style(like hide/ show) or modify its child elements (like adding / removing slides)
	observer: true,
	//Set to true if you also need to watch Mutations for Swiper parent elements
	observeParents: true,
	// Кол-во слайдов, которые нужно показывать
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800


});


const swiperTwo = new Swiper('.slider-lots', {
// Optional parameters
direction: 'horizontal',

// Повторяться до бесконечности
 loop: true,

// If we need pagination
pagination: {
	el: '.swiper-pagination',
},

// Navigation arrows
navigation: {
	nextEl: '.control-slider-lots__arrow_next',
	prevEl: '.control-slider-lots__arrow_prev',
},

// And if we need scrollbar
scrollbar: {
	el: '.swiper-scrollbar',
},
// Set to true to enable Mutation Observer on Swiper and its elements. 
// In this case Swiper will be updated(reinitialized) each time if you change its style(like hide/ show) or modify its child elements (like adding / removing slides)
observer: true,
//Set to true if you also need to watch Mutations for Swiper parent elements
observeParents: true,
// Кол-во слайдов, которые нужно показывать
slidesPerView: 3,
// Расстояние между слайдами нужно задавать так, а не с помощью отступов. 
// Ширину каждого слайда задаем через ширину контейнера
spaceBetween: 100,
autoHeight: true,
speed: 800,
// centerSlides: true
// centerSlidesBounds: true
});


  
/*<ВЫПАДАЮЩЕЕ МЕНЮ>****************************************************************************/
// Показываем  меню dropdown при клике на значок user на чистом JS
let user_icon = document.querySelector('.user-header__icon');  
let user_menu = document.querySelector('.user-header__menu');
user_icon.addEventListener("click", function (e) {	
	user_menu.classList.toggle('_active');
});
// И закрываем меню dropdown при клике на любом месте страницы
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.user-header')) {		
		let user_menu = document.querySelector('.user-header__menu');
		user_menu.classList.remove('_active');
	}
});

/*<МЕНЮ-БУРГЕР>****************************************************************************/
// Класс _active для бургера на чистом JS
let burger = document.querySelector('.icon-menu');
let menuBody = document.querySelector(".menu__body");  
let globalBody = document.querySelector("body");  
	burger.addEventListener("click", function (e) {
		burger.classList.toggle('_active');
		menuBody.classList.toggle("_active");
		globalBody.classList.toggle("_lock");
	});
