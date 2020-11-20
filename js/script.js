'use strict';

const cardShowMoreBtn = document.querySelector('.btn-more'),
	cardLinkHidden = document.querySelectorAll('.card-link__hidden'),
	widgetTitles = document.querySelectorAll('.widget__title'),
	locationBtns = document.querySelectorAll('.location__btn'),
	widgetShowMoreBtn = document.querySelector('.widget__show-more'),
	widgetHidden = document.querySelectorAll('.widget__hidden');
// valueHidden = document.querySelector('[name = "value-05"]'),


//* При нажатии на кнопку "Показать еще" на странице появляются еще 3 карточки. Название кнопки изменяется на "Скрыть"

cardShowMoreBtn.addEventListener('click', (event) => {
	event.preventDefault();
	cardLinkHidden.forEach(i => {
		i.classList.toggle('card-link__hidden');
		if (cardLinkHidden[0].classList.contains('card-link__hidden')) {
			cardShowMoreBtn.innerHTML = `<img src="./img/icons/plus-circle.svg" alt="Button show more">
			Показать еще`;
		} else {
			cardShowMoreBtn.innerHTML = `Скрыть`;
		}
	});
});


//* Скрытие виджетов в боковом меню по нажатию на Тайтл или стрелку

widgetTitles


//* Фильтр в боковом меню "Близость к метро"

locationBtns.forEach(btn => {
	btn.addEventListener('click', (event) => {
		event.preventDefault();
		btn.classList.toggle('location__btn');
		btn.classList.toggle('location__btn--active');
	});
});


//* Фильтр в боковом меню "Дополнительные опции". При нажатии на кнопку "Показать еще" в этом боковом меню появляются еще 3 доп. опции. Название кнопки изменяется на "Скрыть"

widgetShowMoreBtn.addEventListener('click', (event) => {
	event.preventDefault();
	widgetHidden.forEach(i => {
		i.classList.toggle('widget__hidden');
		if (widgetHidden[0].classList.contains('widget__hidden')) {
			widgetShowMoreBtn.innerHTML = `Показать еще`;
		} else {
			widgetShowMoreBtn.innerHTML = `Скрыть`;
		}
	});
});