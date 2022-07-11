import "../index.css";
// import { openPopup, closePopup, resetForm, renderLoading } from "./utils.js";
import Popup from "./Popup";
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";
import FormValidation from "./FormValidation";
// import { createCard } from "./Card.js";
// import { enableValidation, resetValidation } from "./FormValidation.js";
import { config } from "../utils/config";
import { elements,forms } from "../utils/elements";
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

const popupWithForm = new PopupWithForm(config.popup.popupEdit);

// Promise.all([getProfileInfoFromServer(), getCardsFromServer()])
//   .then(([userData, cardsFromServer]) => {
//     profileName.textContent = userData.name;
//     profileName.dataset.id = userData._id;
//     hobby.textContent = userData.about;
//     avatar.src = userData.avatar;

//     cardsFromServer.forEach((item) => {
//       const cardElement = createCard(item);
//       cards.append(cardElement);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

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
  popupWithForm.openPopup();
  const editFormValidation = new FormValidation(config, forms.editForm);
  editFormValidation.enableValidation();
  // resetForm(popupEdit);
  // resetValidation(popupEdit);
  // openPopup(popupEdit);
  // nameInput.value = profileName.textContent;
  // jobInput.value = hobby.textContent;
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
