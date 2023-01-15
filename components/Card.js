export default class Card {
    
    constructor({ data, templateSelector, /*popupPhoto, photoElemOpen, titleElemOpen, */handleCardClick }) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        /*this._popupPhoto = popupPhoto;
        this._photoElemOpen = photoElemOpen;
        this._titleElemOpen = titleElemOpen;*/
        this._handleCardClick = handleCardClick; //это новая функция вместо openPopup
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

    //метод для открытия попапа
    /*_handleOpenPopupPhoto() {
        this._photoElemOpen.src = this._link;
        this._titleElemOpen.textContent = this._name;
        this._photoElemOpen.alt = this._name;

        this._handleCardClick(this._popupPhoto);      
   }*/

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
    /*    this._element.querySelector('.element__mask').addEventListener('click', () => {
           this._handleOpenPopupPhoto();
        });*/
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