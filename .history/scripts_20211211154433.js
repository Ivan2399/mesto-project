let popup = document.querySelector(".popup");
let popupClose = document.querySelector(".popup_close");

// popupClose.addEventListener("click", function () {
//   popup.classList.remove("popup_opened");
// });

export default function Popup() {
  popup.classList.remove("popup_opened");
}

popupClose.addEventListener('click',Popup);
