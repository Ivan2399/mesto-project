import { enableValidation } from "./validate";
// закртие по esc
function closePopupByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}
// открыте попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEsc);
}
// закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupByEsc);
}

function resetForm(popup) {
  popup.querySelector(".popup__form").reset();
}
// загрузка
function renderLoading(isLoading, evt) {
  if (isLoading) {
    evt.target.querySelector(".popup__button").textContent = "Сохранение...";
  } else {
    if (evt.target.closest("#popup-add")) {
      evt.target.querySelector(".popup__button").textContent = "Создать";
    } else {
      evt.target.querySelector(".popup__button").textContent = "Сохранить";
    }
  }
}
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input-item",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input-item_type_error",
  errorClass: "popup__error_visible",
});

export { openPopup, closePopup, resetForm, renderLoading, enableValidation };
