let page = document.querySelector(".page");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__close");

const setListner = (element, type, handler) => {
  if (element) {
    return;
  }
  element.addEventListener(type, handler);
  return () => {
    element.removeEventListner(type, handler);
  };
};
const removeEvent = setListner(popup, "click", () => {
  console.log("pop");
});
setListner(closeButton, "click", () => {removeEvent();});
