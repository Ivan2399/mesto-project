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
    this._setButtonState = this._setButtonState.bind(this);
    this._inputs = this._form.querySelectorAll(config.form.formInputSelector);
  }

  _getInputValues() {
    const inputValues = {};
    for (let input of this._inputs) {
      inputValues[input.name] = input.value;
    }
    return inputValues;
  }
  // _renderLoading(isLoading, evt) {
  //   if (isLoading) {
  //     evt.target._submitButton.textContent = "Сохранение...";
  //   } else {
  //     if (evt.target.closest(this.selector)) {
  //       evt.target._submitButton.textContent = "Создать";
  //     } else {
  //       evt.target._submitButton.textContent = "Сохранить";
  //     }
  //   }
  // }
  _setButtonState(isSending) {
    this._submitButton.disabled = isSending;
    if (isSending) {
      this._submitButton.textContent = "Сохранение...";
    } else {
      this._defualtSubmitButtonText.textContent = "Сохранить";
    }
  }

  _setEventListner() {
    super._setEventListner();
    this._form.addEventListener("submit", this._submitHandler);
  }
  _removeEventListner() {
    super._removeEventListner();
    this._form.removeEventListner("submit", this._submitHandler);
  }
  _submitHandler = (evt) => {
    evt.preventDefault();
    this._setButtonState(true);
    const body = this._getInputValues();
    this._submitFormHandler(body)
      .then((res) => this.closePopup(res))
      .finally((res) => {
        this._setButtonState(false);
      });
  };
  closePopup() {
    super.closePopup();
    this._form.reset();
  }
}
