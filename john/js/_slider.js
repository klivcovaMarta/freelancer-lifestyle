/*<СЛАЙДЕР>****************************************************************************/
// Инициализация слайдера Swiper
const swiperLots = new Swiper('.slider-lots', {
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
	// centerSlides: true,
	// centerSlidesBounds: true,
	
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
		  slidesPerView: 1    
		},
		// when window width is >= 480px
		550: {
			slidesPerView: 2,
			spaceBetween: 20    
		},
		// when window width is >= 640px
		768: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		// when window width is >= 640px
		975: {
		  slidesPerView: 3,
		  spaceBetween: 100
		}
	  },
	});