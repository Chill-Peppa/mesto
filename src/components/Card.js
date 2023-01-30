export default class Card {
    
    constructor({ data, userId, templateSelector, handleCardClick, handleCardRemove }) {
        this._name = data.name;
        this._link = data.link;
        this._ownerId = data.owner._id; //тут айди юзера
        this._cardId = data._id;
        this._userId = userId;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleCardRemove = handleCardRemove;
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

    //проверка кнопки удаления (если айди не совпал - спрятать кнопку)
    _checkButtonDelete() {
        if (this._ownerId !== /*'e3e979c55b8ed786a2075f89'*/this._userId) {
            console.log(this._userId)
            this._deleteBtn.classList.add('element__delete-btn_disabled');
        }
    }

    //метод, в котором будут все слушатели
    _setEventListeners() {
        this._likeBtn.addEventListener('click', () => {
            this._handleLikeCard();
        });
        /*this._deleteBtn.addEventListener('click', () => {
            this._handleRemoveCard();
        });*/
        this._deleteBtn.addEventListener('click', () => {
            this._handleCardRemove(this._cardId);
        });

        this._cardImg.addEventListener('click', () => {
            this._handleCardClick(); 
        });
    }

    delete() {
        this._element.remove();
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