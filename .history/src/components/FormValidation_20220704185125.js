export default class FormValidation {
  constructor(selector, form) {
    this._validationConfig = selector;
    this._formElement = form;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._validityConfig.formInputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._validityConfig.sumbitSelectorButton
    );    
  }
  
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._validationConfig.inputErrorClass);    
    errorElement.classList.add(this._validationConfig.errorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._validationConfig.inputErrorClass);
    errorElement.classList.remove(this._validationConfig.errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.disabled = true;
      this._buttonElement.classList.add(this._validationConfig.submitDisabledButton);
    } else {
      this._buttonElement.disabled = false;
      this._buttonElement.classList.remove(this._validationConfig.submitDisabledButton);
    }
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
    
  }

  //сброс настроек валидации для корректного открытия попапа c формой вновь
  resetValidation(popup) {
    
    this._buttonElement.disabled = true;
    this._buttonElement.classList.add("popup__button_disabled");
    this._inputList.forEach((inputElement) => {
      if (inputElement.classList.contains(this._validationConfig.inputErrorClass)) {
        inputElement.classList.remove(this._validationConfig.inputErrorClass);
      }
    });
    popup.querySelectorAll(".popup__error").forEach((errorElement) => {
      if (errorElement.classList.contains("popup__error_visible")) {
        errorElement.classList.remove("popup__error_visible");
        errorElement.textContent = "";
      }
    });
  }
}
