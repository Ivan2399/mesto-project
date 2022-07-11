// import { openPopup } from "./utils.js";
// import { countCardLikes, deleteCardFromServer } from "./Api.js";
// import {
//   cardTemplate,
//   popupOpenImage,
//   popupImage,
//   popupImageTitle,
//   profileName,
// } from "./constants.js";

import { config } from "../utils/config";

export default class Card {
  constructor(
    { data, handleCardClick, likeCard, deleteCard, userId },
    selector
  ) {
    this.data = data;
    this.handleCardClick = handleCardClick;
    this.likeCard = likeCard;
    this.deleteCard = deleteCard;
    this.selector = selector;
    this.userId = userId;
  }

  _getElement() {
    return document
      .querySelector(this.selector)
      .content.querySelector(config.card.cardElements)
      .cloneNode(true);
  }
  _handleImageClick() {
    this.handleCardClick(this.data);
  }
  _setEventListener() {
    this.cardImage.addEventListener("click", this._handleImageClick); // открытие картинка

    this.cardLikeButton.addEventListener("click", () => {
      this.likeCard(this.data._id, this.cardLikeButton, this.cardLikeCounter); // лайк
    });
    if (this.data.owner._id === this.userId) {
      // лайк чужой карточки
      this.cardDeleteButton.classList.add(
        config.card.cardElementsDeleteButtonVisible
      );
      this.cardDeleteButton.addEventListener("click", () => {
        // удаление
        this.deleteCard(this.data._id);
      });
    }
  }

  _myLike() {
    let res = false;

    this.data.likes.foreach((item) => {
      if (item._id === this.userId) {
        res = true;
      }
    });
    return res;
  }

  _generate() {
    this.cardImage = this.cardElement.querySelector(
      config.card.cardElementsImage
    );
    this.cardLikeButton = this.cardElement.querySelector(
      config.card.cardElementsLikeButton
    );
    this.cardLikeCounter = this.cardElement.querySelector(
      config.card.cardElementsLikeCounter
    );
    this.cardDeleteButton = this.cardElement.querySelector(
      config.card.cardElementsDeleteButton
    );

    this.cardImage.src = this.data.link;
    this.cardImage.alt = this.data.name;

    this.cardElement.id = this.data._id;
    this.cardElement.querySelector(config.card.cardElementsTitle).textContent =
      this.data.name;

    if (this._myLike()) {
      this.cardLikeButton.classList.add(config.card.cardElementLikeActive); // мои лайки
    }
    if (this.data.likes.length > 0) {
      this.cardLikeCounter.textContent = this.data.likes.length; // счетчик лайков
    }
  }
  createCard() {
    this.cardElement = this._getElement();

    this._generate();
    this._setEventListener();
    return this.cardElement;
  }
  //   openCardImage(cardElement) {
  //     const cardImage = cardElement.querySelector(".elements__image");
  //     cardImage.addEventListener("click", function () {
  //       openPopup(popupOpenImage);
  //       popupImage.src = cardImage.src;
  //       popupImage.alt = cardImage.alt;
  //       popupImageTitle.textContent = cardImage.alt;
  //     });
  //   }
  // likeCard(cardElement) {
  //   cardElement
  //     .querySelector(".elements__like")
  //     .addEventListener("click", function (evt) {
  //       const likesCounter = cardElement.querySelector(
  //         ".elements__like-counter"
  //       );
  //       const cardID = cardElement.dataset.id;
  //       if (!evt.target.classList.contains("elements__like_active")) {
  //         countCardLikes(cardID, "PUT")
  //           .then((result) => {
  //             evt.target.classList.toggle("elements__like_active");
  //             likesCounter.textContent = result.likes.length;
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //           });
  //       } else {
  //         countCardLikes(cardID, "DELETE")
  //           .then((result) => {
  //             evt.target.classList.toggle("elements__like_active");
  //             likesCounter.textContent = result.likes.length;
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //           });
  //       }
  //     });
  // }
  //   deleteCard(cardElement) {
  //     cardElement
  //       .querySelector(".elements__delete")
  //       .addEventListener("click", function (evt) {
  //         deleteCardFromServer(cardElement.dataset.id).then((result) => {
  //           cardElement.remove();
  //         });
  //       });
  //   }
  //   createCard(card) {
  //     const cardElement = this._template.cloneNode(true);
  //     //   .querySelector(".elements__element")
  //     //   .cloneNode(true);
  //     const cardImage = cardElement.querySelector(".elements__image");
  //     cardImage.src = card.link;
  //     cardImage.alt = card.name;
  //     cardElement.querySelector(".elements__title").textContent = card.name;
  //     cardElement.querySelector(".elements__like-counter").textContent =
  //       card.likes.length;
  //     cardElement.dataset.id = card._id;
  //     if (card.owner._id === profileName.dataset.id) {
  //       cardElement
  //         .querySelector(".elements__delete")
  //         .classList.add("elements__delete_visible");
  //     }
  //     // черные лайки только у меня , у остальных прозрачные
  //     const likesArray = card.likes;
  //     const nameMine = likesArray.some(function (name) {
  //       return name.name === profileName.textContent;
  //     });
  //     if (nameMine) {
  //       cardElement
  //         .querySelector(".elements__like")
  //         .classList.add("elements__like_active");
  //     }
  //     //
  //     likeCard(cardElement);
  //     deleteCard(cardElement);
  //     openCardImage(cardElement);
  //     return cardElement;
  //   }
}

