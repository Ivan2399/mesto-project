import Popup from "./Popup";
import { config } from "../utils/config";

export default class PopupWithForm extends Popup {
  constructor(selector, submitFormHandler) {
    super(selector);
    this._submitFormHandler = submitFormHandler;
    this._form = this._popupElement.querySelector(config.form.formSelector);
    this._submitButton = this._form.querySelector(
      config.form.sumbitSelectorButton
    );
    this._renderLoading = this._renderLoading.bind(this);
    this._inputs = this._form.querySelectorAll(config.form.formInputSelector);
  }

  _getInputValues() {
    const inputValues = {};
    for (let input of this._inputs) {
      inputValues[input.name] = input.value;
    }
    return inputValues;
  }
  _renderLoading(isLoading, evt) {
    if (isLoading) {
      evt.target._submitButton.textContent = "Сохранение...";
    } else {
      if (evt.target.closest(this.selector)) {
        evt.target._submitButton.textContent = "Создать";
      } else {
        evt.target._submitButton.textContent = "Сохранить";
      }
    }
  }
  //   _setButtonState(isSending) {
  //     this._submitButton.disabled = isSending;
  //     this._submitButton.textContent = isSending ? 'Загрузка...' : this._defualtSubmitButtonText;
  //   }

  _setEventListner() {
    super._setEventListner();
    this._form.addEventListener("submit", this._submitFormHandler);
  }
  _removeEventListner() {
    super._removeEventListner();
    // this._form.removeEventListner("submit", this._submitFormHandler);
  }
  _submitFormHandler = () => {
    evt.preventDefault();
    this._renderLoading(true, evt);
    const body = this._getInputValues();
    this._submitFormHandler(body)
      .then(() => this.closePopup())
      .finally(() => {
        this._renderLoading(false,evt);
      });
  };
  closePopup() {
    super.closePopup();
    this._form.reset();
  }
}
// function handleAvatarFormSubmit(evt) {
//   evt.preventDefault();
//   renderLoading(true, evt);
//   loadAvatarToServer(linkInputOfAvatar.value)
//     .then((result) => {
//       avatar.src = linkInputOfAvatar.value;
//       closePopup(popupAvatarEdit);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       renderLoading(false, evt);
//     });
// }

// function handleFotoFormSubmit(evt) {
//   evt.preventDefault();
//   renderLoading(true, evt);
//   loadCardToServer(linkInput.value, cardNameInput.value)
//     .then((result) => {
//       const cardElement = createCard(result);
//       cards.prepend(cardElement);
//       closePopup(popupAdd);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       renderLoading(false, evt);
//     });
// }

// formAddElement.addEventListener("submit", handleFotoFormSubmit);
// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();
//   renderLoading(true, evt);
//   loadProfileInfoToServer(nameInput.value, jobInput.value)
//     .then((result) => {
//       profileName.textContent = nameInput.value;
//       hobby.textContent = jobInput.value;
//       closePopup(popupEdit);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       renderLoading(false, evt);
//     });
// }
