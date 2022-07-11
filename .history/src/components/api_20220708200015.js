import { apiConfig } from "./constants";

export default class Api {
  constructor(options) {
    this.options = options;
    this.loadCardToServer = this.loadCardToServer.bind(this);
    this.loadAvatarToServer = this.loadAvatarToServer.bind(this);
    this.loadProfileInfoToServer = this.loadProfileInfoToServer.bind(this);
  }

  _processStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getProfileInfoFromServer() {
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: "GET",
      headers: this.options.headers,
    }).then(this._processStatus);
  }

  getCardsFromServe() {
    return fetch(`${this.options.baseUrl}/cards`, {
      method: "GET",
      headers: this.options.headers,
    }).then(this._processStatus);
  }

  loadCardToServer(linkInput, cardNameInput) {
    return fetch(`${this.options.baseUrl}/cards`, {
      method: "POST",
      headers: this.options.headers,
      body: JSON.stringify({
        name: cardNameInput,
        link: linkInput,
      }),
    }).then(this._processStatus);
  }

  addCardLikes(cardID) {
    return fetch(`${this.options.baseUrl}/cards/likes/${cardID}`, {
      method: "PUT",
      headers: this.options.headers,
    }).then(this._processStatus);
  }
  deleteCardLikes(cardID) {
    return fetch(`${this.options.baseUrl}/cards/likes/${cardID}`, {
      method: "DELETE",
      headers: this.options.headers,
    }).then(this._processStatus);
  }

  deleteCardFromServer(cardID) {
    return fetch(`${this.options.baseUrl}/cards/${cardID}`, {
      method: "DELETE",
      headers: this.options.headers,
    }).then(this._processStatus);
  }

  loadAvatarToServer(linkInputOfAvatar) {
    return fetch(`${this.options.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.options.headers,
      body: JSON.stringify({
        avatar: linkInputOfAvatar,
      }),
    }).then(this._processStatus);
  }

  loadProfileInfoToServer(nameInput, jobInput) {
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.options.headers,
      body: JSON.stringify({
        name: nameInput,
        about: jobInput,
      }),
    }).then(this._processStatus);
  }
}
