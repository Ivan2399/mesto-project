import { card, cardsContainer, popupImage, popupImageTitle } from "./constants";

export default function Cards() {
  const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
  ];

  function createCard(link, name) {
    const cardItem = card.querySelector(".table__card").cloneNode(true);
    cardItem.querySelector(".table__image").src = link;
    cardItem.querySelector(".table__image").alt = name;
    cardItem.querySelector(".table__title").textContent = name;
    setLikeCardEventListener(cardItem);
    setDeleteCardEventListner(cardItem);
    setCardImageClickListener(cardItem);
    return cardItem;
  }

  initialCards.forEach((item) => {
    const cardItem = createCard(item.link, item.name);
    cardsContainer.append(cardItem);
  });

  function setCardImageClickListener(cardItem) {
    cardItem
      .querySelector(".table__image")
      .addEventListener("click", function () {
        openPopup(popupImg);
        popupImage.src = cardItem.querySelector(".table__image").src;
        popupImage.alt = cardItem.querySelector(".table__image").alt;
        popupImageTitle.textContent =
          cardItem.querySelector(".table__title").textContent;
      });
  }

  function setLikeCardEventListener(cardItem) {
    cardItem
      .querySelector(".table__button")
      .addEventListener("click", function (evt) {
        evt.target.classList.toggle("table__button_active");
      });
  }

  function setDeleteCardEventListner(cardItem) {
    cardItem
      .querySelector(".table__delete")
      .addEventListener("click", function (evt) {
        cardItem.remove();
      });
  }
}
