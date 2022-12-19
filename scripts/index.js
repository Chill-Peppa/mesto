      /*---------Импорт---------*/

import { initialCards } from './array.js';
import Card from './Card.js';
import validationConf from './config.js';
//import { enableValidation } from './validate.js';
import FormValidator from './FormValidator.js'

      /*---------Объявление переменных и поиск элементов---------*/

//переменные для кнопок
const buttonEditProfile = document.querySelector('.profile-info__edit-button');
const buttonAddElem = document.querySelector('.profile__add-button');

//переменные для pop-up
const popupEdit = document.querySelector('.popup_type_edit-button');
const popupAdd = document.querySelector('.popup_type_add-photo');
const popups = Array.from(document.querySelectorAll('.popup'));
const popupPhoto = document.querySelector('.popup_type_open-photo');
const photoElemOpen = document.querySelector('.popup__open-photo');
const titleElemOpen = document.querySelector('.popup__open-caption');

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
initialCards.forEach((item) => {
  const card = new Card(item, openPopup);
  const cardElement = card.generateCard();// Создаём карточку и возвращаем наружу
  
  elementContainer.prepend(cardElement);// Добавляем в DOM
});

//С этого момента начинается код с карточками
/*const handleSubmitAddForm = (evt) => { //функция-обработчик формы add
  evt.preventDefault();

  renderCard({ name: titleInput.value,
               link: linkInput.value });

  formPopupAdd.reset();

  const submitterBtn = evt.submitter;
  submitterBtn.classList.add(validationConf.inactiveButtonClass);
  submitterBtn.setAttribute('disabled', 'true');

  closePopup(popupAdd);
};

formPopupAdd.addEventListener('submit', handleSubmitAddForm); //Прикрепляем обработчик к форме 'add'

//функции события удаления карточки и тоггла лайка
const handleRemoveCard = (evt) => {
  evt.target.closest('.element').remove();
};
const handleLikeCard = (evt) => {
  evt.target.classList.toggle('element-container__like-btn_active');
};

//функция генерации карточки
const elementTemplate = document.querySelector('#element-template').content;

const createCard = (element) => {
  const cardElement = elementTemplate.cloneNode(true);

  const cardName = cardElement.querySelector('.element-container__name');
  cardName.textContent = element.name;
  const cardLink = cardElement.querySelector('.element__mask');
  cardLink.src = element.link;
  cardLink.alt = element.name;

  const removeCardButton = cardElement.querySelector('.element__delete-btn'); //выбираем кнопку удаления
  removeCardButton.addEventListener('click', handleRemoveCard);
  const likeButtonElem = cardElement.querySelector('.element-container__like-btn'); //выбираем кнопку лайка
  likeButtonElem.addEventListener('click', handleLikeCard);

  cardLink.addEventListener('click', () => {
    openPopup(popupPhoto);

  photoElemOpen.src = element.link;
  photoElemOpen.alt = element.name;

  titleElemOpen.textContent = cardName.textContent;
  });

  return(cardElement);
}

//функция добавление карточки в начало массива
function renderCard (element) {
  elementContainer.prepend(createCard(element));
};

//рендер всех карточек
initialCards.forEach(function(element) {
  renderCard(element);
});*/

//тут вызов enableValidation
//enableValidation(validationConf);
//тут экземпляры классов для каждой формы
const validationFormPopupEdit = new FormValidator(validationConf, '.popup_type_edit-photo'); //нужно еще написать второй экземпляр
validationFormPopupEdit.enableValidation();

const validationFormPopupAdd = new FormValidator(validationConf, '.popup_type_add-photo'); //нужно еще написать второй экземпляр
validationFormPopupAdd.enableValidation();