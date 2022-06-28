import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  openPopup() {
    super.openPopup();
    popupImage.src = cardImage.src;
    popupImage.alt = cardImage.alt;
    popupImageTitle.textContent = cardImage.alt;
  }
}
