import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(selector) {
        
    }

  openPopup(item) {
    super.openPopup();
    popupImage.src = item.src;
    popupImage.alt = item.alt;
    popupImageTitle.textContent = item.alt;
  }
}
