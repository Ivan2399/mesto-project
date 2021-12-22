let popup = document.querySelector('.popup_opened');
let closeButton = document.querySelector('.popup__close');
if(closeButton){
  closeButton.addEventListener('click',closePopup);
}

function closePopup () {
  popup.classList.remove('popup_opened');
}



