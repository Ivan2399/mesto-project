import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._popupImage = this._popupElement.querySelector(".popup__image");
        this._popupImageTitle = this._popupElement.querySelector(".popup__image-title");
    }

  openPopup(item) {
    super.openPopup();
    _popupImage.src = item.src;
    _popupImage.alt = item.alt;
    _popupImageTitle.textContent = item.alt;
  }
}
