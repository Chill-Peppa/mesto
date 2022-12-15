export default class Card {

    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;//!!!возможно не нужен
    }
    
    //метод, чтобы вернуть разметку
    _getTemplate() {
        const cardElem = document
        .querySelector(this._templateSelector) //вместо #element-template
        .content
        .querySelector('.element')
        .cloneNode(true);

        return cardElem;
    }

    //метод для генерации карточек
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element-container__name').textContent = this._name;
        this._element.querySelector('.element__mask').src = this._link;

        return this._element;
    }

    //метод, в котором будут все слушатели
    _setEventListeners() {
        this._element.querySelector('.element-container__like-btn').addEventListener('click', () => {
            this._handleLikeCard();
        });
        this._element.querySelector('.element__delete-btn').addEventListener('click', () => {
            this._handleRemoveCard();
        });
    }

    //метод тоггла лайка
    _handleLikeCard() {
        this._element.querySelector('.element-container__like-btn').classList.toggle('element-container__like-btn_active');
    }

    //метод удаления карточки
    _handleRemoveCard() {
        this._element.querySelector('.element__delete-btn').closest('.element').remove();
    }

}
