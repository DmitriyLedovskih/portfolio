import "../styles/index.scss";
// Код пока не очень потом буду улучшать
const element = document.querySelectorAll(".element");

element.forEach((el) => {
  el?.addEventListener("click", () => {
    element.forEach((item) => {
      item.classList.remove("element_active");
    });
    el.classList.add("element_active");
  });
});

class Modal {
  _modal: Element;
  _button: Element;
  constructor(modal: Element, button: Element) {
    this._modal = modal;
    this._button = button;
  }

  open() {
    if (
      this._modal.getAttribute("data-modal") ===
      this._button.getAttribute("data-modal-button")
    ) {
      this._modal.classList.add("modal_opened");
    }
  }

  close() {
    this._modal.classList.remove("modal_opened");
  }
}

const buttons: Element | any = document.querySelectorAll("[data-modal-button]");
const modals: Element | any = document.querySelectorAll("[data-modal]");
modals.forEach((modal: Element) => {
  const closeButton = modal.querySelector(".modal__buttons-button_type_close");
  const fullScreenButton = modal.querySelector(
    ".modal__buttons-button_type_full"
  );
  buttons.forEach((button: Element) => {
    button.addEventListener("dblclick", () => {
      new Modal(modal, button).open();
    });
    closeButton?.addEventListener("click", () => {
      new Modal(modal, button).close();
    });
    fullScreenButton?.addEventListener("click", () => {
      modal.classList.toggle("modal_type_fullscreen");
    });
  });
});

const bottomPanelTime: Element | any = document.querySelector(
  ".bottom__panel-time"
);

const bottomPanelDate: Element | any = document.querySelector(
  ".bottom__panel-date"
);

setInterval(() => {
  const time = new Date();
  bottomPanelTime.textContent = `${time.getHours()}:${
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
  }`;
}, 1000);
const date = new Date();

bottomPanelDate.textContent = `${date.getDate()}.0${
  date.getMonth() + 1
}.${date.getFullYear()}`;
console.log(date);
