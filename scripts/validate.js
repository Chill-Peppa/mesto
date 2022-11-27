//функция для нахождения и добавления ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add('form__item_type_line-error'); //добавим класс линии ошибки
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__item-error_active'); //добавим класс ошибки
}

//функция для удаления ошибки
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove('form__item_type_line-error');
  errorElement.classList.remove('form__item-error_active');
  errorElement.textContent = '';
}


//функция для проверки ошибки
const checkValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

//функция добавления обработчиков всем полям формы
const setInputListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__item'));
  const buttonElement = formElement.querySelector('.form__button-submit');

  switchButtonPosition(inputList, buttonElement); //чтобы кнопка была не активна при открытии поля

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkValidity(formElement, inputElement);

      switchButtonPosition(inputList, buttonElement);
    });
  });
}

//функция добавления обработчиков для всех форм
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));

  formList.forEach((formElement) => {
    setInputListeners(formElement);
  });
}

//функция для проверки поля на невалидность (нужно для кнопки)
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

//функция переключения кнопки
const switchButtonPosition = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('form__button-submit_error');
    buttonElement.setAttribute('disabled', 'true');
  } else {
    buttonElement.classList.remove('form__button-submit_error');
    buttonElement.removeAttribute('disabled');
  }
}

//тут этот объект с рандомнымии параметрами
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
