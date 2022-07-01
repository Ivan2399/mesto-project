export default class Popup {
  constructor(selector) {
    this._selector = selector;
    this._popupElement = document.querySelector(selector);
    this._closeButton = this._popupElement.querySelector(".popup__button-exit");
  }
  closePopupByEsc(evt) {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".popup_opened");
      closePopup(openedPopup);
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
    item.addEventListener("click", function () {
      closePopup(item.closest(".popup"));
    });

    popupOverlays.forEach(function (item) {
      item.addEventListener("click", function (evt) {
        if (evt.target.classList.contains("popup_opened")) {
          closePopup(evt.target);
        }
      });
    });
  }
}
