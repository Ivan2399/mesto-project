let popup = document.querySelector('.popup_opened');
let container = document.querySelectorAll('.popup__container');
let closeButton = document.querySelector('.popup__close');
if(closeButton){
  closeButton.addEventListener('click',closePopup);
}

function closePopup () {
  popup.classList.remove('popup_opened');
}



