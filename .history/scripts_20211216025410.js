let page = document.querySelector('.page');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
if(closeButton){
  closeButton.addEventListener('click',closePopup,false);
}

function closePopup () {
  popup.classList.remove('popup_opened');
}


