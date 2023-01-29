export default class Card {
    
    constructor({ data, ownerId, userId, templateSelector, handleCardClick }) {
        this._name = data.name;
        this._link = data.link;
        this._ownerId = ownerId //айди пользователя
        this._userId = userId;
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
        this._likeBtn.classList.toggle('element-container__like-btn_active');
    }

    //метод удаления карточки
    _handleRemoveCard() {
        this._element.remove();
        this._element = null;
    }

    //проверка кнопки удаления (если айди не совпал - спрятать кнопку)
    _checkButtonDelete() {
        if (this._ownerId !== this._userId) {
            console.log(this._ownerId)
            this._deleteBtn.classList.add('element__delete-btn_disabled');
        } else {
            this._deleteBtn.classList.remove('element__delete-btn_disabled');
        }
    }

    //метод, в котором будут все слушатели
    _setEventListeners() {
        this._likeBtn.addEventListener('click', () => {
            this._handleLikeCard();
        });
        this._deleteBtn.addEventListener('click', () => {
            this._handleRemoveCard();
        });
        this._cardImg.addEventListener('click', () => {
            this._handleCardClick(); 
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._likeBtn = this._element.querySelector('.element-container__like-btn');
        this._deleteBtn = this._element.querySelector('.element__delete-btn');
        this._cardImg = this._element.querySelector('.element__mask');
        this._cardText = this._element.querySelector('.element-container__name');
        this._setEventListeners();
        this._checkButtonDelete();

        this._cardText.textContent = this._name;
        this._cardImg.src = this._link;
        this._cardImg.alt = this._name;

        return this._element;
    }

}