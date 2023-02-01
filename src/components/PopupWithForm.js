import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super({ popupSelector });
        this._handleFormSubmit = handleFormSubmit;

        this._form = this._popup.querySelector('.form');
        this._inputList = this._form.querySelectorAll('.form__item');
        this._button = this._popup.querySelector('.form__button-submit');
    }

    //метод, который собирает данные со всех форм
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
          });
        return this._formValues;
    }

    //функция лоудер при прогрузке данных
    renderLoading(isLoading) {
        if (isLoading) {
            this._button.textContent = 'Сохранение...';
        } else {
            this._button.textContent = 'Сохранить';
        }
    }
    
    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            // добавим вызов функции _handleFormSubmit
            // передадим ей объект — результат работы _getInputValues
            this._handleFormSubmit(this._getInputValues());
          });
        super.setEventListeners();
    }

    close() {
        super.close();

        this._form.reset();
    }

}