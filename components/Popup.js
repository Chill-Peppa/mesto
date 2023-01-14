export default class Popup {

    constructor({ popupSelector }) {
        this._popupSelector =  popupSelector;
    }

    //метод на открытие попапа
    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    //метод на закрытие попапа
    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    //метод на закрытие по esc
    _handleEscClose() {
        if (evt.key === 'Escape') {
            this.close();
          }
    }

    //метод на добавление слушателя клика
    setEventListeners() {
        this._popupSelector.addEventListener('mousedown', (evt) => {
            if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
                this.close();
            };
          });
    }
}