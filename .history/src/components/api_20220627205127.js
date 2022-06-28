import { apiConfig } from "./constants";

class Api {
  constructor(options) {
    this.options = options;
    this.loadCardToServer = this.loadCardToServer.bind(this);
    this.loadAvatarToServer = this.loadAvatarToServer.bind(this);
    this.loadProfileInfoToServer = this.loadProfileInfoToServer.bind(this);
  }

  processStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getProfileInfoFromServer() {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
      method: "GET",
      headers: apiConfig.headers,
    }).then(processStatus);
  }

  getCardsFromServe() {
    return fetch(`${apiConfig.baseUrl}/cards`, {
      method: "GET",
      headers: apiConfig.headers,
    }).then(processStatus);
  }

  loadCardToServer(linkInput, cardNameInput) {
    return fetch(`${apiConfig.baseUrl}/cards`, {
      method: "POST",
      headers: apiConfig.headers,
      body: JSON.stringify({
        name: cardNameInput,
        link: linkInput,
      }),
    }).then(processStatus);
  }

  countCardLikes(cardID, likeMethod) {
    return fetch(`${apiConfig.baseUrl}/cards/likes/${cardID}`, {
      method: likeMethod,
      headers: apiConfig.headers,
    }).then(processStatus);
  }

  deleteCardFromServer(cardID) {
    return fetch(`${apiConfig.baseUrl}/cards/${cardID}`, {
      method: "DELETE",
      headers: apiConfig.headers,
    }).then(processStatus);
  }

  loadAvatarToServer(linkInputOfAvatar) {
    return fetch(`${apiConfig.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: apiConfig.headers,
      body: JSON.stringify({
        avatar: linkInputOfAvatar,
      }),
    }).then(processStatus);
  }

  loadProfileInfoToServer(nameInput, jobInput) {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
      method: "PATCH",
      headers: apiConfig.headers,
      body: JSON.stringify({
        name: nameInput,
        about: jobInput,
      }),
    }).then(processStatus);
  }
}
