import { enableValidation } from "./validate";

export const cardTemplate = document.querySelector("#card").content;
export const popupOpenImage = document.querySelector("#popup-image");
export const popupImage = popupOpenImage.querySelector(".popup__image");
export const popupImageTitle = popupOpenImage.querySelector(
  ".popup__image-title"
);
export const cards = document.querySelector(".elements");

export const profile = document.querySelector(".profile");
export const profileName = profile.querySelector(".profile__name");
export const hobby = profile.querySelector(".profile__hobby");
export const editButton = profile.querySelector(".profile__button-edit");
export const addButton = profile.querySelector(".profile__button-add");
export const avatar = profile.querySelector(".profile__avatar");
export const avatarEditButton = profile.querySelector(
  ".profile__avatar-button-edit"
);

export const popupOverlays = document.querySelectorAll(".popup");

export const popupAvatarEdit = document.querySelector("#popup-avatar-edit");
export const formAvatarEdit = popupAvatarEdit.querySelector(".popup__form");
export const linkInputOfAvatar = popupAvatarEdit.querySelector(
  ".popup__input-item_type_link"
);

export const popupEdit = document.querySelector("#popup-edit");
export const profileForm = popupEdit.querySelector(".popup__form");
export const nameInput = profileForm.querySelector(
  ".popup__input-item_type_name"
);
export const jobInput = profileForm.querySelector(
  ".popup__input-item_type_profession"
);

export const popupAdd = document.querySelector("#popup-add");
export const formAddElement = popupAdd.querySelector(".popup__form");
export const cardNameInput = formAddElement.querySelector(
  ".popup__input-item_type_card-name"
);
export const linkInput = formAddElement.querySelector(
  ".popup__input-item_type_link"
);

export const exitButtons = document.querySelectorAll(".popup__button-exit");

export const apiConfig = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-9",
  headers: {
    authorization: "1001ec3d-141e-43d4-994e-a14ef4d63d1d",
    "Content-Type": "application/json",
  },
};

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input-item",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input-item_type_error",
  errorClass: "popup__error_visible",
};
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input-item",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input-item_type_error",
  errorClass: "popup__error_visible",
});
