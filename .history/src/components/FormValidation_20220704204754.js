import { config } from "../utils/config";

export default class FormValidation {
  constructor(form) {
    // this._validationConfig = selector;
    this._formElement = form;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(config.form.formInputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      config.form.sumbitSelectorButton
    );
    this._errorList = Array.from(this._formElement.querySelectorAll(config.form.formErrorClass))    
  }
  
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.form.inputErrorClass);    
    errorElement.classList.add(config.form.errorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.form.inputErrorClass);
    errorElement.classList.remove(config.form.errorClass);
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
      this._buttonElement.classList.add(config.form.submitDisabledButton);
    } else {
      this._buttonElement.disabled = false;
      this._buttonElement.classList.remove(config.form.submitDisabledButton);
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
  resetValidation() {
    
    this._buttonElement.disabled = true;
    this._buttonElement.classList.add(config.form.submitDisabledButton);
    this._inputList.forEach((inputElement) => {
      if (inputElement.classList.contains(config.form.inputErrorClass)) {
        inputElement.classList.remove(config.form.inputErrorClass);
      }
    });
    this._errorList.forEach((errorElement) => {
      if (errorElement.classList.contains(config.form.errorClass)) {
        errorElement.classList.remove(config.form.errorClass);
        errorElement.textContent = "";
      }
    });
  }
}
