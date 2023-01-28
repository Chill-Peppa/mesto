export default class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
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
}