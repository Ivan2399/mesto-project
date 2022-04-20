export const cardsContainer = document.querySelector(".table__container");
export const card = document.querySelector("#card").content;
// профиль
export const profile = document.querySelector(".profile");
export const profileName = profile.querySelector(".profile__nickname");
export const profileHobby = profile.querySelector(".profile__hobbyname");
export const profileAddButton = profile.querySelector(".profile__add");
export const profileEditButton = profile.querySelector(".profile__edit");
// попап редактирования пользователя
export const popupEdit = document.querySelector("#edit");
export const formEditElement = popupEdit.querySelector(".popup__forms");
export const nameInput = formEditElement.querySelector(".popup__item_type_name");
export const jobInput = formEditElement.querySelector(".popup__item_type_hobby");
export const popupEditExitButton = popupEdit.querySelector(".popup__close");
// попап добавления карточки
export const popupAdd = document.querySelector("#add");
export const formAddElement = popupAdd.querySelector(".popup__forms");
export const popupAddCardNameInput = formAddElement.querySelector(
  ".popup__item_type_card-name"
);
export const popupAddCardLinkInput = formAddElement.querySelector(
  ".popup__item_type_card-link"
);
export const popupAddExitButton = popupAdd.querySelector(".popup__close");
// попап открытия картинки
export const popupImg = document.querySelector("#images");
export const popupImage = popupImg.querySelector(".popup__image");
export const popupImageTitle = popupImg.querySelector(".popup__image-title");
export const popupImgExitButton = popupImg.querySelector(".popup__close");
