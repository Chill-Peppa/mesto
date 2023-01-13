export default class Section {

    constructor({ items, renderer }, containerSelector) {
        this._initialArray = items; //это массив данных с карточками
        this._renderer = renderer; //это функция, которая отвечает за создание и отрисовку данных на странице.(инструкция)
        
        this._container = containerSelector; //это селектор контейнера, где будут отрисовываться карточки
    }

    //метод, который отвечает за отрисовку всех элементов
    renderItems() {
        this._initialArray.forEach((item) => {
/*          const card = new Card(item, templateSelector, popupPhoto, photoElemOpen, titleElemOpen, openPopup);//и добавление ее на страницу
            const cardElement = card.generateCard();// Создаём карточку и возвращаем наружу
            
            this.addItem(cardElement);// Добавляем в DOM*/
            this._renderer(item);
          });
    }

    //метод принимает DOM элемент и добавляет его в контейнер
    addItem(element) {
        this._container.prepend(element);
    }
}