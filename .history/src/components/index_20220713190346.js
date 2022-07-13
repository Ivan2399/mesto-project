import "../index.css";

import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";
import FormValidation from "./FormValidation";
import Api from "./api";
import UserInfo from "./UserInfo";

import { apiConfig } from "./constants";
import { config } from "../utils/config";
import { elements, forms } from "../utils/elements";

import Card from "../components/card";
import Section from "./Section";

let cardList;

const popupImage = new PopupWithImage(config.popup.popupImageOpen);

const popupEditProfile = new PopupWithForm(config.popup.popupEdit, (body) => {
  return api
    .loadProfileInfoToServer(body)
    .then((res) => {
      user.setUserInfo(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
const editFormValidation = new FormValidation(forms.editForm);
editFormValidation.enableValidation();

const popupAddCard = new PopupWithForm(config.popup.popupAdd, (body) => {
  return api
    .loadCardToServer(body)
    .then((res) => {
      cardList.addItem(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

const addFormValidation = new FormValidation(forms.addForm);
addFormValidation.enableValidation();

const popupEditAvatar = new PopupWithForm(
  config.popup.popupEditAvatar,
  (body) => {
    return api
      .loadAvatarToServer(body)
      .then((res) => {
        user.setUserInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

const avatarFormValidation = new FormValidation(forms.avatarForm);
avatarFormValidation.enableValidation();

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

    cardList = new Section(
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
            config.card.selectorCardElements,
            config
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
});
elements.addButton.addEventListener("click", function () {
  popupAddCard.openPopup();
});
elements.profileAvatarImage.addEventListener("click", function () {
  popupEditAvatar.openPopup();
});
