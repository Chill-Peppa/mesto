export default class UserInfo {

    constructor({ name, info }) {
        this._name = name;
        this._info = info;
    }

    //метод, который подставляет данные пользователя при открытии формы
    getUserInfo() {
        return {firstname: this._name.textContent, career: this._info.textContent}
    }

    //принимает новые данные пользователя и возвращает на страницу
    setUserInfo(data) {
        this._name.textContent = data.firstname;
        this._info.textContent = data.career;
    }
}