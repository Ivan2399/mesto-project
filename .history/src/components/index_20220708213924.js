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
import Section from "./Section";

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

const popupImage = new PopupWithImage(config.popup.popupImageOpen);

const popupEditProfile = new PopupWithForm(config.popup.popupEdit);
const popupAddCard = new PopupWithForm(config.popup.popupAdd,api.loadCardToServer());
const popupEditAvatar = new PopupWithForm(config.popup.popupEditAvatar);
const api = new Api(apiConfig);
const user = new UserInfo(
  {
    nameSelector: config.profile.profileName,
    aboutSelector: config.profile.profileHobby,
    avatarSelector: config.profile.profileAvatar,
  },
  api
);

Promise.all([api.getProfileInfoFromServer(), api.getCardsFromServe()])
  .then(([userData, cardsFromServer]) => {
    user.setUserInfo(userData);
    const userId = user.getUserInfo()._id;

    const cardList = new Section(
      {
        item: cardsFromServer,
        render: (item) => {
          const card = new Card(
            {
              data: item,
              userId,
              handleCardClick: (image) => {
                popupImage.openPopup(image);
              },
              deleteCard: (cardID) => {
                api
                  .deleteCardFromServer(cardID)
                  .then(() => {
                    const myCard = document.getElementById(cardID);
                    myCard.remove();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              },
              likeCard: (cardID, likeElement, likeCounter) => {
                if (
                  !likeElement.classList.contains(
                    config.card.cardElementLikeActive
                  )
                ) {
                  api
                    .addCardLikes(cardID)
                    .then((card) => {
                      likeElement.classList.add(
                        config.card.cardElementLikeActive
                      );
                      if (card.likes.length > 0) {
                        likeCounter.textContent = card.likes.length;
                      } else {
                        likeCounter.textContent = "";
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                } else {
                  api
                    .deleteCardLikes(cardID)
                    .then((card) => {
                      likeElement.classList.remove(
                        config.card.cardElementLikeActive
                      );
                      if (card.likes.length > 0) {
                        likeCounter.textContent = card.likes.length;
                      } else {
                        likeCounter.textContent = "";
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              },
            },
            config.card.selectorCardElements
          );
          return card.createCard();
        },
      },
      config.card.elements
    );
    cardList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });


//edit profile
elements.editButton.addEventListener("click", function () {
  popupEditProfile.openPopup();
  const editFormValidation = new FormValidation(forms.editForm);
  editFormValidation.enableValidation();
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
