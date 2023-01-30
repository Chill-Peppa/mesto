import Popup from './Popup.js';

export default class PopupDeleteCard extends Popup {
    constructor({ popupSelector }) {
        super({ popupSelector });
    }

    //этот метод нужен, чтобы ему передать коллбек, который удалит карточку
    setCallback(handleFunctionDelete) {
        this._handleFunctionDelete = handleFunctionDelete;
    }

    setEventListeners() {
        this._confirmDeleteButton = this._popup.querySelector('.form__button-submit_confirm');

        this._confirmDeleteButton.addEventListener('click', () => {
            this._handleFunctionDelete();
            this.close();
          });

        super.setEventListeners();
    }


}