import { openPopup } from "./utils.js";
import { countCardLikes, deleteCardFromServer } from "./api.js";
import {
  cardTemplate,
  popupOpenImage,
  popupImage,
  popupImageTitle,
  profileName,
} from "./constants.js";

// открыте картинки
function openCardImage(cardElement) {
  const cardImage = cardElement.querySelector(".elements__image");
  cardImage.addEventListener("click", function () {
    openPopup(popupOpenImage);
    popupImage.src = cardImage.src;
    popupImage.alt = cardImage.alt;
    popupImageTitle.textContent = cardImage.alt;
    // popupImageTitle.textContent =
    //   cardElement.querySelector(".elements__title").textContent;
  });
}
// это лайки
function likeCard(cardElement) {
  cardElement
    .querySelector(".elements__like")
    .addEventListener("click", function (evt) {
      const likesCounter = cardElement.querySelector(".elements__like-counter");
      const cardID = cardElement.dataset.id;
      if (!evt.target.classList.contains("elements__like_active")) {
        countCardLikes(cardID, "PUT")
          .then((result) => {
            evt.target.classList.toggle("elements__like_active");
            likesCounter.textContent = result.likes.length;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        countCardLikes(cardID, "DELETE")
          .then((result) => {
            evt.target.classList.toggle("elements__like_active");
            likesCounter.textContent = result.likes.length;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
}
// удаление только своих карточек
function deleteCard(cardElement) {
  cardElement
    .querySelector(".elements__delete")
    .addEventListener("click", function (evt) {
      deleteCardFromServer(cardElement.dataset.id).then((result) => {
        cardElement.remove();
      });
    });
}
// создание карточки
export function createCard(link, name, card) {
  name = card.name;
  link = card.link;
  console.log(name);
  const cardElement = cardTemplate
    .querySelector(".elements__element")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".elements__image");
  cardImage.src = link;
  cardImage.alt = name;
  cardElement.querySelector(".elements__title").textContent = name;
  cardElement.querySelector(".elements__like-counter").textContent =
    card.likes.length;
  cardElement.dataset.id = card._id;
  if (card.owner._id === profileName.dataset.id) {
    cardElement
      .querySelector(".elements__delete")
      .classList.add("elements__delete_visible");
  }
  // черные лайки только у меня , у остальных прозрачные
  const likesArray = card.likes;
  const nameMine = likesArray.some(function (name) {
    return name.name === profileName.textContent;
  });
  if (nameMine) {
    cardElement
      .querySelector(".elements__like")
      .classList.add("elements__like_active");
  }
  //
  likeCard(cardElement);
  deleteCard(cardElement);
  openCardImage(cardElement);
  return cardElement;
}
