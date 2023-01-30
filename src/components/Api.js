export default class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    //GET с информацией пользователя с сервера
    getUserInfo() {
        return fetch(`https://nomoreparties.co/v1/cohort-58/users/me`, {
            headers: this._headers
        })
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
        })
    }

    //метод, чтобы получить карточки через запрос к серверу
    getAllCards() {
        return fetch(`${this._url}/v1/cohort-58/cards`, {
            headers: this._headers
        })
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
        })
    }
    
    //редактирование профиля
    updateUserInfo(data) {
        return fetch(`${this._url}/v1/cohort-58/users/me`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
        })
    }

    //метод отправки карточки на сервер
    postCard(data) {
        return fetch(`${this._url}/v1/cohort-58/cards`, {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
        })
    }

    //метод отправки аватара юзера на сервер
    sendUserAvatar(data) {
        return fetch(`${this._url}/v1/cohort-58/users/me/avatar`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
        })
    }

    //метод на удаление карточки
    deleteCard(id) {
        return fetch(`${this._url}/v1/cohort-58/cards/${id}`, {
            headers: this._headers,
            method: 'DELETE'
        })
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
        })
    }
}