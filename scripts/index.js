      /*---------Импорт---------*/

import { initialCards } from './array.js';
import Card from './Card.js';
import validationConf from './config.js';
import FormValidator from './FormValidator.js'

      /*---------Объявление переменных и поиск элементов---------*/

//переменные для кнопок
const buttonEditProfile = document.querySelector('.profile-info__edit-button');
const buttonAddElem = document.querySelector('.profile__add-button');

//переменные для pop-up
const popupEdit = document.querySelector('.popup_type_edit-button');
const popupAdd = document.querySelector('.popup_type_add-photo');
const popups = Array.from(document.querySelectorAll('.popup'));

//переменные попапФото для конструктора класса
const popupPhoto = document.querySelector('.popup_type_open-photo');
const photoElemOpen = popupPhoto.querySelector('.popup__open-photo');
const titleElemOpen = popupPhoto.querySelector('.popup__open-caption');

//переменные для профиля
const nameValue = document.querySelector('.profile-info__name');
const jobValue = document.querySelector('.profile-info__description');

//переменные для формы edit
const formPopupEdit = popupEdit.querySelector('.form');
const nameInput = formPopupEdit.querySelector('.form__item_info_name');
const jobInput = formPopupEdit.querySelector('.form__item_info_job');

//переменные для формы add
const formPopupAdd = popupAdd.querySelector('.form');
const titleInput = formPopupAdd.querySelector('.form__item_info_title');
const linkInput = formPopupAdd.querySelector('.form__item_info_link');

//переменные для карточек
const elementContainer = document.querySelector('.elements');

      /*----------Функции----------*/

function openPopup(popup) {
        popup.classList.add('popup_opened');
        document.addEventListener('keydown', closeByEsc);
      };

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
};

function closeByEsc(evt) { //функция на закрытие pop-up по escape
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

      /*---------Слушатели---------*/

buttonEditProfile.addEventListener('click', () => { //на открытие pop-up edit
  openPopup(popupEdit);
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
});

buttonAddElem.addEventListener('click', () => { //на открытие pop-up add
  openPopup(popupAdd);
});

formPopupEdit.addEventListener('submit', handleSubmitEditForm); //Прикрепляем обработчик к форме 'edit'. Он будет следить за событием “submit” - «отправка»

popups.forEach(function(popupElem) { //перебор на закрытие всех попапов по оверлею и крестику
  popupElem.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
      closePopup(popupElem);
    };
  });
});

      /*---------Обработчики---------*/

function handleSubmitEditForm (evt) { // Функция-обработчик «отправки» формы pop-up edit
    evt.preventDefault();

    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;

    closePopup(popupEdit);
};

const handleSubmitAddForm = (evt) => { //функция-обработчик формы add
  evt.preventDefault();
  
  const card = new Card({ name: titleInput.value,
                          link: linkInput.value });
  const cardElement = card.generateCard();// Создаём карточку и возвращаем наружу
  
  elementContainer.prepend(cardElement);

  formPopupAdd.reset();

  const submitterBtn = evt.submitter;
  submitterBtn.classList.add(validationConf.inactiveButtonClass);
  submitterBtn.setAttribute('disabled', 'true');

  closePopup(popupAdd);
};

formPopupAdd.addEventListener('submit', handleSubmitAddForm); //Прикрепляем обработчик к форме 'add'

//перебор массива с карточками
//и создание экземпляров класса Card
initialCards.forEach((item) => {
  const card = new Card(item, popupPhoto, photoElemOpen, titleElemOpen, openPopup);
  const cardElement = card.generateCard();// Создаём карточку и возвращаем наружу
  
  elementContainer.prepend(cardElement);// Добавляем в DOM
});

//тут экземпляры классов для каждой формы
const validationFormPopupEdit = new FormValidator(validationConf, formPopupEdit); //нужно еще написать второй экземпляр
validationFormPopupEdit.enableValidation();

const validationFormPopupAdd = new FormValidator(validationConf, formPopupAdd); //нужно еще написать второй экземпляр
validationFormPopupAdd.enableValidation();

//Извините, пожалуйста, что так получилось с работой!
//Все было закоммичено на гитхаб, но почему-то 
//на гх пейджс пропала папка со скриптами всеми, 
//хотя она была на самом гитхабе