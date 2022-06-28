export default class Section {
  constructor({ item, render }, selector) {
    this._item = item;
    this._renderer = render;
    this._selector = selector;
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

    this._item.reverse().forEach((item) => {
      this.addItem(item);
    });
  }
}
