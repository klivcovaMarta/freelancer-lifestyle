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

/*<ВЫПАДАЮЩЕЕ МЕНЮ>****************************************************************************/
// Показываем  меню dropdown при клике на значок user на чистом JS
// let user_icon = document.querySelector('.user-header__icon');  
// let user_menu = document.querySelector('.user-header__menu');
// user_icon.addEventListener("click", function (e) {	
// 	user_menu.classList.toggle('_active');
// });
// // И закрываем меню dropdown при клике на любом месте страницы
// document.documentElement.addEventListener("click", function (e) {
// 	if (!e.target.closest('.user-header')) {		
// 		let user_menu = document.querySelector('.user-header__menu');
// 		user_menu.classList.remove('_active');
// 	}
// });
