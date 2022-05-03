import "../index.css";
import { openPopup, closePopup, resetForm, renderLoading } from "./utils.js";
import { createCard } from "./card.js";
import { enableValidation, resetValidation } from "./validate.js";
import {
  getCardsFromServer,
  getProfileInfoFromServer,
  loadCardToServer,
  loadAvatarToServer,
  loadProfileInfoToServer,
} from "./api.js";
import {
  cards,
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
  popupEdit,
  profileForm,
  nameInput,
  jobInput,
  popupAdd,
  formAddElement,
  cardNameInput,
  linkInput,
  exitButtons,
  validationConfig
} from "./constants.js";

Promise.all([getProfileInfoFromServer(), getCardsFromServer()])
  .then(([userData, cardsFromServer]) => {
    profileName.textContent = userData.name;
    profileName.dataset.id = userData._id;
    hobby.textContent = userData.about;
    avatar.src = userData.avatar;

    cardsFromServer.forEach((item) => {
      const cardElement = createCard(item);
      cards.append(cardElement);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// закрытие попапов
exitButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    closePopup(item.closest(".popup"));
  });
});

// закрытие попапов по клику на оверлей
popupOverlays.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(evt.target);
    }
  });
});

//edit profile
editButton.addEventListener("click", function () {
  resetForm(popupEdit);
  resetValidation(popupEdit);
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = hobby.textContent;
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, evt);
  loadProfileInfoToServer(nameInput.value, jobInput.value)
    .then((result) => {
      profileName.textContent = nameInput.value;
      hobby.textContent = jobInput.value;
      closePopup(popupEdit);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, evt);
    });
}
profileForm.addEventListener("submit", handleProfileFormSubmit);

//edit avatar

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

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, evt);
  loadAvatarToServer(linkInputOfAvatar.value)
    .then((result) => {
      avatar.src = linkInputOfAvatar.value;
      closePopup(popupAvatarEdit);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, evt);
    });
}
formAvatarEdit.addEventListener("submit", handleAvatarFormSubmit);

//add foto
addButton.addEventListener("click", function () {
  resetForm(popupAdd);
  resetValidation(popupAdd);
  openPopup(popupAdd);
});

function handleFotoFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, evt);
  loadCardToServer(linkInput.value, cardNameInput.value)
    .then((result) => {
      const cardElement = createCard(result);
      cards.prepend(cardElement);
      closePopup(popupAdd);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, evt);
    });
}
formAddElement.addEventListener("submit", handleFotoFormSubmit);

enableValidation(validationConfig);

