/*
Создайте класс FormValidator, который настраивает валидацию полей формы:
1 принимает в конструктор объект настроек с селекторами и классами формы;
2 принимает вторым параметром элемент той формы, которая валидируется;
3 имеет приватные методы, которые обрабатывают форму: проверяют валидность поля, изменяют состояние кнопки сабмита, устанавливают все обработчики;
4 имеет публичный метод enableValidation, который включает валидацию формы.
5 Для каждой проверяемой формы создайте экземпляр класса FormValidator.
*/

export default class FormValidator {

    constructor(validationConf, formSelector) {
        this._validationConf = validationConf; //почему передаем так, а не ключ?

        this._formSelector = formSelector;
    }

    //функция для нахождения и добавления ошибки
    _showInputError = (_inputElement, _errorMessage) => {
        const _errorElement = this._formSelector.querySelector(`#${_inputElement.id}-error`); //нашли нужный инпут

        _inputElement.classList.add(this._validationConf.inputErrorClass); //добавили красную линию
        _errorElement.classList.add(this._validationConf.errorClass); //добавим класс ошибки
        _errorElement.textContent = _errorMessage;
    }

    //функция для удаления ошибки
    _hideInputError = (_inputElement) => {
        const _errorElement = this._.querySelector(`.${inputElement.id}-error`);

        _inputElement.classList.remove(this._validationConf.inputErrorClass); //добавили красную линию
        _errorElement.classList.remove(this._validationConf.errorClass); //добавим класс ошибки
        _errorElement.textContent = '';
    }

    //функция для проверки ошибки
    _checkValidity = (_inputElement) => {
        if (!_inputElement.validity.valid) {
            this._showInputError = (_inputElement, _errorMessage);
        } else {
            this._hideInputError = (_inputElement);
        }
    }

    //функция для проверки поля на невалидность (нужно для кнопки)
    _hasInvalidInput = () => {
        return this._inputList.some((_inputElement) => {
            return !_inputElement.validity.valid;
          });
    }

    //функция переключения кнопки
    _switchButtonPosition = () => {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._validationConf.inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', 'true');
        } else {
            this._buttonElement.classList.remove(this._validationConf.inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled');
        }
    }
    //функция добавления обработчиков всем полям формы
    _setInputListeners = () => {
        this._buttonElement = this._formSelector.querySelector(this._validationConf.submitButtonSelector);
        this._inputList = Array.from(this._formSelector.querySelectorAll(this._validationConf.inputSelector));
        this._inputList.forEach((_inputElement) =>{
            _inputElement.addEventListener('input', () => {
                this._checkInputValidity(_inputElement);
                this._switchButtonPosition();
                }
            );
        })
        this._switchButtonPosition(this._buttonElement, this._inputList); 
    }

    //функция добавления обработчиков для всех форм
    enableValidation() {
        this._setInputListeners();
    }


}
