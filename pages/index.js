//Поиск элементов
let editButtonElem = document.querySelector('.profile-info__edit-button');
let popupElem = document.querySelector('.popup');
let popupCloseElem = popupElem.querySelector('.popup__close');
let formInput = popupElem.querySelectorAll('.form__item');
let nameValue = document.querySelector('.profile-info__name');
let jobValue = document.querySelector('.profile-info__description');
let formElement = popupElem.querySelector('.form');
let nameInput = formElement.querySelector('.form__item_name');
let jobInput = formElement.querySelector('.form__item_job');

//Открытие и закрытие pop-up + заполнение полей формы

function onClose(popup) {
    popup.classList.remove('popup__opened'); //функция закрытия pop-up
};

editButtonElem.addEventListener('click', function() {
    popupElem.classList.add('popup__opened');
    formInput[0].value = nameValue.textContent;
    formInput[1].value = jobValue.textContent;
});

popupCloseElem.addEventListener('click', function() {
    onClose(popupElem);
});

popupElem.addEventListener('click', function(event) {   //при клике по бэкграунду pop-up закроется
    if(event.target === event.currentTarget) {
        onClose(popupElem);
    } 
});

//Редактирование имени и информации о себе

function formSubmitHandler (form) { // Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
    form.preventDefault();

    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;

    onClose(popupElem);
}

// Прикрепляем обработчик к форме. Он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 