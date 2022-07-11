import { config } from "./Config";

export const elements = {
  cardsElementsContainer: document.querySelector(config.card.cardElements),
  cardsElementsTemplate: document.querySelector(
    config.card.selectorCardElements
  ),

  profileName: document.querySelector(config.profile.profileName),
  profileHobby: document.querySelector(config.profile.profileHobby),
  profileAvatarImage: document.querySelector(config.profile.profileAvatar),

  editButton: document.querySelector(config.profile.profileEditButton),
  editPopup: document.querySelector(config.popup.popupEdit),
  addButton: document.querySelector(config.profile.profileAddButton),
};
export const forms = {
  editForm: elements.editPopup.querySelector(config.form.formSelector),
};
