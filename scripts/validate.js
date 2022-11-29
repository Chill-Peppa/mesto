const validationConf = {
    formSelector: '.form',
    inputSelector: '.form__item',
    submitButtonSelector: '.form__button-submit',
    inactiveButtonClass: 'form__button-submit_error',
    inputErrorClass: 'form__item_type_line-error',
    errorClass: 'form__item-error_active'
  }


//функция для нахождения и добавления ошибки
const showInputError = (formElement, inputElement, errorMessage, validationConf) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(validationConf.inputErrorClass); //добавим класс линии ошибки
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationConf.errorClass); //добавим класс ошибки
}

//функция для удаления ошибки
const hideInputError = (formElement, inputElement, validationConf) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(validationConf.inputErrorClass);
  errorElement.classList.remove(validationConf.errorClass);
  errorElement.textContent = '';
}


//функция для проверки ошибки
const checkValidity = (formElement, inputElement, validationConf) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationConf);
  } else {
    hideInputError(formElement, inputElement, validationConf);
  }
}

//функция добавления обработчиков всем полям формы
const setInputListeners = (formElement, validationConf) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConf.inputSelector));
  const buttonElement = formElement.querySelector(validationConf.submitButtonSelector);

  switchButtonPosition(inputList, buttonElement, validationConf); //чтобы кнопка была не активна при открытии поля

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkValidity(formElement, inputElement, validationConf);

      switchButtonPosition(inputList, buttonElement, validationConf);
    });
  });
}

//функция добавления обработчиков для всех форм
export const enableValidation = (validationConf) => {
  const formList = Array.from(document.querySelectorAll(validationConf.formSelector));

  formList.forEach((formElement) => {
    setInputListeners(formElement, validationConf);
  });
}

//функция для проверки поля на невалидность (нужно для кнопки)
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

//функция переключения кнопки
const switchButtonPosition = (inputList, buttonElement, validationConf) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationConf.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'true');
  } else {
    buttonElement.classList.remove(validationConf.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}
