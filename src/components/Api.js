export default class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _returnResponse(res) {
        if (res.ok) {
            return res.json()
        }
        
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    //универсальный метод запроса с проверкой ответа
    _request(url, options) {
        return fetch(url, options).then(this._returnResponse)
      }

    //GET с информацией пользователя с сервера
    getUserInfo() {
        return this._request(`${this._url}/users/me`, {
            headers: this._headers
        });
    }

    //метод, чтобы получить карточки через запрос к серверу
    getAllCards() {
        return this._request(`${this._url}/cards`, {
            headers: this._headers
        });
    }
    
    //редактирование профиля
    updateUserInfo(data) {
        return this._request(`${this._url}/users/me`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify(data)
        });
    }

    //метод отправки карточки на сервер
    postCard(data) {
        return this._request(`${this._url}/cards`, {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    //метод отправки аватара юзера на сервер
    sendUserAvatar(data) {
        return this._request(`${this._url}/users/me/avatar`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify(data)
        });
    }

    //метод на удаление карточки
    deleteCard(id) {
        return this._request(`${this._url}/cards/${id}`, {
            headers: this._headers,
            method: 'DELETE'
        });
    }

    //метод чтобы поставить лайк
    likeCard(id) {
        return this._request(`${this._url}/cards/${id}/likes `, {
            headers: this._headers,
            method: 'PUT'
        });
    }

    //метод чтобы убрать лайк
    dislikeCard(id) {
        return this._request(`${this._url}/cards/${id}/likes `, {
            headers: this._headers,
            method: 'DELETE'
        });
    }
}