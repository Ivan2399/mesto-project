export const cards = document.querySelector('.elements');
// 
export const profile = document.querySelector('.profile');
export const profileName = profile.querySelector('.profile__name');
export const hobby = profile.querySelector('.profile__hobby');
export const avatar = profile.querySelector('.profile__avatar');
// buttons
export const addButton = profile.querySelector('.profile__button-add');
export const avatarEditButton = profile.querySelector('.profile__avatar-button-edit');
export const editButton = profile.querySelector('.profile__button-edit');
export const exitButtons = document.querySelectorAll('.popup__button-exit');
// popup
export const popupOverlays = document.querySelectorAll('.popup');
export const popupAvatarEdit = document.querySelector('#popup-avatar-edit');
export const popupEdit = document.querySelector('#popup-edit');
export const popupAdd = document.querySelector('#popup-add');
export const popupOpenImage = document.querySelector('#popup-image');
export const popupImage =  popupOpenImage.querySelector('.popup__image');
export const popupImageTitle =  popupOpenImage.querySelector('.popup__image-title');
// inputs
export const linkInputOfAvatar = popupAvatarEdit.querySelector('.popup__input-item_type_link');
export const nameInput = formEditProfileElement.querySelector('.popup__input-item_type_name');
export const jobInput = formEditProfileElement.querySelector('.popup__input-item_type_profession');
export const cardNameInput = formAddElement.querySelector('.popup__input-item_type_card-name');
export const linkInput = formAddElement.querySelector('.popup__input-item_type_link');
// 
export const formAvatarEdit =  popupAvatarEdit.querySelector('.popup__form');
export const formEditProfileElement =  popupEdit.querySelector('.popup__form');
export const formAddElement =  popupAdd.querySelector('.popup__form');





export const initialCards = [
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