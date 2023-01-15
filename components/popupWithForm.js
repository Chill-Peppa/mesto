import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super({ popupSelector });
        this._handleFormSubmit = handleFormSubmit;
    }

    //метод, который собирает данные со всех форм
    _getInputValues() {
        this._inputList = this._popupSelector.querySelectorAll('.form__item');
        this._formValues = {};// создаём пустой объект
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
          });
        return this._formValues;
    }

    //метод добавляет обработчик клика на закрытие + обработчик сабмита
    setEventListeners() {
        this._form = this._popupSelector.querySelector('.form');
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            // добавим вызов функции _handleFormSubmit
            // передадим ей объект — результат работы _getInputValues
            this._handleFormSubmit(this._getInputValues());
            console.log(this._formValues);
          });

        super.setEventListeners();
    }

    //+метод при закрытии сбрасывает формы
    close() {
        super.close();

        this._form.reset();
    }

}