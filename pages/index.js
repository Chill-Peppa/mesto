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
  popups,
  popupPhoto,
  photoElemOpen,
  titleElemOpen,
  nameValue,
  jobValue,
  formPopupEdit,
  nameInput,
  jobInput,
  formPopupAdd,
  titleInput,
  linkInput,
  elementContainer
} from '../utils/constants.js';

      /*----------Функции----------*/
/*function openPopup(popup) { //функция на открытие всех pop-up
        popup.classList.add('popup_opened');
        document.addEventListener('keydown', closeByEsc);
      };

function closePopup(popup) { //функция на закрытие всех pop-up
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
};

function closeByEsc(evt) { //функция на закрытие pop-up по escape
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}*/

//функция на создание экземпляра карточки и добавление ее на страницу
/*const createCard = (
  item,
  templateSelector,
  popupPhoto,
  photoElemOpen,
  titleElemOpen,
  openPopup) => { 
  const card = new Card(item, templateSelector, popupPhoto, photoElemOpen, titleElemOpen, openPopup);

  return card.generateCard();// Создаём карточку и возвращаем наружу
  
  //elementContainer.prepend(cardElement);// Добавляем в DOM - этот комм не раскоммичивай
}*/

      /*---------Слушатели---------*/

/*buttonEditProfile.addEventListener('click', () => { //на открытие pop-up edit
  openPopup(popupEdit);
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
});*/

/*buttonAddElem.addEventListener('click', () => { //на открытие pop-up add
  openPopup(popupAdd);
});*/

buttonAddElem.addEventListener('click', () => {
  popupWithAddForm.open();
})

//formPopupEdit.addEventListener('submit', handleSubmitEditForm);///Прикрепляем обработчик к форме 'edit'. Он будет следить за событием “submit” - «отправка»

/*popups.forEach(function(popupElem) { //перебор на закрытие всех попапов по оверлею и крестику
  popupElem.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
      closePopup(popupElem);
    };
  });
});*/

      /*---------Обработчики---------*/

/*function handleSubmitEditForm (evt) { // Функция-обработчик «отправки» формы pop-up edit
    evt.preventDefault(); //+

    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;

    closePopup(popupEdit); //+
};*/

/*const handleSubmitAddForm = (evt) => { //функция-обработчик формы add
  evt.preventDefault();
  
  createCard({ name: titleInput.value,
               link: linkInput.value },
               '#element-template',
               popupPhoto,
               photoElemOpen,
               titleElemOpen,
               openPopup);
  
  formPopupAdd.reset();

  const submitterBtn = evt.submitter;
  submitterBtn.classList.add(validationConf.inactiveButtonClass);
  submitterBtn.setAttribute('disabled', 'true');

  closePopup(popupAdd);
};

formPopupAdd.addEventListener('submit', handleSubmitAddForm);*/ //Прикрепляем обработчик к форме 'add'

//переписанный слушатель, который вешается на кнопку edit
buttonEditProfile.addEventListener('click', () => { //на открытие pop-up edit
  popupWithEditForm.open();
  nameInput.value = userData.getUserInfo().firstname;
  jobInput.value = userData.getUserInfo().career;
});

      /*---------ЭКЗЕМПЛЯРЫ КЛАССОВ---------*/

//тут экземпляр класса для попапа с картинкой
const imagePopup = new PopupWithImage({ popupSelector: popupPhoto });
imagePopup.setEventListeners();

//экземпляр класса для данных юзера
const userData = new UserInfo({ name: nameValue, info: jobValue });

//тут экземпляры классов для попапов edit и add

//edit
const popupWithEditForm = new PopupWithForm({ popupSelector: popupEdit, handleFormSubmit: (formData) => {
  userData.setUserInfo(formData); //записали новые значения
  popupWithEditForm.close();
} 
});

popupWithEditForm.setEventListeners();

//add
const popupWithAddForm = new PopupWithForm({ popupSelector: popupAdd, handleFormSubmit: (formData) => {
  const card = new Card( { data: formData, templateSelector: '#element-template', handleCardClick: () => {
    imagePopup.open(formData);
  }
});
elementContainer.prepend(card.generateCard());

formPopupAdd.reset();
/*const submitterBtn = evt.submitter;
submitterBtn.classList.add(validationConf.inactiveButtonClass);
submitterBtn.setAttribute('disabled', 'true');*/
popupWithAddForm.close();
}
});

/*formPopupAdd.reset();

const submitterBtn = evt.submitter;
submitterBtn.classList.add(validationConf.inactiveButtonClass);
submitterBtn.setAttribute('disabled', 'true');

popupWithAddForm.close();*/

popupWithAddForm.setEventListeners();

//тут экземпляр класса для перебора массива с карточками
const cardList = new Section ({
  items: initialCards,
  renderer: (cardItem) => {
    const card = new Card( { data: cardItem, templateSelector: '#element-template', handleCardClick: () => {
      imagePopup.open(cardItem);
    } 
  });
    cardList.addItem(card.generateCard());
  }
},
elementContainer);

cardList.renderItems();
/*cardList.addItem(createCard(cardItem, '#element-template', popupPhoto, photoElemOpen, titleElemOpen, openPopup));*/

//тут экземпляры классов для валидации каждой формы
const validationFormPopupEdit = new FormValidator(validationConf, formPopupEdit);
validationFormPopupEdit.enableValidation();

const validationFormPopupAdd = new FormValidator(validationConf, formPopupAdd);
validationFormPopupAdd.enableValidation();

