export default class UserInfo {
  constructor({ nameSelector, infoSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._info = document.querySelector(infoSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  //метод, который подставляет данные пользователя при открытии формы
  getUserInfo() {
    return { name: this._name.textContent, about: this._info.textContent };
  }

  //принимает новые данные пользователя и возвращает на страницу
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._info.textContent = data.about;
    this._avatar.src = data.avatar;
  }
}
