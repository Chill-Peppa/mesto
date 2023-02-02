export default class Section {

    constructor({ renderer }, containerForCards) {
        this._renderer = renderer;
        
        this._container = containerForCards;
    }

    //метод, который отвечает за отрисовку всех элементов
    renderItems(items) {
        this._initialArray = items;
        this._initialArray.forEach((item) => {
            this._renderer(item);
          });
    }

    //метод принимает DOM элемент и добавляет его в контейнер
    addItemAppend(element) {
        this._container.append(element);
    }

    prependItem(element) {
        this._container.prepend(element);
    }
}