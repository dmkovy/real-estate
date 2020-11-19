'use strict';

const locationBtns = document.querySelectorAll('.location__btn');
const showMoreBtn = document.querySelector('.widget__show-more');
const widgetHidden = document.querySelectorAll('.widget__hidden');


locationBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		btn.classList.toggle('location__btn');
		btn.classList.toggle('location__btn--active');
	});
});

showMoreBtn.addEventListener('click', () => {
	widgetHidden.forEach(i => {
		// i.classList.remove('widget__hidden');
		i.classList.toggle('widget__hidden');
	});
	// showMoreBtn.innerHTML = `Скрыть`;
});