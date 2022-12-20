export default class Card {

    constructor(data, popupPhoto, photoElemOpen, titleElemOpen, openPopup) {
        this._name = data.name;
        this._link = data.link;
        this._popupPhoto = popupPhoto;
        this._photoElemOpen = photoElemOpen;
        this._titleElemOpen = titleElemOpen;
        this._openPopup = openPopup;
    }
    
    //метод, чтобы вернуть разметку
    _getTemplate() {
        const cardElem = document
        .querySelector('#element-template')
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
        this._element.querySelector('.element__delete-btn').closest('.element').remove();
        this._element = null;
    }

    //метод для открытия попапа
    _handleOpenPopupPhoto() {
        this._photoElemOpen.src = this._link;
        this._titleElemOpen.textContent = this._name;
        this._titleElemOpen.alt = this._name;

        this._openPopup(this._popupPhoto);      
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
           this._handleOpenPopupPhoto();
        });
    }

    //метод для генерации карточек
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element-container__name').textContent = this._name;
        this._element.querySelector('.element__mask').src = this._link;

        return this._element;
    }

}