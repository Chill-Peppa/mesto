//Извините за невнимательность и огромное спасибо за ревью!

export default class Popup {

    constructor({ popupSelector }) {
        this._popup =  document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    //метод на открытие попапа
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    //метод на закрытие попапа
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    //метод на закрытие по esc
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
          }
    }

    //метод на добавление слушателя клика (закрытие)
    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
                this.close();
            };
          });
    }
}