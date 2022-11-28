const validationConf = {
    formSelector: '.form',
    inputSelector: '.form__item',
    submitButtonSelector: '.form__button-submit',
    inactiveButtonClass: 'form__button-submit_error',
    inputErrorClass: 'form__item_type_line-error',
    errorClass: 'form__item-error_active'
  }


//функция для нахождения и добавления ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(validationConf.inputErrorClass); //добавим класс линии ошибки
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationConf.errorClass); //добавим класс ошибки
}

//функция для удаления ошибки
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(validationConf.inputErrorClass);
  errorElement.classList.remove(validationConf.errorClass);
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
  const inputList = Array.from(formElement.querySelectorAll(validationConf.inputSelector));
  const buttonElement = formElement.querySelector(validationConf.submitButtonSelector);

  switchButtonPosition(inputList, buttonElement); //чтобы кнопка была не активна при открытии поля

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkValidity(formElement, inputElement);

      switchButtonPosition(inputList, buttonElement);
    });
  });
}

//функция добавления обработчиков для всех форм
const enableValidation = (validationConf) => {
  const formList = Array.from(document.querySelectorAll(validationConf.formSelector));

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
    buttonElement.classList.add(validationConf.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'true');
  } else {
    buttonElement.classList.remove(validationConf.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

//тут вызов enableValidation
enableValidation(validationConf);
