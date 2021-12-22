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
const nameInput = formElement.querySelector("#name");
const jobInput = formElement.querySelector("#hobby");
let submitButton = formElement.querySelector("#save");

formElement.addEventListener("submit", ()=>formSubmitHandler(evt))

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameInput.textContent = nameInput.value;
  jobInput.textContent = jobInput.value;
}

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
