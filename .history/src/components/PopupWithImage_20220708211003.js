import Popup from "./Popup";
import { config } from "../utils/config";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._popupImage = this._popupElement.querySelector(
      config.popup.popupImage
    );
    this._popupImageTitle = this._popupElement.querySelector(
      config.popup.popupImageTitle
    );
  }

  openPopup(item) {
    super.openPopup();
    console.log(item.src)
    this._popupImage.src = item.src;
    this._popupImage.alt = item.alt;
    this._popupImageTitle.textContent = item.alt;
  }
}
