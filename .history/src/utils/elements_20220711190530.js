import { config } from "./Config";

export const elements = {
  cardsElementsContainer: document.querySelector(config.card.cardElements),
  cardsElementsTemplate: document.querySelector(
    config.card.selectorCardElements
  ),

  profileName: document.querySelector(config.profile.profileName),
  profileHobby: document.querySelector(config.profile.profileHobby),

  editButton: document.querySelector(config.profile.profileEditButton),
  editPopup: document.querySelector(config.popup.popupEdit),

  addPopup: document.querySelector(config.popup.popupAdd),
  addButton: document.querySelector(config.profile.profileAddButton),

  profileAvatarImage: document.querySelector(config.profile.profileAvatar),
  avatarPopup: document.querySelector(config.popup.popupEditAvatar),
};
export const forms = {
  editForm: elements.editPopup.querySelector(config.form.formSelector),
  addForm: elements.addPopup.querySelector(config.form.formSelector),
  avatarForm: elements.avatarPopup.querySelector(config.form.formSelector),
};
