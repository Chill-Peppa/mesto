export default class Card {

    constructor(name, link) {
        this._name = name;
        this._link = link;
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

    //метод для генерации карточек
    generateCard() {
        this._element = this._getTemplate();

        this._element.querySelector('.element-container__name').textContent = this._name;
        this._element.querySelector('.element__mask').src = this._link;

        return this._element;
    }

}
