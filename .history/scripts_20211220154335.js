let root = document.querySelector(".root");
console.log(root);
let page = root.querySelector(".page");
console.log(page);
let popup = page.querySelector(".popup ");
console.log(popup);
let container = popup.querySelector(".popup__container");
console.log(container);
let closeButton = container.querySelector("#close");
console.log(closeButton);
let main = page.querySelector("#main");
console.log(main);
let profile = main.querySelector(".profile");
console.log(profile);
let openButton = profile.querySelector(".profile__edit");
console.log(openButton);

closeButton.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
  console.log("closeButton");
});
