let page = document.querySelector('.page');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');

function closePopup () {
  popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click',closePopup,false);

