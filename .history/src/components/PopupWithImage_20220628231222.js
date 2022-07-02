import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._popupImage = this._popupElement.querySelector(".popup__image");
        this._popupImageTitle = this._popupElement.querySelector(".popup__image-title");
    }

  openPopup(item) {
    super.openPopup();
    this._popupImage.src = item.src;
    this._popupImage.alt = item.alt;
    this._popupImageTitle.textContent = item.alt;
  }
}