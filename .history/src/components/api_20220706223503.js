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
    }).then(processStatus);
  }

  getCardsFromServe() {
    return fetch(`${this.options.baseUrl}/cards`, {
      method: "GET",
      headers: this.options.headers,
    }).then(processStatus);
  }

  loadCardToServer(linkInput, cardNameInput) {
    return fetch(`${this.options.baseUrl}/cards`, {
      method: "POST",
      headers: this.options.headers,
      body: JSON.stringify({
        name: cardNameInput,
        link: linkInput,
      }),
    }).then(processStatus);
  }

  countCardLikes(cardID, likeMethod) {
    return fetch(`${this.options.baseUrl}/cards/likes/${cardID}`, {
      method: likeMethod,
      headers: this.options.headers,
    }).then(processStatus);
  }

  deleteCardFromServer(cardID) {
    return fetch(`${this.options.baseUrl}/cards/${cardID}`, {
      method: "DELETE",
      headers: this.options.headers,
    }).then(processStatus);
  }

  loadAvatarToServer(linkInputOfAvatar) {
    return fetch(`${this.options.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.options.headers,
      body: JSON.stringify({
        avatar: linkInputOfAvatar,
      }),
    }).then(processStatus);
  }

  loadProfileInfoToServer(nameInput, jobInput) {
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.options.headers,
      body: JSON.stringify({
        name: nameInput,
        about: jobInput,
      }),
    }).then(processStatus);
  }
}
