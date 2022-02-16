const cardsContainer = document.querySelector(".table__container");
const card = document.querySelector("#card").content;
// профиль
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__nickname");
const profileHobby = profile.querySelector(".profile__hobbyname");
const profileAddButton = profile.querySelector(".profile__add");
const profileEditButton = profile.querySelector(".profile__edit");
// попап редактирования пользователя
const popupEdit = document.querySelector("#edit");
const formElement = popupEdit.querySelector(".popup__forms");
const nameInput = formElement.querySelector(".popup__item_type_name");
const jobInput = formElement.querySelector(".popup__item_type_hobby");
const popupEditExitButton = popupEdit.querySelector(".popup__close");
// попап добавления карточки
const popupAdd = document.querySelector("#add");
const formAddElement = popupAdd.querySelector(".popup__forms");
const popupAddCardNameInput = formAddElement.querySelector(
  ".popup__item_type_card-name"
);
const popupAddCardLinkInput = formAddElement.querySelector(
  ".popup__item_type_card-link"
);
const popupAddExitButton = popupAdd.querySelector(".popup__close");
// попап открытия картинки
const popupImg = document.querySelector("#images");
const popupImage = popupImg.querySelector(".popup__image");
const popupImageTitle = popupImg.querySelector(".popup__image-title");
const popupImgExitButton = popupImg.querySelector(".popup__close");

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
  deleteCard(cardItem);
  openCardImage(cardItem);
  return cardItem;
}

initialCards.forEach((item) => {
  const cardItem = createCard(item.link, item.name);
  cardsContainer.append(cardItem);
});

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function openCardImage(cardItem) {
  cardItem
    .querySelector(".table__image")
    .addEventListener("click", function () {
      openPopup(popupImg);
      popupImage.src = cardItem.querySelector(".table__image").src;
      popupImage.alt = cardItem.querySelector(".table__image").textContent;
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

function deleteCard(cardItem) {
  cardItem
    .querySelector(".table__delete")
    .addEventListener("click", function (evt) {
      cardItem.remove();
    });
}
profileEditButton.addEventListener("click", function () {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileHobby.textContent;
});

popupEditExitButton.addEventListener("click", function () {
  closePopup(popupEdit);
});

function submitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileHobby.textContent = jobInput.value;
  closePopup(popupEdit);
}

formElement.addEventListener("submit", submitHandler);

profileAddButton.addEventListener('click', function() { 
    openPopup(popupAdd);
  });
  
  popupAddExitButton.addEventListener('click', function() { 
      closePopup(popupAdd);
      popupAddCardLinkInput.value = "";
      popupAddCardNameInput.value = "";
  });
  
  function submitCardHandler (evt) {
      evt.preventDefault();
      const cardItem = createCard(popupAddCardLinkInput.value, popupAddCardNameInput.value);
      cardsContainer.prepend(cardItem);
      closePopup(popupAdd);
      popupAddCardLinkInput.value = "";
      popupAddCardNameInput.value = "";
  }

  formAddElement.addEventListener('submit', submitCardHandler);
  
  popupImgExitButton.addEventListener('click', function() { 
    closePopup(popupImg);
    popupImage.classList.add(".table__image");
    popupImage.src = "";
    popupImageTitle.textContent = "";
  });
