export default class Section {
  constructor({ item, render }, selector) {
    this._item = item;
    this._renderer = render;
    this._selector = selector;
  }
}
