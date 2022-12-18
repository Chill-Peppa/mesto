/*
Создайте класс FormValidator, который настраивает валидацию полей формы:
1 принимает в конструктор объект настроек с селекторами и классами формы;
2 принимает вторым параметром элемент той формы, которая валидируется;
3 имеет приватные методы, которые обрабатывают форму: проверяют валидность поля, изменяют состояние кнопки сабмита, устанавливают все обработчики;
4 имеет публичный метод enableValidation, который включает валидацию формы.
5 Для каждой проверяемой формы создайте экземпляр класса FormValidator.
*/

export default class FormValidator {

    constructor(settings, popupSelector) {
        
        this._popupSelector = popupSelector;
    }


}