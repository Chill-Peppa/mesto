import "./index.css";

import { configApi } from '../utils/config.js';
import { validationConf } from '../utils/config.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

import { 
  buttonEditProfile,
  buttonAddElem,
  formPopupEdit,
  nameInput,
  jobInput,
  formPopupAdd,
  elementContainer,
  buttonEditAvatar,
  userAvatar
} from '../utils/constants.js';


      /*----------ФУНКЦИИ----------*/

//создание экземпляра карточки
const createCard = (cardItem) => {
  const card = new Card({ 
    data: cardItem, 
    templateSelector: '#element-template', 
    handleCardClick: () => {
      imagePopup.open(cardItem);
    }
  });

  return card.generateCard();
}

      /*---------СЛУШАТЕЛИ НА КНОПКАХ---------*/

buttonEditProfile.addEventListener('click', () => {
  popupWithEditForm.open();

  const profileInfo = userData.getUserInfo();
  nameInput.value = profileInfo.firstname;
  jobInput.value = profileInfo.career;
});

buttonAddElem.addEventListener('click', () => {
  resetValidationFormAdd.resetValidaition();
  popupWithAddForm.open();
});

buttonEditAvatar.addEventListener('click', () => {
  popupWithAvatarForm.open();
})

      /*---------ЭКЗЕМПЛЯРЫ КЛАССОВ---------*/

//получаем карточки с сервера (тут перебор)
const api = new Api(configApi);
api.getAllCards().then((card) => {
  const cardList = new Section ({ renderer: (cardItem) => {
    cardList.addItem(createCard(cardItem));
  } 
  }, elementContainer);
  
  cardList.renderItems(card);
  console.log(card);
  });

//Экземпляр класса popupPhoto
const imagePopup = new PopupWithImage({ popupSelector: '.popup_type_open-photo' });
imagePopup.setEventListeners();

//Экземпляр класса для данных юзера
const userData = new UserInfo({
  nameSelector: '.profile-info__name', 
  infoSelector: '.profile-info__description' });

//Экземпляр класса для popupEdit
const popupWithEditForm = new PopupWithForm({
  popupSelector: '.popup_type_edit-button', 
  handleFormSubmit: (formData) => {
    userData.setUserInfo(formData); //записали новые значения
    popupWithEditForm.close();
  } 
});

popupWithEditForm.setEventListeners();

//Экземпляр класса для popupAdd + карточки теперь добавляются на сервер
const popupWithAddForm = new PopupWithForm({ 
  popupSelector: '.popup_type_add-photo', 
  handleFormSubmit: (formData) => {
    api.postCard(formData);

    elementContainer.append(createCard(formData));
    popupWithAddForm.close();
  }
});

popupWithAddForm.setEventListeners();

//экземпляр класса для popupEditAvatar (БЕЗ АПИ)
const popupWithAvatarForm = new PopupWithForm({
  popupSelector: '.popup_type_edit-avatar',
  handleFormSubmit: (formData) => {
    /*api.sendUserAvatar(formData);*/
    userAvatar.src = formData.avatarLink;

    popupWithAvatarForm.close();
  }
})

popupWithAvatarForm.setEventListeners();

//Экземпляры классов для валидации каждой формы
const validationFormPopupEdit = new FormValidator(validationConf, formPopupEdit);
validationFormPopupEdit.enableValidation();

const validationFormPopupAdd = new FormValidator(validationConf, formPopupAdd);
validationFormPopupAdd.enableValidation();

//Экземпляр класса для очистки форм от ошибок после ввода
//и блокировки кнопки
const resetValidationFormAdd = new FormValidator(validationConf, formPopupAdd);

