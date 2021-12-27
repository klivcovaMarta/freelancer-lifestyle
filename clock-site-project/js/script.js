// Инициализация слайдера Swiper
// new Swiper('.main-slider__body');

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });






// Показываем  меню dropdown при клике на значок user на чистом JS
let user_icon = document.querySelector('.user-header__icon');  
user_icon.addEventListener("click", function (e) {
	let user_menu = document.querySelector('.user-header__menu');
	user_menu.classList.toggle('_active');
});
// И закрываем меню dropdown при клике на любом месте страницы
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.user-header')) {		
		let user_menu = document.querySelector('.user-header__menu');
		user_menu.classList.remove('_active');
	}
});


// Класс _active для бургера на чистом JS
let burger = document.querySelector('.icon-menu');
let menuBody = document.querySelector(".menu__body");  
let globalBody = document.querySelector("body");  
	burger.addEventListener("click", function (e) {
		burger.classList.toggle('_active');
		menuBody.classList.toggle("_active");
		globalBody.classList.toggle("_lock");
	});
