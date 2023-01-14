import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor({ popupSelector }) {
        super({ popupSelector });
        this._popupImage = this._popupSelector.querySelector('.popup__open-photo');
        this._popupDescription = this._popupSelector.querySelector('.popup__open-caption');
    }

    open(link, name) {
        this._popupImage.src = link;
        this._popupDescription.textContent = name;
        this._popupDescription.alt = name;

        super.open();
    }
}