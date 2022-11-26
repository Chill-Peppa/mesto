      /* Объявление переменных и поиск элементов */
      
//массив для карточек
import { initialCards } from './array.js';

//переменные для кнопок
const buttonEditProfile = document.querySelector('.profile-info__edit-button');
const buttonAddElem = document.querySelector('.profile__add-button');

//переменные для pop-up
const popupEdit = document.querySelector('.popup_type_edit-button');
const popupAdd = document.querySelector('.popup_type_add-photo');
const popupPhoto = document.querySelector('.popup_type_open-photo');

const popupCloseEdit = popupEdit.querySelector('.popup__close');
const popupCloseAdd = popupAdd.querySelector('.popup__close');
const popupClosePhoto = popupPhoto.querySelector('.popup__close');

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

      /* Функции */

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

      /* Слушатели */

buttonEditProfile.addEventListener('click', () => { //на открытие pop-up edit
  openPopup(popupEdit);
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
});
popupCloseEdit.addEventListener('click', () => { //на закрытие pop-up edit
  closePopup(popupEdit);
});

buttonAddElem.addEventListener('click', () => { //на открытие pop-up add
  openPopup(popupAdd);
});
popupCloseAdd.addEventListener('click', () => { //на закрытие pop-up add
  closePopup(popupAdd);
});

popupClosePhoto.addEventListener('click', () => { //на закрытие pop-up photo
  closePopup(popupPhoto);
});

      /* Обработчики */

function handleSubmitEditForm (evt) { // Обработчик «отправки» формы pop-up edit
    evt.preventDefault();

    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;

    closePopup(popupEdit);
};

const handleSubmitAddForm = (evt) => { //функция-обработчик формы add
  evt.preventDefault();

  renderCard({ name: titleInput.value,
               link: linkInput.value });
  titleInput.value = '';
  linkInput.value = '';
  //что за рендер кард, поч так записан И! почему тут у нас нет функции клоуз попап? повторить*
};

formPopupEdit.addEventListener('submit', handleSubmitEditForm); //Прикрепляем обработчик к форме 'edit'. Он будет следить за событием “submit” - «отправка»
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
  const photoElemOpen = document.querySelector('.popup__open-photo');
  photoElemOpen.src = cardLink.src;
  photoElemOpen.alt = cardLink.alt;

  const titleElemOpen = document.querySelector('.popup__open-caption');
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
});




//отсюда начну писать код для форм

console.log(nameInput.id); //тут просто в консоль вывела проверить айди

//функция для добавления ошибки
const showInputError = (formElement, inputElement, errorMessage) => { //найдем ошибку через шаблонные строки в нужной форме в самой функции
  const formError = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add('form__item_type_line-error'); //добавили красную линию
  formError.textContent = errorMessage; //присвоили ошибку браузера через свойство .валидейшенМесседж
  formError.classList.add('form__item-error_active'); //тут добавили класс ошибки
}

//функция для удаления ошибки
const hideInputError = (formElement, inputElement) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove('form__item_type_line-error');
  formError.classList.remove('form__item-error_active');
  formError.textContent = '';
}

//функция для проверки на ошибку
const checkValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, nameInput.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

//функция для добавления слушателя ВСЕМ полям формы
const setEventListener = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__item')); //нашли все инпуты в форме и сделали из них массив

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkValidity(formElement, inputElement);
    });
  });
};

//функция добавления обработчика всем формам
const startValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));

  formList.forEach((formElement) => {
    setEventListener(formElement);
  });
};

startValidation();