import { config } from "../utils/config";

export default class Popup {
  constructor(selector) {
    this._selector = selector;
    this._popupElement = document.querySelector(selector);
    this._closeButton = this._popupElement.querySelector(
      config.popup.popupExitButton
    );
  }
  closePopupByEsc(evt) {
    if (evt.key === "Escape") {
      closePopup(this._popupElement);
    }
  }
  // открыте попапа
  openPopup() {
    this._popupElement.classList.add(config.popup.popupVisible);
    this._setEventListner();

    document.addEventListener("keydown", this.closePopupByEsc);
  }
  // закрытие попапа
  closePopup() {
    this._popupElement.classList.remove(config.popup.popupVisible);
    document.removeEventListener("keydown", this.closePopupByEsc);
    this._removeEventListner();
  }
  _setEventListner() {
    this._closeButton.addEventListener("click", () =>{
      this.closePopup();
    });
    this._popupElement.addEventListener("click", function (evt) {
      if (evt.target.classList.contains(config.popup.popupVisible)) {
        closePopup(evt.target);
      }
    });
    document.addEventListener("keydown", this.closePopupByEsc);
  }
  _removeEventListner() {
    this._closeButton.removeEventListener("click", function () {
      this.closePopup();
    });
    this._popupElement.removeEventListener("click", function (evt) {
      if (evt.target.classList.contains(config.popup.popupVisible)) {
        closePopup(evt.target);
      }
    });
    document.removeEventListener("keydown", this.closePopupByEsc);
  }
}
