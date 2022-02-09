let cardsContainer = document.querySelector(".table__container");
let card = document.querySelector("#card").content;

let profile = document.querySelector(".profile");
let profileName = profile.querySelector(".profile__nickname");
let profileHobby = profile.querySelector(".profile__hobbyname");
let profileAddButton = profile.querySelector(".profile__add");
let profileEditButton = profile.querySelector(".profile__edit");
// попап редактирования пользователя
let popupEdit = document.querySelector("#edit");
let formElement = popupEdit.querySelector(".popup__forms");
let nameInput = formElement.querySelector(".popup__item_type_name");
let jobInput = formElement.querySelector(".popup__item_type_hobby");
let popupEditExitButton = popupEdit.querySelector(".popup__close");
// попап добавления карточки
let popupAdd = document.querySelector("#add");
let formAddElement = popupAdd.querySelector(".popup__forms");
let popupAddCardNameInput = formAddElement.querySelector(
  ".popup__item_type_card-name"
);
let popupAddCardLinkInput = formAddElement.querySelector(
  ".popup__item_type_card-link"
);
let popupAddExitButton = popupAdd.querySelector(".popup__close");
// попап открытия картинки
let popupImg = document.querySelector("#images");
let popupImage = popupImg.querySelector(".popup__image");
let popupImageTitle = popupImg.querySelector(".popup__image-title");
let popupImgExitButton = popupImg.querySelector(".popup__close");

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
  likeCard(cardItem);
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

function likeCard(cardItem) {
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

//edit profile
editButton.addEventListener('click', function() {
    openPopup(popupEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profession.textContent; 
  });
  
  exitButtonEditForm.addEventListener('click', function() { 
    closePopup(popupEdit);
  });
    
  function submitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profession.textContent = jobInput.value; 
    closePopup(popupEdit);
  }
  formElement.addEventListener('submit', submitHandler);
