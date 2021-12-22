let popup = document.querySelector(".popup");
let popupClose = document.querySelector(".popup_close");

function Popup() {
  popup.classList.remove("popup_opened");
}

popupClose.addEventListener('click',Popup);
