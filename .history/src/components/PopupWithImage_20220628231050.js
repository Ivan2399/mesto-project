import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._popupImage = this._popupElement.querySelector(".popup__image");
        this._popupImageTitle = this._popupElement.querySelector(".popup__image-title");
    }

  openPopup(item) {
    super.openPopup();
    popupImage.src = item.src;
    popupImage.alt = item.alt;
    popupImageTitle.textContent = item.alt;
  }
}
