import "../index.css";
// import { openPopup, closePopup, resetForm, renderLoading } from "./utils.js";
import Popup from "./Popup";
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";
import FormValidation from "./FormValidation";
import Api from "./api";
import UserInfo from "./UserInfo";

import { apiConfig } from "./constants";
// import { createCard } from "./Card.js";
// import { enableValidation, resetValidation } from "./FormValidation.js";
import { config } from "../utils/config";
import { elements, forms } from "../utils/elements";

import Card from "../components/card";

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
// import {
//   getCardsFromServer,
//   getProfileInfoFromServer,
//   loadCardToServer,
//   loadAvatarToServer,
//   loadProfileInfoToServer,
// } from "./Api.js";
// import Api from "./Api";
// import {
//   cards,
//   profileName,
//   hobby,
//   editButton,
//   addButton,
//   avatar,
//   avatarEditButton,
//   popupOverlays,
//   popupAvatarEdit,
//   formAvatarEdit,
//   linkInputOfAvatar,
//   popupEdit,
//   profileForm,
//   nameInput,
//   jobInput,
//   popupAdd,
//   formAddElement,
//   cardNameInput,
//   linkInput,
//   exitButtons,
//   validationConfig
// } from "./constants.js";

// const api = new Api({
//   baseUrl: 'https://nomoreparties.co/v1/cohort-42',
//   headers: {
//     authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
//     'Content-Type': 'application/json'
//   }
// });

const popupEditProfile = new PopupWithForm(config.popup.popupEdit);
const popupAddCard = new PopupWithForm(config.popup.popupAdd);
const popupEditAvatar = new PopupWithForm(config.popup.popupEditAvatar);
const api = new Api(apiConfig);
const user = new UserInfo(
  {
    nameSelector: config.profile.profileName,
    hobbySelector: config.profile.profileHobby,
    avatarSelector: config.profile.profileAvatar,
  },
  api
);

Promise.all([api.getProfileInfoFromServer(), api.getCardsFromServer()])
  .then(([userData, cardsFromServer]) => {
    // config.profile.profileName.textContent = userData.name;
    // config.profile.profileName.dataset.id = userData._id;
    // hobby.textContent = userData.about;
    // avatar.src = userData.avatar;

    // cardsFromServer.forEach((item) => {
    //   const cardElement = createCard(item);
    //   cards.append(cardElement);
    // });
  })
  // .catch((err) => {
  //   console.log(err);
  // });

// закрытие попапов
// exitButtons.forEach(function (item) {
//   item.addEventListener("click", function () {
//     closePopup(item.closest(config.popup.popupSelector));
//   });
// });

// закрытие попапов по клику на оверлей
// popupOverlays.forEach(function (item) {
//   item.addEventListener("click", function (evt) {
//     if (evt.target.classList.contains("popup_opened")) {
//       closePopup(evt.target);
//     }
//   });
// });

//edit profile
elements.editButton.addEventListener("click", function () {
  popupEditProfile.openPopup();
  const editFormValidation = new FormValidation(forms.editForm);
  editFormValidation.enableValidation();
  // resetForm(popupEdit);
  // resetValidation(popupEdit);
  // openPopup(popupEdit);
  // nameInput.value = profileName.textContent;
  // jobInput.value = hobby.textContent;
});
elements.addButton.addEventListener("click", function () {
  popupAddCard.openPopup();
  const addFormValidation = new FormValidation(forms.addForm);
  addFormValidation.enableValidation();
});
elements.profileAvatarImage.addEventListener("click", function () {
  popupEditAvatar.openPopup();
  const avatarFormValidation = new FormValidation(forms.avatarForm);
  avatarFormValidation.enableValidation();
});

//edit avatar

// avatar.addEventListener("mouseover", function (evt) {
//   avatarEditButton.classList.add("profile__avatar-button-edit_visible");
// });
// avatarEditButton.addEventListener("mouseout", function (evt) {
//   avatarEditButton.classList.remove("profile__avatar-button-edit_visible");
// });

// avatarEditButton.addEventListener("click", function () {
//   resetForm(popupAvatarEdit);
//   resetValidation(popupAvatarEdit);
//   openPopup(popupAvatarEdit);
// });

// formAvatarEdit.addEventListener("submit", handleAvatarFormSubmit);

// //add foto
// addButton.addEventListener("click", function () {
//   resetForm(popupAdd);
//   resetValidation(popupAdd);
//   openPopup(popupAdd);
// });

// enableValidation(validationConfig);
