import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor({ popupSelector }) {
        super({ popupSelector });
        this._popupImage = this._popupSelector.querySelector('.popup__open-photo');
        this._popupDescription = this._popupSelector.querySelector('.popup__open-caption');
    }

    
}