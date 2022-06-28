import { apiConfig } from "./constants";
function processStatus(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getProfileInfoFromServer = () => {
  return fetch(`${apiConfig.baseUrl}/users/me`, {
    method: "GET",
    headers: apiConfig.headers,
  }).then(processStatus);
};

export const getCardsFromServer = () => {
  return fetch(`${apiConfig.baseUrl}/cards`, {
    method: "GET",
    headers: apiConfig.headers,
  }).then(processStatus);
};

export const loadCardToServer = (linkInput, cardNameInput) => {
  return fetch(`${apiConfig.baseUrl}/cards`, {
    method: "POST",
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: cardNameInput,
      link: linkInput,
    }),
  }).then(processStatus);
};

export const countCardLikes = (cardID, likeMethod) => {
  return fetch(`${apiConfig.baseUrl}/cards/likes/${cardID}`, {
    method: likeMethod,
    headers: apiConfig.headers,
  }).then(processStatus);
};

export const deleteCardFromServer = (cardID) => {
  return fetch(`${apiConfig.baseUrl}/cards/${cardID}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  }).then(processStatus);
};

export const loadAvatarToServer = (linkInputOfAvatar) => {
  return fetch(`${apiConfig.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: apiConfig.headers,
    body: JSON.stringify({
      avatar: linkInputOfAvatar,
    }),
  }).then(processStatus);
};

export const loadProfileInfoToServer = (nameInput, jobInput) => {
  return fetch(`${apiConfig.baseUrl}/users/me`, {
    method: "PATCH",
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: nameInput,
      about: jobInput,
    }),
  }).then(processStatus);
};
