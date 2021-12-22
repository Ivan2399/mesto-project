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
const nameInput = formElement.querySelector("input[name=name-editing]");
console.log(nameInput);
const jobInput = formElement.querySelector("input[name=hobby-editing]");
console.log(jobInput);
let submitButton = formElement.querySelector("#save");

formElement.addEventListener("submit", ()=>formSubmitHandler());

function formSubmitHandler (evt,value) {
  evt.preventDefault(value);
  nameInput.textContent = nameInput.value;
  console.log(nameInput.value);
  jobInput.textContent = jobInput.value;
}
console.log(formSubmitHandler());
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
