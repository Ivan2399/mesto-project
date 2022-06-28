import Popup from "./Popup";

export default class PopupWithForm extends Popup {
    constructor (selector, submitFormHandler) {
        super(selector);
    }

    _getInputValues() {
        const inputValues = {};
    
        for (let input of this._inputs) {
          inputValues[input.name] = input.value;
        }
    
        return inputValues;
      }
}