import initialCards from '../utils/constants.js';
import validationConf from '../utils/config.js';
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js';

import { 
  buttonEditProfile,
  buttonAddElem,
  popupEdit,
  popupAdd,
  popupPhoto,
  nameValue,
  jobValue,
  formPopupEdit,
  nameInput,
  jobInput,
  formPopupAdd,
  elementContainer
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
  nameInput.value = userData.getUserInfo().firstname;
  jobInput.value = userData.getUserInfo().career;
});

buttonAddElem.addEventListener('click', () => {
  popupWithAddForm.open();
});

      /*---------ЭКЗЕМПЛЯРЫ КЛАССОВ---------*/

//Экземпляр класса popupPhoto
const imagePopup = new PopupWithImage({ popupSelector: popupPhoto });
imagePopup.setEventListeners();

//Экземпляр класса для данных юзера
const userData = new UserInfo({ name: nameValue, info: jobValue });

//Экземпляр класса для popupEdit
const popupWithEditForm = new PopupWithForm({ popupSelector: popupEdit, handleFormSubmit: (formData) => {
  userData.setUserInfo(formData); //записали новые значения
  popupWithEditForm.close();
} 
});

popupWithEditForm.setEventListeners();

//Экземпляр класса для popupAdd
const popupWithAddForm = new PopupWithForm({ popupSelector: popupAdd, handleFormSubmit: (formData) => {
elementContainer.prepend(createCard(formData));
formPopupAdd.reset();
/*const submitterBtn = evt.submitter;
submitterBtn.classList.add(validationConf.inactiveButtonClass);
submitterBtn.setAttribute('disabled', 'true');*/
popupWithAddForm.close();
}
});

popupWithAddForm.setEventListeners();

//Экземпляр класса для перебора массива с карточками
const cardList = new Section ({ items: initialCards, renderer: (cardItem) => {
  cardList.addItem(createCard(cardItem));
} 
}, elementContainer);

cardList.renderItems();

//Экземпляры классов для валидации каждой формы
const validationFormPopupEdit = new FormValidator(validationConf, formPopupEdit);
validationFormPopupEdit.enableValidation();

const validationFormPopupAdd = new FormValidator(validationConf, formPopupAdd);
validationFormPopupAdd.enableValidation();

