export default class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _returnResponse(res) {
        if (res.ok) {
            return res.json()
        }
    }

    //GET с информацией пользователя с сервера
    getUserInfo() {
        return fetch(`${this._url}/v1/cohort-58/users/me`, {
            headers: this._headers
        })
        .then(this._returnResponse);
    }

    //метод, чтобы получить карточки через запрос к серверу
    getAllCards() {
        return fetch(`${this._url}/v1/cohort-58/cards`, {
            headers: this._headers
        })
        .then(this._returnResponse);
    }
    
    //редактирование профиля
    updateUserInfo(data) {
        return fetch(`${this._url}/v1/cohort-58/users/me`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(this._returnResponse);
    }

    //метод отправки карточки на сервер
    postCard(data) {
        return fetch(`${this._url}/v1/cohort-58/cards`, {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(this._returnResponse);
    }

    //метод отправки аватара юзера на сервер
    sendUserAvatar(data) {
        return fetch(`${this._url}/v1/cohort-58/users/me/avatar`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(this._returnResponse);
    }

    //метод на удаление карточки
    deleteCard(id) {
        return fetch(`${this._url}/v1/cohort-58/cards/${id}`, {
            headers: this._headers,
            method: 'DELETE'
        })
        .then(this._returnResponse);
    }

    //метод чтобы поставить лайк
    likeCard(id) {
        return fetch(`${this._url}/v1/cohort-58/cards/${id}/likes `, {
            headers: this._headers,
            method: 'PUT'
        })
        .then(this._returnResponse);
    }

    //метод чтобы убрать лайк
    dislikeCard(id) {
        return fetch(`${this._url}/v1/cohort-58/cards/${id}/likes `, {
            headers: this._headers,
            method: 'DELETE'
        })
        .then(this._returnResponse);
    }
}