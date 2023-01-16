export default class FormValidator {

    constructor(config, form) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._form = form;

        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    }

    //метод для нахождения и добавления ошибки
    _showInputError = (inputElement, errorMessage) => {
        this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);

        inputElement.classList.add(this._inputErrorClass);
        this._errorElement.textContent = errorMessage;
        this._errorElement.classList.add(this._errorClass);
    }

    //метод для удаления ошибки
    _hideInputError = (inputElement) => {
        this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);

        inputElement.classList.remove(this._inputErrorClass);
        this._errorElement.classList.remove(this._errorClass);
        this._errorElement.textContent = '';
    }

    //метод для проверки ошибки
    _checkValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    //метод для проверки поля на невалидность (нужно для кнопки)
    _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
}

    //метод переключения кнопки
    _switchButtonPosition = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', 'true');
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
}

    //метод добавления обработчиков всем полям формы
    _setInputListeners = () => {
    this._switchButtonPosition(this._inputList, this._buttonForm); //чтобы кнопка была не активна при открытии поля
  
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkValidity(inputElement);
  
        this._switchButtonPosition(this._inputList, this._buttonForm);
      });
    });
  }
  
  //передаем все слушатели 
  enableValidation = () => {
    this._setInputListeners();
  }

}
