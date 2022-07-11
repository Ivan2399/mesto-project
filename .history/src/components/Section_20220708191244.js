export default class Section {
  constructor({ item, render }, selector) {
    this._data = item;
    this._renderer = render;
    this._container = document.querySelector(selector);
  }
  _clear() {
    this._container.innerHTML = "";
  }

  addItem(item) {
    const cardElement = this._renderer(item);
    this._container.prepend(cardElement);
  }

  renderItems() {
    this._clear();

    this._data.reverse().forEach((item) => {
      this.addItem(item);
    });
  }
}
