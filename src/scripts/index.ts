import "../styles/index.scss";
// Код пока не очень потом буду улучшать
const element: Element | any = document.querySelectorAll(".element");

element.forEach((el: Element) => {
  el?.addEventListener("click", () => {
    element.forEach((item: Element) => {
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
    this._modal.classList.add("modal_opened");
  }

  close() {
    this._modal.classList.remove("modal_opened");
  }
}

const buttons: Element | any = document.querySelectorAll("[data-modal-button]");
const modals: Element | any = document.querySelectorAll("[data-modal]");
const bottomPanelbuttons: Element | any = document.querySelectorAll(
  "[data-modal-button-bottom-panel]"
);
modals.forEach((modal: Element) => {
  const closeButton = modal.querySelector(".modal__buttons-button_type_close");
  const fullScreenButton = modal.querySelector(
    ".modal__buttons-button_type_full"
  );
  const rollUpButton = modal.querySelector(
    ".modal__buttons-button_type_roll-up"
  );
  const header: any = modal.querySelector(".modal__header");
  const content: any = modal.querySelector(".modal__content");
  bottomPanelbuttons.forEach((but: Element) => {
    buttons.forEach((button: Element) => {
      button.addEventListener("dblclick", () => {
        if (
          modal.getAttribute("data-modal") ===
            button.getAttribute("data-modal-button") &&
          but.getAttribute("data-modal-button-bottom-panel") ===
            button.getAttribute("data-modal-button")
        ) {
          new Modal(modal, button).open();
          but.classList.add("bottom__panel-button_active");
        }
      });
      closeButton?.addEventListener("click", () => {
        new Modal(modal, button).close();
        if (
          modal.getAttribute("data-modal") ===
            button.getAttribute("data-modal-button") &&
          but.getAttribute("data-modal-button-bottom-panel") ===
            button.getAttribute("data-modal-button")
        ) {
          but.classList.remove("bottom__panel-button_active");
          but.classList.remove("bottom__panel-button_open");
        }
      });
      rollUpButton?.addEventListener("click", () => {
        if (
          modal.getAttribute("data-modal") ===
            button.getAttribute("data-modal-button") &&
          but.getAttribute("data-modal-button-bottom-panel") ===
            button.getAttribute("data-modal-button")
        ) {
          new Modal(modal, button).close();
          but.classList.add("bottom__panel-button_open");
          but.classList.remove("bottom__panel-button_active");
        }
      });
      fullScreenButton?.addEventListener("click", () => {
        modal.classList.toggle("modal_type_fullscreen");
        header.classList.toggle("modal_header_type_fullscreen");
        content.classList.toggle("modal_content_type_fullscreen");
      });
    });
  });
});

modals.forEach((modal: Element) => {
  bottomPanelbuttons.forEach((button: Element) => {
    button.addEventListener("click", () => {
      if (
        modal.getAttribute("data-modal") ===
        button.getAttribute("data-modal-button-bottom-panel")
      ) {
        new Modal(modal, button).open();
        button.classList.toggle("bottom__panel-button_active");
      }
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

bottomPanelDate.textContent =
  date.getDate() <= 10
    ? `0${date.getDate()}.${
        date.getMonth() + 1 <= 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1
      }.${date.getFullYear()}`
    : `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
