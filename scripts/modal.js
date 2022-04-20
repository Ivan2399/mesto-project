import {
  popupEdit,
  popupAdd,
  popupAddCardLinkInput,
  popupAddCardNameInput,
  popupAddExitButton,
  popupEditExitButton,
  popupImgExitButton,
  popupImg,
  popupImage,
  popupImageTitle,
  profileEditButton,
  profileName,
  profileHobby,
  profileAddButton,
  nameInput,
  jobInput,
  formAddElement,
  formEditElement,
} from "./constants";

export default function Modal() {
  function openPopup(popup) {
    popup.classList.add("popup_opened");
  }

  function closePopup(popup) {
    popup.classList.remove("popup_opened");
  }

  profileEditButton.addEventListener("click", function () {
    openPopup(popupEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profileHobby.textContent;
  });

  popupEditExitButton.addEventListener("click", function () {
    closePopup(popupEdit);
  });

  function submitAddHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileHobby.textContent = jobInput.value;
    closePopup(popupEdit);
  }

  formEditElement.addEventListener("submit", submitAddHandler);

  profileAddButton.addEventListener("click", function () {
    openPopup(popupAdd);
  });

  popupAddExitButton.addEventListener("click", function () {
    closePopup(popupAdd);
    popupAddCardLinkInput.value = "";
    popupAddCardNameInput.value = "";
  });

  function submitCardHandler(evt) {
    evt.preventDefault();
    const cardItem = createCard(
      popupAddCardLinkInput.value,
      popupAddCardNameInput.value
    );
    cardsContainer.prepend(cardItem);
    closePopup(popupAdd);
    popupAddCardLinkInput.value = "";
    popupAddCardNameInput.value = "";
  }

  formAddElement.addEventListener("submit", submitCardHandler);

  popupImgExitButton.addEventListener("click", function () {
    closePopup(popupImg);
    popupImage.src = "";
    popupImageTitle.textContent = "";
  });
}
