export default class Card {
    
    constructor({ data, templateSelector, handleCardClick }) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }
    
    //метод, чтобы вернуть разметку
    _getTemplate() {
        const cardElem = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);

        return cardElem;
    }

    //метод тоггла лайка
    _handleLikeCard() {
        this._element.querySelector('.element-container__like-btn').classList.toggle('element-container__like-btn_active');
    }

    //метод удаления карточки
    _handleRemoveCard() {
        this._element.remove();
        this._element = null;
    }

    //метод, в котором будут все слушатели
    _setEventListeners() {
        this._element.querySelector('.element-container__like-btn').addEventListener('click', () => {
            this._handleLikeCard();
        });
        this._element.querySelector('.element__delete-btn').addEventListener('click', () => {
            this._handleRemoveCard();
        });
        this._element.querySelector('.element__mask').addEventListener('click', () => {
            this._handleCardClick(); 
        });
    }

    //метод для генерации карточек
    generateCard() {
        this._element = this._getTemplate(); //создали элемент и присвоили ему разметку
        this._setEventListeners();

        this._element.querySelector('.element-container__name').textContent = this._name;
        this._element.querySelector('.element__mask').src = this._link;
        this._element.querySelector('.element__mask').alt = this._name;

        return this._element;
    }

}