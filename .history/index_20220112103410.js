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

// (function createContent() {
//   initialCards.map((item) => {
//     return cardsContainer.insertAdjacentHTML(
//       "afterbegin",
//       `<article class="table__card"><img class="table__image" src=${item.link} alt="Картинка"><div class="table__card-text"><h2 class="table__title">${item.name}</h2><button type="button" class="table__button table__button_active"></button></div></article>`
//     );
//   });
//   likeCard(cardsContainer);
//   deleteCard(cardsContainer);
// })();

// function openPopup(popup) {
//   popup.classList.add("popup__opened");
// }

// function openCardImage(cardsContainer) {
//   cardsContainer
//     .querySelector(".table__image")
//     .addEventListener("click", function () {
//       openPopup(popupImg);
//     });
//   popupImage.src = cardsContainer.querySelector(".table__image").src;
//   popupImage.alt = cardsContainer.querySelector(".table__image").textContent;
//   popupImageTitle.textContent =
//     cardsContainer.querySelector(".table__title").textContent;
// }

// function likeCard(cardsContainer) {
//     cardsContainer
//     .querySelector(".popup__button_type_like")
//     .addEventListener("click", function (evt) {
//       evt.target.classList.toggle("table__button_active");
//     });
// }

// function deleteCard(cardsContainer) {
//     cardsContainer
//     .querySelector(".table__delete")
//     .addEventListener("click", function (evt) {
//         cardsContainer.remove();
//     });
// }

// function popupClose(popup) {
//   popup.classList.remove("popup__opened");
// }

function createCard(link, name) {
    const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);
    cardElement.querySelector('.elements__image').src = link;
    cardElement.querySelector('.elements__image').alt = name;
    cardElement.querySelector('.elements__title').textContent = name;
    likeCard(cardElement);
    deleteCard(cardElement);
    openCardImage(cardElement);
    return cardElement;
  }
    
  initialCards.forEach((item) => {
    const cardElement = createCard(item.link, item.name);
    cards.append(cardElement);
  });
  
  function openPopup(popup) {
    popup.classList.add('popup_opened');
  }
  
  function closePopup(popup) {
    popup.classList.remove('popup_opened');
  }
  
  function openCardImage(cardElement) {
    cardElement.querySelector('.elements__image').addEventListener('click', function () {
      openPopup(popupOpenImage);
      popupImage.src = cardElement.querySelector('.elements__image').src;
      popupImage.alt = cardElement.querySelector('.elements__image').textContent;
      popupImageTitle.textContent = cardElement.querySelector('.elements__title').textContent;
    }); 
  }
  
  function likeCard(cardElement) {
    cardElement.querySelector('.elements__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('elements__like_active');
    }); 
  }
  
  function deleteCard(cardElement) {
    cardElement.querySelector('.elements__delete').addEventListener('click', function (evt) {
      cardElement.remove();
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
  
  //add foto
  
  addButton.addEventListener('click', function() { 
    openPopup(popupAdd);
  });
  
  exitButtonAddForm.addEventListener('click', function() { 
      closePopup(popupAdd);
      linkInput.value = "";
      cardNameInput.value = "";
  });
  
  function submitFotoHandler (evt) {
      evt.preventDefault();
      const cardElement = createCard(linkInput.value, cardNameInput.value);
      cards.prepend(cardElement);
      closePopup(popupAdd);
      linkInput.value = "";
      cardNameInput.value = "";
  }
  formAddElement.addEventListener('submit', submitFotoHandler);
  
  // open foto
  exitButtonImageForm.addEventListener('click', function() { 
    closePopup(popupOpenImage);
    popupImage.src = "";
    popupImageTitle.textContent = "";
  });
