//Поиск элементов
let editButtonElem = document.querySelector('.profile-info__edit-button');
let popupElem = document.querySelector('.popup');
let popupCloseElem = popupElem.querySelector('.popup__close');

let formInput = popupElem.querySelectorAll('.form__item');
let nameValue = document.querySelector('.profile-info__name');
let jobValue = document.querySelector('.profile-info__description');

let formElement = popupElem.querySelector('.form');
let nameInput = formElement.querySelector('.form__item_info_name');
let jobInput = formElement.querySelector('.form__item_info_job');

//Открытие и закрытие pop-up + заполнение полей формы
function onOpen() {
    popupElem.classList.add('popup_opened'); //функция открытия pop-up
    nameInput.value = nameValue.textContent;
    jobInput.value = jobValue.textContent;
};

function onClose() {
    popupElem.classList.remove('popup_opened'); //функция закрытия pop-up
};

//Слушатели на открытие и закрытие pop-up
editButtonElem.addEventListener('click', onOpen);
popupCloseElem.addEventListener('click', onClose);

//Редактирование имени и информации о себе
function formSubmitHandler (evt) { // Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
    evt.preventDefault();

    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;

    onClose();
}

// Прикрепляем обработчик к форме. Он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 