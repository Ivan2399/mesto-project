import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(selector, submitFormHandler) {
    super(selector);
    this._submitFormHandler = submitFormHandler;
    this._inputs = this._form.querySelectorAll(".popup__input-item");
  }

  _getInputValues() {
    const inputValues = {};

    for (let input of this._inputs) {
      inputValues[input.name] = input.value;
    }

    return inputValues;
  }
  _setEventListner() {
    super._setEventListner();


    handleProfileFormSubmit(evt) {
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


      handleAvatarFormSubmit(evt) {
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


      handleFotoFormSubmit(evt) {
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
  }
  closePopup () {
    super.closePopup();
    popup.querySelector(".popup__form").reset();
  }
}
