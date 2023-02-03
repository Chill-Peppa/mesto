import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._popupImage = this._popup.querySelector(".popup__open-photo");
    this._popupDescription = this._popup.querySelector(".popup__open-caption");
  }

  open(data) {
    this._popupImage.src = data.link;
    this._popupDescription.textContent = data.name;
    this._popupImage.alt = data.name;

    super.open();
  }
}
