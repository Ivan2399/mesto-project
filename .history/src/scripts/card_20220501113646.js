import {
  cards,
  popupAdd,
  cardNameInput,
  linkInput,
  popupOpenImage,
  popupImage,
  popupImageTitle,
} from "./constants";
import { openPopup, closePopup } from "./utils.js";

const cardTemplate = document.querySelector("#card").content;

function createCard(link, name) {
  const cardElement = cardTemplate
    .querySelector(".elements__element")
    .cloneNode(true);
  cardElement.querySelector(".elements__image").src = link;
  cardElement.querySelector(".elements__alt").alt = name;
  cardElement.querySelector(".elements__title").textContent = name;
  likeCard(cardElement);
  deleteCard(cardElement);
  openCardImage(cardElement);
  return cardElement;
}

function handleFotoSubmit(evt) {
  evt.preventDefault();
  const cardElement = createCard(linkInput.value, cardNameInput.value);
  cards.prepend(cardElement);
  closePopup(popupAdd);
}

function likeCard(cardElement) {
  cardElement
    .querySelector(".elements__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("elements__like_active");
    });
}

function deleteCard(cardElement) {
  cardElement
    .querySelector(".elements__delete")
    .addEventListener("click", function (evt) {
      cardElement.remove();
    });
}

function openCardImage(cardElement) {
  cardElement
    .querySelector(".elements__image")
    .addEventListener("click", function () {
      openPopup(popupOpenImage);
      popupImage.src = cardElement.querySelector(".elements__image").src; //Ищу картинку
      popupImage.alt = cardElement.querySelector(".elements__alt").alt; // Ищу alt
      popupImageTitle.textContent =
        cardElement.querySelector(".elements__title").textContent; // Ищу текст под картинкой
    });
}

export { createCard, handleFotoSubmit, likeCard, deleteCard, openCardImage };
