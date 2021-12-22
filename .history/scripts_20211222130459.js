let root = document.querySelector(".root");
let page = root.querySelector(".page");
// попапы
let popup = page.querySelector(".popup ");
let popupAdd = page.querySelector("#add");
// контейнеры в попапах
let container = popup.querySelector(".popup__container");
let addContainer = popupAdd.querySelector("#addContainer");
// кнопки закрытия попапа
let closeButton = container.querySelector("#close");
let buttonClose = addContainer.querySelector("#addClose");
// конпки редактирования информации о себе и добавления карточки
let main = page.querySelector("#main");
let profile = main.querySelector(".profile");
let openButton = profile.querySelector(".profile__edit");
let addButton = profile.querySelector(".profile__add");
//форма
const formElement = container.querySelector(".popup__forms");
console.log(formElement);
const nameInput = formElement.querySelector("#name");
console.log(nameInput);
const jobInput = formElement.querySelector("#hobby");
console.log(jobInput);
let submitButton = formElement.querySelector("#save");
console.log(submitButton);

submitButton.addEventListener("submit", function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInput.textContent = nameInput.value;
  console.log(nameInput);
  jobInput.textContent = jobInput.value;
  console.log(jobInput);
  popup.classList.remove("popup_opened");
  console.log();
});

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