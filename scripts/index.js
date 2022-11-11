      /* Объявление переменных и поиск элементов */

//переменные для кнопок
const editButtonElem = document.querySelector('.profile-info__edit-button');
const addButtonElem = document.querySelector('.profile__add-button');

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
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('.form__item_info_name');
const jobInput = formElement.querySelector('.form__item_info_job');

//переменные для формы add
const formPopupAdd = popupAdd.querySelector('.form');
const titleInput = formPopupAdd.querySelector('.form__item_info_title');
const linkInput = formPopupAdd.querySelector('.form__item_info_link');

//переменные для карточек
const elementContainer = document.querySelector('.elements');

      /* Функции */

function onOpen(popup) {
    popup.classList.add('popup_opened');
};

function onClose(popup) {
    popup.classList.remove('popup_opened');
};

      /* Слушатели */

editButtonElem.addEventListener('click', () => { //на открытие pop-up edit
    onOpen(popupEdit);
    nameInput.value = nameValue.textContent;
    jobInput.value = jobValue.textContent;
});
popupCloseEdit.addEventListener('click', () => { //на закрытие pop-up edit
    onClose(popupEdit);
});

addButtonElem.addEventListener('click', () => { //на открытие pop-up add
    onOpen(popupAdd);
});
popupCloseAdd.addEventListener('click', () => { //на закрытие pop-up add
    onClose(popupAdd);
});

popupClosePhoto.addEventListener('click', () => { //на закрытие pop-up photo
  onClose(popupPhoto);
});

      /* Обработчики */

function handleSubmitEditForm (evt) { // Обработчик «отправки» формы pop-up edit
    evt.preventDefault();

    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;

    onClose(popupEdit);
};

const handleSubmitAddForm = (evt) => { //функция-обработчик формы add
  evt.preventDefault();
  renderCard({ name: titleInput.value,
               link: linkInput.value});
  titleInput.value = '';
  linkInput.value = '';
};

formElement.addEventListener('submit', handleSubmitEditForm); //Прикрепляем обработчик к форме 'edit'. Он будет следить за событием “submit” - «отправка»
formPopupAdd.addEventListener('submit', handleSubmitAddForm); //Прикрепляем обработчик к форме 'add'

//массив карточек
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

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
    onOpen(popupPhoto);
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