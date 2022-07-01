export default class Popup {
  constructor(selector) {
    this._selector = selector;
    this._popupElement = document.querySelector(selector);
    this._closeButton = this._popupElement.querySelector(".popup__button-exit");
  }
  closePopupByEsc(evt) {
    if (evt.key === "Escape") {
      closePopup(this._popupElement);
    }
  }
  // открыте попапа
  openPopup() {
    this._selector.classList.add("popup_opened");
    document.addEventListener("keydown", closePopupByEsc);
  }
  // закрытие попапа
  closePopup() {
    this._selector.classList.remove("popup_opened");
    document.removeEventListener("keydown", closePopupByEsc);
  }
  _setEventListner() {
    this._closeButton.addEventListener("click", function () {
      closePopup(this._closeButton.closest(".popup"));
    });
    this._popupElement.addEventListener("click", function (evt) {
      if (evt.target.classList.contains("popup_opened")) {
        closePopup(evt.target);
      }
    });
  }
  _removeEventListner() {
    this._closeButton.removeEventListener("click", function () {
      closePopup(this._closeButton.closest(".popup"));
    });
    this._popupElement.removeEventListener("click", function (evt) {
      if (evt.target.classList.contains("popup_opened")) {
        closePopup(evt.target);
      }
    });
    document.removeEventListener("keydown", this.closePopupByEsc);
  }
}
