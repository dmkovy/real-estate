'use strict';

const cardShowMoreBtn = document.querySelector('.btn-more'),
	cardLinkHidden = document.querySelectorAll('.card-link__hidden'),
	widgetTitles = document.querySelectorAll('.widget__title'),
	locationBtns = document.querySelectorAll('.location__btn'),
	widgetShowMoreBtn = document.querySelector('.widget__show-more'),
	widgetHidden = document.querySelectorAll('.widget__hidden');


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

widgetTitles.forEach(widget => {
	widget.addEventListener('click', () => {
		widget.classList.toggle('widget__title--active');
		widget.nextElementSibling.classList.toggle('widget__body--hidden');
	});
});


//* Фильтр в боковом меню "Близость к метро". При нажатии кнопки "Любая" остальные кнопки первого ряда становятся неактивными - и наоборот, при нажатии любой из кнопок первого ряда, когда активна кнопка "Любая" - с неё снимается активный класс (модификатор)

const oneBtns = document.querySelectorAll('.location__row--one');
const anyBtn = document.querySelector('.location__row--two');

function anyBtnClick() {
	if (anyBtn.classList.contains('location__btn--active')) {
		oneBtns.forEach(btn => {
			btn.classList.remove('location__btn--active');
		});
	}
}

locationBtns.forEach(btn => {
	btn.addEventListener('click', (event) => {
		event.preventDefault();
		btn.classList.toggle('location__btn--active');
		if (event.target.classList.contains('location__row--one')) {
			anyBtn.classList.remove('location__btn--active');
		} else {
			anyBtnClick();
		}
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