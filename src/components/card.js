import { config } from "../utils/config";

export default class Card {
  constructor(
    { data, handleCardClick, likeCard, deleteCard, userId },
    selector
  ) {
    this.data = data;
    this.handleCardClick = handleCardClick;
    this.likeCard = likeCard;
    this.deleteCard = deleteCard;
    this.selector = selector;
    this.userId = userId;
  }

  _getElement() {
    return document
      .querySelector(this.selector)
      .content.querySelector(config.card.cardElements)
      .cloneNode(true);
  }
  _handleImageClick = () => {
    this.handleCardClick(this.data);
  };
  _setEventListener() {
    this.cardImage.addEventListener("click", this._handleImageClick); // открытие картинка

    this.cardLikeButton.addEventListener("click", () => {
      this.likeCard(this.data._id, this.cardLikeButton, this.cardLikeCounter); // лайк
    });
    if (this.data.owner._id === this.userId) {
      // лайк чужой карточки
      this.cardDeleteButton.classList.add(
        config.card.cardElementsDeleteButtonVisible
      );
      this.cardDeleteButton.addEventListener("click", () => {
        // удаление
        this.deleteCard(this.data._id);
      });
    }
  }

  _myLike() {
    let res = false;

    this.data.likes.forEach((item) => {
      if (item._id === this.userId) {
        res = true;
      }
    });
    return res;
  }

  _generate() {
    this.cardImage = this.cardElement.querySelector(
      config.card.cardElementsImage
    );
    this.cardLikeButton = this.cardElement.querySelector(
      config.card.cardElementsLikeButton
    );
    this.cardLikeCounter = this.cardElement.querySelector(
      config.card.cardElementsLikeCounter
    );
    this.cardDeleteButton = this.cardElement.querySelector(
      config.card.cardElementsDeleteButton
    );

    this.cardImage.src = this.data.link;
    this.cardImage.alt = this.data.name;

    this.cardElement.id = this.data._id;
    this.cardElement.querySelector(config.card.cardElementsTitle).textContent =
      this.data.name;

    if (this._myLike()) {
      this.cardLikeButton.classList.add(config.card.cardElementLikeActive); // мои лайки
    }
    if (this.data.likes.length > 0) {
      this.cardLikeCounter.textContent = this.data.likes.length; // счетчик лайков
    }
  }
  createCard() {
    this.cardElement = this._getElement();

    this._generate();
    this._setEventListener();
    return this.cardElement;
  }
}
