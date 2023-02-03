export const validationConf = {
  formSelector: ".form",
  inputSelector: ".form__item",
  submitButtonSelector: ".form__button-submit",
  inactiveButtonClass: "form__button-submit_error",
  inputErrorClass: "form__item_type_line-error",
  errorClass: "form__item-error_active",
};

export const configApi = {
  url: "https://mesto.nomoreparties.co/v1/cohort-58",
  headers: {
    "Content-Type": "application/json",
    authorization: "fa0e36d5-ce77-4b43-9654-baaa45f07f34",
  },
};
