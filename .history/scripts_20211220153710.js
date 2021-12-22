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

closeButton.addEventListener('click', function(){
  console.log(closeButton);
})