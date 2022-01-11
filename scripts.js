let root = document.querySelector(".root");
let page = root.querySelector(".page");
// попапы
let popup = page.querySelector(".popup ");
let popupAdd = page.querySelector("#add");
// контейнеры в попапах
let container = popup.querySelector(".popup__container");
let addContainer = popupAdd.querySelector("#addContainer");
// кнопки закрытия попапа
let deleteButton = document.querySelectorAll(".table__delete");
let closeButton = document.querySelectorAll(".popup__close");
let submitAddButton = addContainer.querySelector(".popup__button");
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
const jobInput = formElement.querySelector("input[name=hobby-editing]");
let submitButton = formElement.querySelector("#save");
// addForm
let addFormElement = addContainer.querySelector("#addPopup");
let addNameInput = addFormElement.querySelector("#addInput-text");
let addImageInput = addFormElement.querySelector("#addInput-image");
let addSubmitButton = addFormElement.querySelector("#addSubmit");
//карточки
let table = main.querySelector(".table");
let cardsContainer = table.querySelector(".table__container");
let card = document.querySelectorAll(".table__card");
let cardName = document.querySelector(".table__title");
let cardImage = document.querySelector(".table__image");
let likeButton = table.querySelectorAll(".table__button");
console.log(likeButton);
// images
let images = document.querySelectorAll(".table__image");
let imagePopup = document.querySelector("#images");
let mainContainer = document.getElementById("main__container");

// (function createContent() {
//   initialCards.map((item, index) => {
//     return cardsContainer.insertAdjacentHTML(
//       "afterbegin",
//       `<article class="table__card"><img class="table__image" src=${item.link} alt="Картинка"><div class="table__card-text"><h2 class="table__title">${item.name}</h2><button type="button" class="table__button table__button_active"></button></div></article>`
//     );
//   });
// })()
function deleteTable(e, item) {
  item.parentNode.remove();
};
function likeTable(e, item) {
  item.classList.toggle("table__button_active");
};

function addFormSubmitHandler(evt) {
  evt.preventDefault();
  let deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.classList.add("table__delete");
  deleteBtn.addEventListener("click", (e) => deleteTable(e, deleteBtn));
  cardsContainer.insertAdjacentHTML(
    "afterbegin",
    `<article class="table__card"><img class="table__image" src=${addImageInput.value} alt="Картинка"><div class="table__card-text"><h2 class="table__title">${addNameInput.value}</h2><button type="button" class="table__button table__button_active"></button></div></article>`
  );
  cardsContainer.firstChild.insertAdjacentElement("afterbegin", deleteBtn);
  popupAdd.classList.remove("popup_opened");
};

addFormElement.addEventListener("submit", addFormSubmitHandler);

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInfo.textContent = nameInput.value;
  hobbyInfo.textContent = jobInput.value;
  submitButton.addEventListener("click", function () {
    popup.classList.remove("popup_opened");
  });
};

formElement.addEventListener("submit", formSubmitHandler);

function togglePopUp(e, props) {
  switch (e.target.id ? e.target.id : e.target.parentNode.id) {
    case "add_card":
      popupAdd.classList.add("popup_opened");
      closeButton[1].addEventListener("click", () =>
        popupAdd.classList.remove("popup_opened")
      );
      break;
    case "edit_profile":
      popup.classList.add("popup_opened");
      closeButton[0].addEventListener("click", () =>
        popup.classList.remove("popup_opened")
      );
      break;
    default:
      break;
  }
};
function closeImage(e,item) {
  imagePopup.classList.remove("popup_opened");
  imagePopup.querySelector(".table__image").remove();
};

function openImage(e, item) {
  imagePopup.classList.add("popup_opened");
  item.classList.add("table__image_active");
  imagePopup
    .querySelector(".popup__close")
    .addEventListener("click", closeImage);
  imagePopup.insertAdjacentElement("beforeend", item.cloneNode());
  item.classList.remove("table__image_active");
};

[addButton, openButton].forEach((item) => {
  item.addEventListener("click", (e) => togglePopUp(e, item));
});

deleteButton.forEach((item) => {
  item.addEventListener("click", (e) => deleteTable(e, item));
});

images.forEach((item) => {
  item.addEventListener("click", (e) => openImage(e, item));
});

likeButton.forEach((item) => {
  item.addEventListener("click", (e) => likeTable(e, item));
});
