let root = document.querySelector(".root");

let page = root.querySelector(".page");

let popup = page.querySelector(".popup ");

let popupAdd = page.querySelector("#add");

let container = popup.querySelector(".popup__container");

let closeButton = container.querySelector("#close");

let main = page.querySelector("#main");
console.log(main);
let profile = main.querySelector(".profile");
console.log(profile);
let openButton = profile.querySelector(".profile__edit");
console.log(openButton);
let addButton = profile.querySelector(".profile__add");
console.log(addButton);

addButton.addEventListener("click", function () {
  popupAdd.classList.add("popup_opened");
  console.log("popupAdd");
});
openButton.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  console.log("openButton");
});
closeButton.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
  popupAdd.classList.remove("popup_opened");
  console.log("closeButton");
});
closeButton.addEventListener("click", function () {
  popupAdd.classList.remove("popup_opened");
  console.log("closeButton");
});
