import { config } from "../utils/config";

export const apiConfig = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-9",
  headers: {
    authorization: "1001ec3d-141e-43d4-994e-a14ef4d63d1d",
    "Content-Type": "application/json",
  },
};

export const validationConfig = {
  formSelector: config.popup.formSelector,
  inputSelector: config.form.formInputSelector,
  submitButtonSelector: config.form.sumbitSelectorButton,
  inactiveButtonClass: config.form.submitDisabledButton,
  inputErrorClass: config.form.formErrorInput,
  errorClass: config.form.formErrorClass,
};