// export default Card;
// открыте картинки
// function openCardImage(cardElement) {
//   const cardImage = cardElement.querySelector(".elements__image");
//   cardImage.addEventListener("click", function () {
//     openPopup(popupOpenImage);
//     popupImage.src = cardImage.src;
//     popupImage.alt = cardImage.alt;
//     popupImageTitle.textContent = cardImage.alt;
//     // popupImageTitle.textContent =
//     //   cardElement.querySelector(".elements__title").textContent;
//   });
// }
// это лайки
// function likeCard(cardElement) {
//   cardElement
//     .querySelector(".elements__like")
//     .addEventListener("click", function (evt) {
//       const likesCounter = cardElement.querySelector(".elements__like-counter");
//       const cardID = cardElement.dataset.id;
//       if (!evt.target.classList.contains("elements__like_active")) {
//         countCardLikes(cardID, "PUT")
//           .then((result) => {
//             evt.target.classList.toggle("elements__like_active");
//             likesCounter.textContent = result.likes.length;
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       } else {
//         countCardLikes(cardID, "DELETE")
//           .then((result) => {
//             evt.target.classList.toggle("elements__like_active");
//             likesCounter.textContent = result.likes.length;
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       }
//     });
// }
// удаление только своих карточек
// function deleteCard(cardElement) {
//   cardElement
//     .querySelector(".elements__delete")
//     .addEventListener("click", function (evt) {
//       deleteCardFromServer(cardElement.dataset.id).then((result) => {
//         cardElement.remove();
//       });
//     });
// }
// создание карточки
// export function createCard(card) {
//   const cardElement = cardTemplate
//     .querySelector(".elements__element")
//     .cloneNode(true);
//   const cardImage = cardElement.querySelector(".elements__image");
//   cardImage.src = card.link;
//   cardImage.alt = card.name;
//   cardElement.querySelector(".elements__title").textContent = card.name;
//   cardElement.querySelector(".elements__like-counter").textContent =
//     card.likes.length;
//   cardElement.dataset.id = card._id;
//   if (card.owner._id === profileName.dataset.id) {
//     cardElement
//       .querySelector(".elements__delete")
//       .classList.add("elements__delete_visible");
//   }
//   // черные лайки только у меня , у остальных прозрачные
//   const likesArray = card.likes;
//   const nameMine = likesArray.some(function (name) {
//     return name.name === profileName.textContent;
//   });
//   if (nameMine) {
//     cardElement
//       .querySelector(".elements__like")
//       .classList.add("elements__like_active");
//   }
//   //
//   likeCard(cardElement);
//   deleteCard(cardElement);
//   openCardImage(cardElement);
//   return cardElement;
// }
