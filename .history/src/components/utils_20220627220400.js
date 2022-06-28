// закртие по esc


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

export { openPopup, closePopup, resetForm, renderLoading };
