let popup = document.querySelector('.popup_opened');
let container = document.querySelector('.popup__container');
let closeButton = container.querySelector('.popup__close');
if(closeButton){
  closeButton.addEventListener('click',closePopup);
}

function closePopup () {
  popup.classList.remove('popup_opened');
}



