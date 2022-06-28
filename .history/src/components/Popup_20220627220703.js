export default class Popup {
  constructor(selector) {
    this._selector = selector;
  }
  closePopupByEsc(evt) {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".popup_opened");
      closePopup(openedPopup);
    }
  }
  // открыте попапа
  openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", closePopupByEsc);
  }
  // закрытие попапа
  closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", closePopupByEsc);
  }
  _setEventListner() {
    exitButtons.forEach(function (item) {
      item.addEventListener("click", function () {
        closePopup(item.closest(".popup"));
      });
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
