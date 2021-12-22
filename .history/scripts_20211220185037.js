let root = document.querySelector(".root");
let page = root.querySelector(".page");
let popup = page.querySelector(".popup ");
let popupAdd = page.querySelector("#add");
let container = popup.querySelector(".popup__container");
let addContainer = popupAdd.querySelector("#addContainer");
let closeButton = container.querySelector("#close");
let buttonClose = addContainer.querySelector("#addClose");
let main = page.querySelector("#main");
let profile = main.querySelector(".profile");
let openButton = profile.querySelector(".profile__edit");
let addButton = profile.querySelector(".profile__add");

addButton.addEventListener("click", function () {
  popupAdd.classList.add("popup_opened");
  
});
openButton.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  
});
closeButton.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
  
});
buttonClose.addEventListener("click", function () {
  popupAdd.classList.remove("popup_opened");
});
