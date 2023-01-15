import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleSubmitForm }) {
        super({ popupSelector });
        this._handleSubmitForm = handleSubmitForm;
    }

    //метод, который собирает данные со всех форм
    _getInputValues() {

    }

    //метод добавляет обработчик клика на закрытие + обработчик сабмита
    setEventListeners() {

    }

    //+метод при закрытии сбрасывает формы
    close() {

    }

}