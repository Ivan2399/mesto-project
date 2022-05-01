import "./index.css";
import {
  profileName,
  hobby,
  editButton,
  addButton,
  avatar,
  avatarEditButton,
  popupOverlays,
  popupAvatarEdit,
  formAvatarEdit,
  linkInputOfAvatar,
  cards,
  popupEdit,
  formEditProfileElement,
  nameInput,
  jobInput,
  popupAdd,
  formAddElement,
  exitButtons,
  initialCards
} from "./scripts/constants";
import { openPopup, closePopup, resetForm } from "./scripts/utils";
import { createCard, handleFotoSubmit } from "./scripts/card";
import { enableValidation, resetValidation } from "./scripts/validate";

initialCards.forEach((item) => {
  const cardElement = createCard(item.link, item.name);
  cards.append(cardElement);
});

// close pop
exitButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    closePopup(item.closest(".popup"));
  });
});

// close overlay
popupOverlays.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(evt.target);
    }
  });
});

//edit
editButton.addEventListener("click", function () {
  resetForm(popupEdit);
  resetValidation(popupEdit);
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = hobby.textContent;
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  hobby.textContent = jobInput.value;
  closePopup(popupEdit);
}
formEditProfileElement.addEventListener("submit", handleProfileFormSubmit);

//edit ava

avatar.addEventListener("mouseover", function (evt) {
  avatarEditButton.classList.add("profile__avatar-button-edit_visible");
});
avatarEditButton.addEventListener("mouseout", function (evt) {
  avatarEditButton.classList.remove("profile__avatar-button-edit_visible");
});

avatarEditButton.addEventListener("click", function () {
  resetForm(popupAvatarEdit);
  resetValidation(popupAvatarEdit);
  openPopup(popupAvatarEdit);
});

function handleAvatarSubmit(evt) {
  evt.preventDefault();
  avatar.src = linkInputOfAvatar.value;
  closePopup(popupAvatarEdit);
}
formAvatarEdit.addEventListener("submit", handleAvatarSubmit);

//add
addButton.addEventListener("click", function () {
  resetForm(popupAdd);
  resetValidation(popupAdd);
  openPopup(popupAdd);
});

formAddElement.addEventListener("submit", handleFotoSubmit);

// validation
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input-item",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input-item_type_error",
  errorClass: "popup__error_visible",
});
