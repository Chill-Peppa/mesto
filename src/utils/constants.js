//переменные для кнопок
export const buttonEditProfile = document.querySelector('.profile-info__edit-button');
export const buttonAddElem = document.querySelector('.profile__add-button');
export const buttonEditAvatar = document.querySelector('.profile__avatar-button');

//переменные pop-up для поиска в формах
const popupEdit = document.querySelector('.popup_type_edit-button');
const popupAdd = document.querySelector('.popup_type_add-photo');

//переменные для формы edit
export const formPopupEdit = popupEdit.querySelector('.form');
export const nameInput = formPopupEdit.querySelector('.form__item_info_name');
export const jobInput = formPopupEdit.querySelector('.form__item_info_job');

//переменные для формы add
export const formPopupAdd = popupAdd.querySelector('.form');

//переменные для формы с аватаром
export const userAvatar = document.querySelector('.profile__avatar');

//переменные для карточек
export const elementContainer = document.querySelector('.elements');