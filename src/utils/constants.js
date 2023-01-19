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
export default initialCards;

//переменные для кнопок
export const buttonEditProfile = document.querySelector('.profile-info__edit-button');
export const buttonAddElem = document.querySelector('.profile__add-button');

//переменные pop-up для поиска в формах
const popupEdit = document.querySelector('.popup_type_edit-button');
const popupAdd = document.querySelector('.popup_type_add-photo');

//переменные для формы edit
export const formPopupEdit = popupEdit.querySelector('.form');
export const nameInput = formPopupEdit.querySelector('.form__item_info_name');
export const jobInput = formPopupEdit.querySelector('.form__item_info_job');

//переменные для формы add
export const formPopupAdd = popupAdd.querySelector('.form');

//переменные для карточек
export const elementContainer = document.querySelector('.elements');