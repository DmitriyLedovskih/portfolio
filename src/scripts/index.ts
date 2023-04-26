import "../styles/index.scss";

const element = document.querySelectorAll(".element");

element.forEach((el) => {
  el?.addEventListener("click", () => {
    element.forEach((item) => {
      item.classList.remove("element_active");
    });
    el.classList.add("element_active");
  });
});
