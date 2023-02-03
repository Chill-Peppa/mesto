import "./index.css";

import { configApi } from "../utils/config.js";
import { validationConf } from "../utils/config.js";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupDeleteCard from "../components/PopupDeleteCard.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import {
  buttonEditProfile,
  buttonAddElem,
  formPopupEdit,
  formPopupEditAvatar,
  formPopupAdd,
  elementContainer,
  buttonEditAvatar,
} from "../utils/constants.js";

let userId;

/*----------ФУНКЦИИ----------*/

//создание экземпляра карточки
const createCard = (cardItem) => {
  const card = new Card({
    data: cardItem,
    userId: userId,
    templateSelector: "#element-template",
    handleCardClick: () => {
      imagePopup.open(cardItem);
    },
    handleCardRemove: (id) => {
      confirmPopup.open();
      confirmPopup.setCallback(() => {
        api
          .deleteCard(id)
          .then(() => {
            card.removeCard();
            confirmPopup.close();
          })
          .catch((err) => {
            console.error(`Ошибка: ${err}`);
          });
      });
    },
    handleCardLike: (id) => {
      api
        .likeCard(id)
        .then((data) => {
          card.likeCounter(data.likes);
        })
        .catch((err) => {
          console.error(`Ошибка: ${err}`);
        });
    },
    handleCardDislike: (id) => {
      api
        .dislikeCard(id)
        .then((data) => {
          card.likeCounter(data.likes);
        })
        .catch((err) => {
          console.error(`Ошибка: ${err}`);
        });
    },
  });

  return card.generateCard();
};

/*---------СЛУШАТЕЛИ НА КНОПКАХ---------*/

buttonEditProfile.addEventListener("click", () => {
  popupWithEditForm.open();
  validationFormPopupEdit.resetValidaition();

  const profileInfo = userData.getUserInfo();
  popupWithEditForm.setInputValues(profileInfo);
});

buttonAddElem.addEventListener("click", () => {
  validationFormPopupAdd.resetValidaition();
  popupWithAddForm.open();
});

buttonEditAvatar.addEventListener("click", () => {
  validationFormPopupEditAvatar.resetValidaition();
  popupWithAvatarForm.open();
});

/*---------ЭКЗЕМПЛЯРЫ КЛАССОВ---------*/

const api = new Api(configApi);

//массив с карточками
const cardContainer = new Section(
  {
    renderer: (cardItem) => {
      cardContainer.addItemAppend(createCard(cardItem));
    },
  },
  elementContainer
);

//получаем карточки и данные юзера с сервера вместе
Promise.all([api.getAllCards(), api.getUserInfo()])
  .then(([cards, userArr]) => {
    userId = userArr._id;
    cardContainer.renderItems(cards);
    userData.setUserInfo(userArr);
    console.log(cards);
    console.log(userArr);
  })
  .catch((err) => {
    console.error(`Ошибка: ${err}`);
  });

//карточки теперь добавляются на сервер
const popupWithAddForm = new PopupWithForm({
  popupSelector: ".popup_type_add-photo",
  handleFormSubmit: (formData) => {
    popupWithAddForm.renderLoading(true);
    api
      .postCard(formData)
      .then((data) => {
        cardContainer.prependItem(createCard(data));
        popupWithAddForm.close();
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      })
      .finally(() => {
        popupWithAddForm.renderLoading(false);
      });
  },
});

popupWithAddForm.setEventListeners();

//Экземпляр класса popupPhoto
const imagePopup = new PopupWithImage({
  popupSelector: ".popup_type_open-photo",
});
imagePopup.setEventListeners();

//экземпляр класса для попапа подтверждения удаления
const confirmPopup = new PopupDeleteCard({
  popupSelector: ".popup_type_delete",
});
confirmPopup.setEventListeners();

//Экземпляр класса для данных юзера
const userData = new UserInfo({
  nameSelector: ".profile-info__name",
  infoSelector: ".profile-info__description",
  avatarSelector: ".profile__avatar",
});

//Экземпляр класса для popupEdit, связанный с сервером
const popupWithEditForm = new PopupWithForm({
  popupSelector: ".popup_type_edit-button",
  handleFormSubmit: (formData) => {
    popupWithEditForm.renderLoading(true);
    api
      .updateUserInfo(formData)
      .then((items) => {
        userData.setUserInfo(items); //записали новые значения
        popupWithEditForm.close();
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      })
      .finally(() => {
        popupWithEditForm.renderLoading(false);
      });
  },
});

popupWithEditForm.setEventListeners();

//экземпляр класса для popupEditAvatar
const popupWithAvatarForm = new PopupWithForm({
  popupSelector: ".popup_type_edit-avatar",
  handleFormSubmit: (formData) => {
    popupWithAvatarForm.renderLoading(true);
    api
      .sendUserAvatar(formData)
      .then((data) => {
        userData.setUserInfo(data); //тут устанавливаем аватар
        popupWithAvatarForm.close();
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      })
      .finally(() => {
        popupWithAvatarForm.renderLoading(false);
      });
  },
});

popupWithAvatarForm.setEventListeners();

//Экземпляры классов для валидации каждой формы
const validationFormPopupEdit = new FormValidator(
  validationConf,
  formPopupEdit
);
validationFormPopupEdit.enableValidation();

const validationFormPopupAdd = new FormValidator(validationConf, formPopupAdd);
validationFormPopupAdd.enableValidation();

const validationFormPopupEditAvatar = new FormValidator(
  validationConf,
  formPopupEditAvatar
);
validationFormPopupEditAvatar.enableValidation();
