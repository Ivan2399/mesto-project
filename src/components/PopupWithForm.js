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
  _setButtonState(isSending) {
    this._submitButton.disabled = isSending;
    if (isSending) {
      this._submitButton.textContent = "Сохранение...";
    } else {
      this._submitButton.textContent = "Сохранить";
    }
  }

  _setEventListner() {
    super._setEventListner();
    this._form.addEventListener("submit", this._submitHandler);
  }
  _removeEventListner() {
    super._removeEventListner();
    this._form.removeEventListener("submit", this._submitHandler);
  }
  _submitHandler = (evt) => {
    evt.preventDefault();
    this._setButtonState(true);
    const body = this._getInputValues();
    this._submitFormHandler(body)
      .then(() => this.closePopup())
      .finally(() => {
        this._setButtonState(false);
      });
  };
  closePopup() {
    super.closePopup();
    this._form.reset();
  }
}
