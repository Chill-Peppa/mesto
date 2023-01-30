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
  formPopupEditAvatar,
  nameInput,
  jobInput,
  formPopupAdd,
  elementContainer,
  buttonEditAvatar,
  userAvatar,
  profileName,
  profileJob
} from '../utils/constants.js';

      /*----------ФУНКЦИИ----------*/

//создание экземпляра карточки
const createCard = (cardItem) => {
  const card = new Card({ 
    data: cardItem,
    userId: userId,
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
  nameInput.value = profileInfo.name;
  jobInput.value = profileInfo.about;
});

buttonAddElem.addEventListener('click', () => {
  resetValidationFormAdd.resetValidaition();
  popupWithAddForm.open();
});

buttonEditAvatar.addEventListener('click', () => {
  popupWithAvatarForm.open();
})

      /*---------ЭКЗЕМПЛЯРЫ КЛАССОВ---------*/

//получаем карточки с сервера
const api = new Api(configApi);

api.getAllCards().then((card) => {
  const cardList = new Section ({ renderer: (cardItem) => {
    cardList.addItem(createCard(cardItem));
  } 
}, elementContainer);
  
  cardList.renderItems(card);
  console.log(card);
});

let userId;
//получим данные юзера с сервера
api.getUserInfo()
.then((formData) => {
  userId = formData._id;
  profileName.textContent = formData.name;
  profileJob.textContent = formData.about;
  userAvatar.src = formData.avatar;
  console.log(formData)
});

//карточки теперь добавляются на сервер
const popupWithAddForm = new PopupWithForm({ 
  popupSelector: '.popup_type_add-photo', 
  handleFormSubmit: (formData) => {
    api.postCard(formData)
    .then((data) => {
      elementContainer.prepend(createCard(data));
    });
    popupWithAddForm.close();
  }
});

popupWithAddForm.setEventListeners();

//Экземпляр класса popupPhoto
const imagePopup = new PopupWithImage({ popupSelector: '.popup_type_open-photo' });
imagePopup.setEventListeners();

//Экземпляр класса для данных юзера
const userData = new UserInfo({
  nameSelector: '.profile-info__name', 
  infoSelector: '.profile-info__description' });

//Экземпляр класса для popupEdit, связанный с сервером
const popupWithEditForm = new PopupWithForm({
  popupSelector: '.popup_type_edit-button', 
  handleFormSubmit: (formData) => {
    api.updateUserInfo(formData)
    .then((items) => {
      userData.setUserInfo(items); //записали новые значения
      console.log(items);
    })
    
    popupWithEditForm.close();
  }
  })

popupWithEditForm.setEventListeners();

//экземпляр класса для popupEditAvatar
const popupWithAvatarForm = new PopupWithForm({
  popupSelector: '.popup_type_edit-avatar',
  handleFormSubmit: (formData) => {
    api.sendUserAvatar(formData)
    .then((data) => {
      userAvatar.src = data.avatar;
    })
    .catch((err) => {
      console.error(`Всё идёт не по плану. Ошибка: ${err}`);
    });

    popupWithAvatarForm.close();
  }
})

popupWithAvatarForm.setEventListeners();

//Экземпляры классов для валидации каждой формы
const validationFormPopupEdit = new FormValidator(validationConf, formPopupEdit);
validationFormPopupEdit.enableValidation();

const validationFormPopupAdd = new FormValidator(validationConf, formPopupAdd);
validationFormPopupAdd.enableValidation();

const validationFormPopupEditAvatar = new FormValidator(validationConf, formPopupEditAvatar);
validationFormPopupEditAvatar.enableValidation();

//Экземпляр класса для очистки форм от ошибок после ввода
//и блокировки кнопки
const resetValidationFormAdd = new FormValidator(validationConf, formPopupAdd);

