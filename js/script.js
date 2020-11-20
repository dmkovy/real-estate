'use strict';

const locationBtns = document.querySelectorAll('.location__btn'),
	showMoreBtn = document.querySelector('.widget__show-more'),
	widgetHidden = document.querySelectorAll('.widget__hidden'),
	valueHidden = document.querySelector('[name = "value-05"]');


locationBtns.forEach(btn => {
	btn.addEventListener('click', (event) => {
		event.preventDefault();
		btn.classList.toggle('location__btn');
		btn.classList.toggle('location__btn--active');
	});
});

showMoreBtn.addEventListener('click', (event) => {
	event.preventDefault();
	widgetHidden.forEach(i => {
		i.classList.toggle('widget__hidden');
		if (widgetHidden[0].classList.contains('widget__hidden')) {
			showMoreBtn.innerHTML = `Показать еще`;
		} else {
			showMoreBtn.innerHTML = `Скрыть`;
		}
	});
});
