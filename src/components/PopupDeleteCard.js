import Popup from './Popup.js';

export default class PopupDeleteCard extends Popup {
    //конструктора нет, поскольку там был 1 параметр через супер

    //этот метод нужен, чтобы ему передать коллбек, который удалит карточку
    setCallback(handleFunctionDelete) {
        this._handleFunctionDelete = handleFunctionDelete;
    }

    setEventListeners() {
        this._confirmDeleteButton = this._popup.querySelector('.form__button-submit_confirm');

        this._confirmDeleteButton.addEventListener('click', () => {
            this._handleFunctionDelete();
            //this.close();
          });

        super.setEventListeners();
    }


}