// const config = {
//   baseUrl: "https://nomoreparties.co/v1/plus-cohort-9/users/me",
//   headers: {
//     authorization: "1001ec3d-141e-43d4-994e-a14ef4d63d1d",
//     "Content-Type": "application/json",
//   },
// };
function processStatus(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getProfileInfoFromServer = () => {
  return fetch("https://nomoreparties.co/v1/plus-cohort-9/users/me", {
    method: "GET",
    headers: {
      authorization: "1001ec3d-141e-43d4-994e-a14ef4d63d1d",
      "Content-Type": "application/json",
    },
  }).then(processStatus);
};

export const getCardsFromServer = () => {
  return fetch("https://nomoreparties.co/v1/plus-cohort-9/cards", {
    method: "GET",
    headers: {
      authorization: "1001ec3d-141e-43d4-994e-a14ef4d63d1d",
      "Content-Type": "application/json",
    },
  }).then(processStatus);
};

export const loadCardToServer = (linkInput, cardNameInput) => {
  return fetch("https://nomoreparties.co/v1/plus-cohort-9/cards", {
    method: "POST",
    headers: {
      authorization: "1001ec3d-141e-43d4-994e-a14ef4d63d1d",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: cardNameInput,
      link: linkInput,
    }),
  }).then(processStatus);
};

export const countCardLikes = (cardID, likeMethod) => {
  return fetch(
    `https://nomoreparties.co/v1/plus-cohort-9/cards/likes/${cardID}`,
    {
      method: likeMethod,
      headers: {
        authorization: "1001ec3d-141e-43d4-994e-a14ef4d63d1d",
        "Content-Type": "application/json",
      },
    }
  ).then(processStatus);
};

export const deleteCardFromServer = (cardID) => {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-9/cards/${cardID}`, {
    method: "DELETE",
    headers: {
      authorization: "1001ec3d-141e-43d4-994e-a14ef4d63d1d",
      "Content-Type": "application/json",
    },
  }).then(processStatus);
};

export const loadAvatarToServer = (linkInputOfAvatar) => {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-9/users/me/avatar`, {
    method: "PATCH",
    headers: {
      authorization: "1001ec3d-141e-43d4-994e-a14ef4d63d1d",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      avatar: linkInputOfAvatar,
    }),
  }).then(processStatus);
};

export const loadProfileInfoToServer = (nameInput, jobInput) => {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-9/users/me`, {
    method: "PATCH",
    headers: {
      authorization: "1001ec3d-141e-43d4-994e-a14ef4d63d1d",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameInput,
      about: jobInput,
    }),
  }).then(processStatus);
};
