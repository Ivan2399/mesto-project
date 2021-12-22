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
let profileInfo = profile.querySelector(".profile__info");
let nameInfo = profileInfo.querySelector(".profile__nickname");
let hobbyInfo = profileInfo.querySelector(".profile__hobbyname");
//форма
const formElement = container.querySelector(".popup__forms");
const nameInput = formElement.querySelector("input[name=name-editing]");
console.log(nameInput);
const jobInput = formElement.querySelector("input[name=hobby-editing]");
console.log(jobInput);
let submitButton = formElement.querySelector("#save");

function formSubmitHandler(evt) {
  console.log(evt.target);
  evt.preventDefault();
  nameInfo.textContent = nameInput.value;
  console.log(value);
  hobbyInfo.textContent = jobInput.value;
  submitButton.addEventListener("click", function () {
    popup.classList.remove("popup_opened");
  });
}
formElement.addEventListener("submit", formSubmitHandler);

addButton.addEventListener("click", function () {
  popupAdd.classList.add("popup_opened");
});
openButton.addEventListener("click", function () {
  popup.classList.add("popup_opened");
});
closeButton.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});
buttonClose.addEventListener("click", function closeBtn() {
  popupAdd.classList.remove("popup_opened");
});
