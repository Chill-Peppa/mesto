export default class Card {
    
    constructor({ data, userId, templateSelector, handleCardClick, handleCardRemove, handleCardLike, handleCardDislike }) {
        this._name = data.name;
        this._link = data.link;
        this._ownerId = data.owner._id; //тут айди юзера
        this._cardId = data._id;
        this._likesArray = data.likes; //массив с лайками всех карточек
        this._userId = userId;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleCardRemove = handleCardRemove;
        this._handleCardLike = handleCardLike;
        this._handleCardDislike = handleCardDislike;
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

    //проверка кнопки удаления (если айди не совпал - спрятать кнопку)
    _checkButtonDelete() {
        if (this._ownerId !== this._userId) {
            this._deleteBtn.classList.add('element__delete-btn_disabled');
        }
    }

    //метод, в котором будут все слушатели
    _setEventListeners() {
        this._likeBtn.addEventListener('click', () => {
            this._checkButtonLike();
        });
        this._deleteBtn.addEventListener('click', () => {
            this._handleCardRemove(this._cardId);
        });

        this._cardImg.addEventListener('click', () => {
            this._handleCardClick(); 
        });
    }

    removeCard() {
        this._element.remove();
    }

    //метод для запросов лайка при клике
    _checkButtonLike() {
        if (this._likeBtn.classList.contains('element-container__like-btn_active')) {
            this._handleCardDislike(this._cardId);
        } else {
            this._handleCardLike(this._cardId);
        }

        this._likeBtn.classList.toggle('element-container__like-btn_active');

    }

    //метод-счетчик лайков
    likeCounter(likeArr) {
        this._likesLength.textContent = likeArr.length;
    }

    //метод, чтобы проверить стоит ли лайк юзера + его отображение после загрузки
    _checkUserLike() {
        //console.log('мой', this._userId)
        if (this._likesArray.some(like => like._id === this._userId)) {
            this._likeBtn.classList.add('element-container__like-btn_active');
            //console.log('поставлен')
        } else {
            this._likeBtn.classList.remove('element-container__like-btn_active');
            //console.log('не поставлен')
        }
    }

    generateCard() {
        this._element = this._getTemplate();
        this._likeBtn = this._element.querySelector('.element-container__like-btn');
        this._deleteBtn = this._element.querySelector('.element__delete-btn');
        this._cardImg = this._element.querySelector('.element__mask');
        this._cardText = this._element.querySelector('.element-container__name');
        this._likesLength = this._element.querySelector('.element-container__span'); //контейнер-счетчик лайков
        this._setEventListeners();
        this._checkButtonDelete();
        this._checkUserLike();

        this._likesLength.textContent = this._likesArray.length; //чтобы количество отобразилось сразу на странице
        this._cardText.textContent = this._name;
        this._cardImg.src = this._link;
        this._cardImg.alt = this._name;

        return this._element;
    }

}