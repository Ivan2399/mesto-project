import { config } from "../utils/config";

export default class Popup {
  constructor(selector) {
    this._selector = selector;
    this._popupElement = document.querySelector(selector);
    this._closeButton = this._popupElement.querySelector(
      config.popup.popupExitButton
    );
  }
  closePopupByEsc = (evt) => {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  };
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

  _clickPopupHandler(evt) {
    const isCloseButtonClicked = evt.target.classList.contains(config.popup.popupExitButton);
    const isOverlayClicked = evt.target.classList.contains(config.popup.popupVisible);

    if (isOverlayClicked || isCloseButtonClicked) {
      this.closePopup(evt.currentTarget);
    }
  }
  setEventListeners() {
    console.log(this._popupElement)
    this._popupElement.addEventListener('click', this._clickPopupHandler);
    document.addEventListener('keydown', this.closePopupByEsc);
  }
  // _setEventListner() {
  //   this._closeButton.addEventListener("click", () => {
  //     this.closePopup();
  //   });
  //   this._popupElement.addEventListener("click", (evt) => {
  //     if (evt.target.classList.contains(config.popup.popupVisible)) {
  //       this.closePopup();
  //     }
  //   });
  //   document.addEventListener("keydown", this.closePopupByEsc);
  // }
  _removeEventListner() {
    this._closeButton.removeEventListener("click", function () {
      this.closePopup();
    });
    this._popupElement.removeEventListener("click", (evt) => {
      if (evt.target.classList.contains(config.popup.popupVisible)) {
        this.closePopup();
      }
    });
    document.removeEventListener("keydown", this.closePopupByEsc);
  }
}
