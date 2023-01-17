export default class Section {

    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        
        this._container = containerSelector;
    }

    //метод, который отвечает за отрисовку всех элементов
    renderItems(items) {
        this._initialArray = items;
        this._initialArray.forEach((item) => {
            this._renderer(item);
          });
    }

    //метод принимает DOM элемент и добавляет его в контейнер
    addItem(element) {
        this._container.prepend(element);
    }
}